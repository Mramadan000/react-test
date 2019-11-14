import React from "react";
import { x, y } from "./ExportFile";

const Child = props => {
  return (
    <div>
      <h2>{props.address}</h2>
      <h3>{x}</h3>
      <h4>{y}</h4>
    </div>
  );
};
export default Child;
