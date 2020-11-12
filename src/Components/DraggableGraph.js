import React, { Component } from "react";
import {GraphView} from "react-digraph";
import { basics } from "../services/basics";
import {
  HCO, default as nodeConfig,
  NODE_KEY,
  HCP, SPECIAL_EDGE_TYPE
} from "../config";
import Modal from "../Modal";
import "../styles.css";
import Drawer from "./Drawer";
import { Button } from "@material-ui/core";
import Explore from './Explore';


const sample = {
  "nodes": [],
  "edges": []
};

class Graph extends Component {
  constructor(props) {
    super(props);
    this.customNodeRef = React.createRef();
    this.state = {
      graph: sample,
      selected: {},
      hcp: [],
      hco: [],
      showInfo: false,
      datahcp: [],
      datahco: [],
      showMenu: false,
      custInfo: [],
      menuX: "",
      menuY: "",
      selectedId: ""
    };
  }

  renderNode = (nodeRef, data, id, selected, hovered) => {
    return (
      <g x="0" y="0" className={`shape`}>
        {!selected ? null : (
          <foreignObject
            style={{ pointerEvents: "all" }}
            width="100"
            height="50"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <Modal
              id={`${id}-text`}
              onClick={() => {
                console.log("onClick text");
              }}
            />
          </foreignObject>
        )}
        <use
          className={`node ${hovered ? "hovered" : ""} ${selected ? "selected" : ""
            }`}
          x="-77"
          y="-77"
          width="154"
          height="154"
          xlinkHref={`#${data.type}`}
        >
          <svg viewBox="-27 0 154 154" id={data.type} width="154" height="154">
            <rect
              transform="translate(50) rotate(45)"
              width="109"
              height="109"
            />
          </svg>
        </use>
      </g>
    );
  };


  onSelectEdge = (node, event) => {
    //console.log("test select edge");
  };

  onUpdateNode = () => true;

  onDeleteNode = (...args) => {
    this.setState({});
  };

  getNodeIndex(searchNode) {
    return this.state.graph.nodes.findIndex(node => {
      return node[NODE_KEY] === searchNode[NODE_KEY];
    });
  }

  // Helper to find the index of a given edge
  getEdgeIndex(searchEdge) {
    return this.state.graph.edges.findIndex(edge => {
      return (
        edge.source === searchEdge.source && edge.target === searchEdge.target
      );
    });
  }

  // Given a nodeKey, return the corresponding node
  getViewNode(nodeKey) {
    const searchNode = {};

    searchNode[NODE_KEY] = nodeKey;
    const i = this.getNodeIndex(searchNode);

    return this.state.graph.nodes[i];
  }

  addStartNodehco = e => {
    const graph = this.state.graph;
    const cust_id = e.target.getAttribute("val")
    const cust_name = e.target.getAttribute("title")
    // using a new array like this creates a new memory reference
    // this will force a re-render
    graph.nodes = [
      {
        id: cust_id,
        title: cust_name,
        type: HCO,
        x: e ? e.screenX : 0, //Figure out the correct coordinates to drop
        y: e ? e.screenY : 0
      },
      ...this.state.graph.nodes
    ];
    this.setState({
      graph
    });
    basics.setUI(cust_id, "HCO", cust_name, e.screenX, e.screenY)
  };
  addStartNodehcp = e => {
    const graph = this.state.graph;
    const cust_id = e.target.getAttribute("val")
    const cust_name = e.target.getAttribute("title")
    // using a new array like this creates a new memory reference
    // this will force a re-render
    graph.nodes = [
      {
        id: cust_id,
        title: cust_name,
        type: HCP,
        x: e ? e.screenX : 0, //Figure out the correct coordinates to drop
        y: e ? e.screenY : 0
      },
      ...this.state.graph.nodes
    ];
    this.setState({
      graph
    });
    basics.setUI(cust_id, "HCP", cust_name, e.screenX, e.screenY)
  };

  deleteStartNode = () => {
    const graph = this.state.graph;

    graph.nodes.splice(0, 1);
    // using a new array like this creates a new memory reference
    // this will force a re-render
    graph.nodes = [...this.state.graph.nodes];
    this.setState({
      graph
    });
  };

  handleChange = event => {
    this.setState(
      {
        totalNodes: parseInt(event.target.value || "0", 10)
      },
      this.makeItLarge
    );
  };

  onUpdateNode = (viewNode, e) => {
    const graph = this.state.graph;
    const i = this.getNodeIndex(viewNode);

    graph.nodes[i] = viewNode;
    this.setState({ graph });
    if (viewNode) {
      basics.setUI(viewNode.id, viewNode.type, viewNode.title, viewNode.x, viewNode.y)

    }
  };

  onSelectNode = (viewNode, event) => {
    console.log(viewNode,event)
    if (event) {
      const { id = viewNode.id } = event.target;
      if (id.includes("text")) {
        document.getElementById(event.target.id).click();
      }
      this.setState({ selected: viewNode });

      basics.get_customer_info(viewNode.id)
        .then((data) => {
          this.setState({ custInfo: data[viewNode.type][0] })
          this.setState({ showInfo: true })
          console.log("YES", this.state.custInfo)
        })
    }

  };

  // Edge 'mouseUp' handler
  onSelectEdge = viewEdge => {
    this.setState({ selected: viewEdge });
  };

  // Deletes a node from the graph
  onDeleteNode = (viewNode, nodeId, nodeArr) => {
    console.log(viewNode, nodeId, nodeArr)
    const graph = this.state.graph;
    // Delete any connected edges
    const newEdges = graph.edges.filter((edge, i) => {
      if (edge.source === viewNode[NODE_KEY] || edge.target === viewNode[NODE_KEY]) {
        let payload = {
          "cust_id": edge.source, "relationship_type": edge.handleText,
          "related_cust_id": edge.target
        }
        basics.delete_relation(payload)
      }

      return (
        edge.source !== viewNode[NODE_KEY] && edge.target !== viewNode[NODE_KEY]
      );
    });

    graph.nodes = nodeArr;
    graph.edges = newEdges;

    this.setState({ graph, selected: null });
    basics.unsetUI(viewNode.id)
  };

  // Creates a new node between two edges
  onCreateEdge = (sourceViewNode, targetViewNode) => {
    console.log(sourceViewNode, targetViewNode)
    const relation = window.prompt("Enter relationship");
    if (!relation) {
      const relation = "default";
    }
    const graph = this.state.graph;
    // This is just an example - any sort of logic
    // could be used here to determine edge type

    const viewEdge = {
      source: sourceViewNode[NODE_KEY],
      target: targetViewNode[NODE_KEY],
      handleText: relation,
      type: SPECIAL_EDGE_TYPE
    };

    // Only add the edge when the source node is not the same as the target
    if (viewEdge.source !== viewEdge.target) {
      graph.edges = [...graph.edges, viewEdge];
      this.setState({
        graph,
        selected: viewEdge
      });
    }
    basics.joinNode({
      "source": sourceViewNode.id, "relationship_type": relation, "target": targetViewNode.id
    })
  };

  // Called when an edge is reattached to a different target.
  onSwapEdge = (sourceViewNode, targetViewNode, viewEdge) => {
    const graph = this.state.graph;
    const i = this.getEdgeIndex(viewEdge);
    const edge = JSON.parse(JSON.stringify(graph.edges[i]));

    edge.source = sourceViewNode[NODE_KEY];
    edge.target = targetViewNode[NODE_KEY];
    graph.edges[i] = edge;
    // reassign the array reference if you want the graph to re-render a swapped edge
    graph.edges = [...graph.edges];

    this.setState({
      graph,
      selected: edge
    });
  };

  // Called when an edge is deleted
  onDeleteEdge = (viewEdge, edges) => {
    const graph = this.state.graph;

    graph.edges = edges;
    this.setState({
      graph,
      selected: null
    });
    let payload = {
      "cust_id": viewEdge.source, "relationship_type": viewEdge.handleText,
      "related_cust_id": viewEdge.target
    }
    basics.delete_relation(payload)
  };

  onUndo = () => {
    // Not implemented
    console.warn("Undo is not currently implemented in the example.");
    // Normally any add, remove, or update would record the action in an array.
    // In order to undo it one would simply call the inverse of the action performed. For instance, if someone
    // called onDeleteEdge with (viewEdge, i, edges) then an undelete would be a splicing the original viewEdge
    // into the edges array at position i.
  };

  onCopySelected = () => {
    if (this.state.selected.source) {
      console.warn("Cannot copy selected edges, try selecting a node instead.");

      return;
    }

    const x = this.state.selected.x + 10;
    const y = this.state.selected.y + 10;

    this.setState({
      copiedNode: { ...this.state.selected, x, y }
    });
  };

  handleChangeLayoutEngineType = event => {
    this.setState({
      layoutEngineType: event.target.value
    });
  };

  onSelectPanNode = event => {
    if (this.GraphView) {
      this.GraphView.panToNode(event.target.value, true);
    }
  };

  handlePreview = () => {
    window.location = "/preview"
  }

  async componentDidMount() {
    try {
      const response = await basics.on_login();
      const getjson = await basics.generate_relationship_json();
      //for loop here 
      var i;
      for (i = 0; i < getjson["nodes"].length; i++) {
        let type = getjson["nodes"][i]["type"]
        let x = getjson["nodes"][i]["x"]
        let y = getjson["nodes"][i]["y"]
        if (type === "HCP") {
          getjson["nodes"][i]["type"] = HCP
        }
        if (type === "HCO") {
          getjson["nodes"][i]["type"] = HCO
        }
        getjson["nodes"][i]["x"] = parseInt(x)
        getjson["nodes"][i]["y"] = parseInt(y)
      }
      this.setState({ graph: getjson })
      this.setState({ hcp: response["HCP"] });
      this.setState({ hco: response["HCO"] });
      this.setState({ datahco: response["HCO"] });
      this.setState({ datahcp: response["HCP"] });


    } catch (e) {
      console.error(e);
    }
  }
  /* Define custom graph editing methods here */

  render() {
    const nodes = this.state.graph.nodes;
    const edges = this.state.graph.edges;
    const selected = this.state.selected;

    return (
      <div>
        {this.state.showInfo ?
          <Explore closed={() => { this.setState({ showInfo: false }) }} info={this.state.custInfo}></Explore>
          : null}

        <div id="graph" style={{ height: "400px", width:"70%" }}>

          <div style={{ backgroundColor: "white", padding: "10px" }}>
            <Button style={{ float: "right", marginRight: "100px" }} variant="contained" color="primary" onClick={this.handlePreview}>Explore</Button>
            <Drawer
              hcoData={this.state.datahco}
              hcpData={this.state.datahcp}
              addStartNodehcp={this.addStartNodehcp}
              addStartNodehco={this.addStartNodehco}
            ></Drawer>
          </div>
          <GraphView
            showGraphControls={true}
            gridSize="100rem"
            gridDotSize={1}
            renderNodeText={false}
            ref="GraphView"
            nodeKey={NODE_KEY}
            nodes={nodes}
            edges={edges}
            selected={selected}
            nodeTypes={nodeConfig.NodeTypes}
            nodeSubtypes={nodeConfig.NodeSubtypes}
            edgeTypes={nodeConfig.NodeTypes}
            onSelectNode={this.onSelectNode}
            onCreateNode={this.onCreateNode}
            onUpdateNode={this.onUpdateNode}
            onDeleteNode={this.onDeleteNode}
            onSelectEdge={this.onSelectEdge}
            onCreateEdge={this.onCreateEdge}
            onSwapEdge={this.onSwapEdge}
            onDeleteEdge={this.onDeleteEdge}
            readOnly={false}
          />
        </div>
      </div >
    );
  }
}

export default Graph
