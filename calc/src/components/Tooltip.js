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

  const width = tooltipText.current ? tooltipText.current.getBBox().width + 0.001: 0;
  const height = tooltipText.current ? tooltipText.current.getBBox().height + 0.001: 0;
  const x = clickLocation.x * 2;
  const y = clickLocation.y * 2;

  return [
    <rect  width={width} height={3/2*height} key="background" x={x-width} y={y-height} fill="black"></rect>,
    <text
      key="text"
      className={classes.tooltip}
      x={x-width}
      y={y}
      fontSize="0.07"
      fill="white"
      ref={tooltipText}
    >
      x: {(clickLocation.x * 2 - 1).toFixed(2)} |
      y: {(clickLocation.y * 2 - 1).toFixed(2)}
    </text>
  ];
}

export default withStyles(styles)(Tooltip);
