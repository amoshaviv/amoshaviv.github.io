import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { getGridLines } from "../utils/calculations";
const gridLines = getGridLines();

const styles = (theme) => ({
  line: {
    "&:hover": {
      stroke: "red",
      strokeWidth: 0.01,
    },
  },
});

function Grid({ classes }) {
  return (
    <>
      {gridLines.map((gridLine) => (
        <>
          <line
            x1={gridLine.x1}
            y1={gridLine.y1}
            x2={gridLine.x2}
            y2={gridLine.y2}
            stroke="rgba(0,0,0,0.2)"
            stroke-width="0.001"
            className={classes.line}
          />
          <text x={gridLine.x1} y={gridLine.y1} font-size="0.05">{gridLine.x1}|{gridLine.y1}</text>
        </>
      ))}
      )}
    </>
  );
}

export default withStyles(styles)(Grid);
