import React, { useRef } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

const styles = (theme) => ({
  tooltip: {
    letterSpacing: "normal",
  },
});

function Tooltip({ clickLocation, classes }) {
  const tooltipText = useRef(null);

  const width = tooltipText.current ? tooltipText.current.getBBox().width: 0;
  const height = tooltipText.current ? tooltipText.current.getBBox().height: 0;
  const x = clickLocation.x * 2;
  const y = clickLocation.y * 2;
  const textX = (x + width) > 2 ? x - width : x;
  const textY = y;
  const pointRadius = 0.005;

  console.log(x,y);
  return [
    <circle cx={x} cy={y} fill="blue" r={pointRadius}></circle>,
    <text
      key="text"
      className={classes.tooltip}
      x={textX}
      y={textY}
      fontSize="0.05"
      fill="white"
      stroke="black"
      strokeWidth="0.002"
      ref={tooltipText}
    >
      &nbsp; x: {(clickLocation.x * 2 - 1).toFixed(2)} | y:{" "}
      {(clickLocation.y * 2 - 1).toFixed(2)}
    </text>,
  ];
}

export default withStyles(styles)(Tooltip);
