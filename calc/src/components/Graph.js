import React, { useRef } from "react";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import { getGraphMaximumRadius } from "../utils/graphics";

function Graph({ circles }) {
  const svg = useRef(null);
  const graphRadius = getGraphMaximumRadius();
  
  return (
    <svg viewBox="0 0 2 2" xmlns="http://www.w3.org/2000/svg" ref={svg}>
      {circles.map((circle) => (
        <circle fill="rgba(0,0,0,0.1)"   cx={circle.cx} cy={circle.cy} r={circle.radius} />
      ))}
    </svg>
  );
}

export default Graph;
