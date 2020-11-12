import React from "react";
import { Carousel } from "react-responsive-carousel";
import Graph from './DraggableGraph'
import Preview from './Preview'

export const Carou = ()=> (
  <Carousel>
    <div>
      <Graph></Graph>
    </div>
    <div style={{ height: "500px" }}>
      <Preview></Preview>
    </div>
  </Carousel>
);
