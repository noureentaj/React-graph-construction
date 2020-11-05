import React, { Component } from "react";
import {
  GraphView // required
} from "react-digraph";
import ReactDOM from "react-dom";
import { basics } from "../services/basics";
import {
  HCO, default as nodeConfig,
  NODE_KEY,
  HCP, SPECIAL_EDGE_TYPE,
  SPECIAL_TYPE
} from "../config";
import Modal from "../Modal";
import "../styles.css";
import Drawer from "./Drawer";
import { Button } from "@material-ui/core";
import Divider from '@material-ui/core/Divider';
import { Input } from '@material-ui/core';
import swal from 'sweetalert';

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
      visibility: true,
      searchInput: "",
      searchInputhcp: "",
      datahcp: [],
      datahco: []
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
    // using a new array like this creates a new memory reference
    // this will force a re-render
    graph.nodes = [
      {
        id: cust_id,
        title: cust_id,
        type: HCO,
        x: e ? e.screenX : 0, //Figure out the correct coordinates to drop
        y: e ? e.screenY : 0
      },
      ...this.state.graph.nodes
    ];
    this.setState({
      graph
    });
    basics.setUI(cust_id, "HCO", cust_id, e.screenX, e.screenY)
  };
  addStartNodehcp = e => {
    const graph = this.state.graph;
    const cust_id = e.target.getAttribute("val")
    // using a new array like this creates a new memory reference
    // this will force a re-render
    graph.nodes = [
      {
        id: cust_id,
        title: cust_id,
        type: HCP,
        x: e ? e.screenX : 0, //Figure out the correct coordinates to drop
        y: e ? e.screenY : 0
      },
      ...this.state.graph.nodes
    ];
    this.setState({
      graph
    });
    basics.setUI(cust_id, "HCP", cust_id, e.screenX, e.screenY)
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

  /*
   * Handlers/Interaction
   */

  // Called by 'drag' handler, etc..
  // to sync updates from D3 with the graph
  onUpdateNode = (viewNode, e) => {
    const graph = this.state.graph;
    const i = this.getNodeIndex(viewNode);

    graph.nodes[i] = viewNode;
    this.setState({ graph });
    if (viewNode) {
      basics.setUI(viewNode.title, viewNode.type, viewNode.title, viewNode.x, viewNode.y)
    }
  };

  // Node 'mouseUp' handler
  onSelectNode = (viewNode, event) => {
    if (event) {
      const { id = viewNode.id } = event.target;
      if (id.includes("text")) {
        document.getElementById(event.target.id).click();
      }

      // Deselect events will send Null viewNode
      this.setState({ selected: viewNode });
        var content;
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            "cust_id": viewNode.title
          }),
        };
        content = fetch(
          `http://localhost:11000/get_customer_info`,
          requestOptions
        )
          .then((response) => response.json())
          .then((data) => {
            let dict = data[viewNode.type][0]
            let Address_Line_1 = dict["Address_Line_1"]
            let Address_Line_2 = dict["Address_Line_2"]
            let zip = dict["ZIP_CD"]
            let cust_name = dict["cust_name"]
            swal(cust_name, "Address: " + Address_Line_1 + " " + Address_Line_2 + " " + "ZIP :" + zip);
          });
    }
  };

  // Edge 'mouseUp' handler
  onSelectEdge = viewEdge => {
    this.setState({ selected: viewEdge });
  };

  // Updates the graph with a new node
  onCreateNode = (x, y) => {
    const graph = this.state.graph;

    // This is just an example - any sort of logic
    // could be used here to determine node type
    // There is also support for subtypes. (see 'sample' above)
    // The subtype geometry will underlay the 'type' geometry for a node
    const type = Math.random() < 0.25 ? SPECIAL_TYPE : HCO;

    const viewNode = {
      id: "",
      title: "",
      type,
      x,
      y
    };

    graph.nodes = [...graph.nodes, viewNode];
    this.setState({ graph });
  };



  // Deletes a node from the graph
  onDeleteNode = (viewNode, nodeId, nodeArr) => {
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
    basics.unsetUI(viewNode.title)
  };

  // Creates a new node between two edges
  onCreateEdge = (sourceViewNode, targetViewNode) => {
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

  // onPasteSelected = () => {
  //   if (!this.state.copiedNode) {
  //     console.warn(
  //       "No node is currently in the copy queue. Try selecting a node and copying it with Ctrl/Command-C"
  //     );
  //   }

  //   const graph = this.state.graph;
  //   const newNode = { ...this.state.copiedNode, id: Date.now() };

  //   graph.nodes = [...graph.nodes, newNode];
  //   this.forceUpdate();
  // };

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
  handletabVis = () => {
    this.setState({ visibility: !this.state.visibility });
  }
  handleInputChange = event => {
    const name = event.target.name;
    const val = event.target.value;
    this.setState({ [name]: val });
    if (name === "searchInput") {
      if (val.length !== 0) {
        this.globalSearch(val, this.state.hco, name);
      }
    }
    if (name === "searchInputhcp") {
      if (val.length !== 0) {
        this.globalSearch(val, this.state.hcp, name);
      }
    }
  };
  globalSearch = (searchInput, full_data, search_name) => {
    if (searchInput.length !== 0) {
      let filteredData = full_data.filter(value => {
        return (
          value.custId.toLowerCase().includes(searchInput.toLowerCase()) ||
          value.cust_name.toLowerCase().replace(/\s/g, '_').includes(searchInput.replace(/\s/g, '_'))

        );
      });
      if (search_name === "searchInput") {
        this.setState({ datahco: filteredData });
      }
      if (search_name === "searchInputhcp") {
        this.setState({ datahcp: filteredData });
      }
    }
    else {
      if (search_name === "searchInput") {
        this.setState({ datahco: this.state.hco });
      }
      if (search_name === "searchInputhcp") {
        this.setState({ datahcp: this.state.hcp });
      }
    }
  };
  render() {
    const nodes = this.state.graph.nodes;
    const edges = this.state.graph.edges;
    const selected = this.state.selected;

    return (
      <div style={{ backgroundColor: "black", padding: "20px" }}>
        <div class="header">
          <h1>Graph PoC</h1>
          <p>Affiliation Management</p>
        </div>
        <br />
        <Divider></Divider>
        <br />
        <Button style={{ float: "right" }} variant="contained" color="primary" onClick={this.handlePreview}>3D Preview</Button>
        <Drawer
          hcoData={this.state.datahco}
          hcpData={this.state.datahcp}
          addStartNodehco={this.addStartNodehco}
          handleInputChange={this.handleInputChange}
        ></Drawer>
        <br />
        <Divider></Divider>
        <br />
        <div id="graph" style={{ height: "500px" }}>
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
          //renderNode={this.renderNode}
          />
          <br />
          <br />
          <br />
          <Button variant="contained" color="primary" onClick={this.handletabVis}>Toggle table visibility</Button>
          <br />
          <br />
          <Divider></Divider>
          <br />
          <div>
            <div style={{ float: "right" }}>
              {this.state.visibility ?
                <div>
                  <p>HCO</p>
                  <Input
                    onChange={this.handleInputChange}
                    name="searchInput"
                    value={this.state.searchInput || ""}
                    placeholder="Search.." />
                </div>
                : null}
              {this.state.visibility && this.state.datahco.map((item, index) => {
                return (
                  <div key={index}>
                    <p className="Tables" val={item.custId} draggable onDragEnd={e => this.addStartNodehco(e)}>{item.cust_name}</p >
                  </div >
                );
              })}
            </div>
            <div style={{ float: "left" }}>
              {this.state.visibility ?
                <div>
                  <p>HCP</p>
                  <Input
                    onChange={this.handleInputChange}
                    name="searchInputhcp"
                    value={this.state.searchInputhcp || ""}
                    placeholder="Search.." />
                </div>
                : null}
              {this.state.visibility && this.state.datahcp.map((item, index) => {
                return (
                  <div key={index}>
                    <p className="Tables" val={item.custId} draggable onDragEnd={e => this.addStartNodehcp(e)}>{item.cust_name}</p >
                  </div >
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Graph
