import React, { useRef } from "react";
import Grid from "./Grid";
import Circles from "./Circles";

function Graph({ config, circles }) {
  const svg = useRef(null);

  return (
    <svg viewBox="0 0 2 2" xmlns="http://www.w3.org/2000/svg" ref={svg}>
      <Circles circles={circles} />
      <Grid />
    </svg>
  );
}

export default Graph;
