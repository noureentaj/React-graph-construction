// import ForceGraph3D from '3d-force-graph';
import ForceGraph3D from 'react-force-graph-3d';
import React, { useEffect, useState, useRef, useCallback } from "react";
import { basics } from "../services/basics";
import { Button } from "@material-ui/core";


// the graph configuration, you only need to pass down properties
// that you want to override, otherwise default ones will be used


const Preview = () => {
  const gData = {
    "links": [],
    "nodes": []
  }
  const [json, gen_json] = useState(gData)
  useEffect(async () => {
    let getjson = await basics.generate_preview();
    gen_json(getjson)
    console.log(json)
  }, []);

  const redirectGraph = () => {
    window.location = "/graph"
  }

  const fgRef = useRef();

  const handleClick = useCallback(node => {
    // Aim at node from outside it
    const distance = 40;
    const distRatio = 1 + distance / Math.hypot(node.x, node.y, node.z);

    fgRef.current.cameraPosition(
      { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio }, // new position
      node, // lookAt ({ x, y, z })
      3000  // ms transition duration
    );
  }, [fgRef]);


  return (
    <div>
      <ForceGraph3D
        backgroundColor="white"
        linkAutoColorBy="source"
        linkWidth={1}
        ref={fgRef}
        linkDirectionalParticles={2}
        nodeLabel="id"
        linkLabel="label"
        nodeAutoColorBy="group"
        onNodeClick={handleClick}
        linkDirectionalArrowLength={3.5}
        linkDirectionalArrowRelPos={1}
        graphData={json}
      />
      <Button variant="contained" color="primary" onClick={redirectGraph}>Go back to graph construction</Button>
    </div>)
}

export default Preview
