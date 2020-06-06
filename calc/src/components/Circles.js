import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Tooltip from '@material-ui/core/Tooltip';

const styles = (theme) => ({
  circle: {
    "&:hover": {
      fill: "red",
    },
  },
});

function Circles({ circles, classes }) {
  return circles.map((circle) => (
    <Tooltip
      title={`b: ${circle.numberOfBeams} | cx: ${(circle.cx-1).toFixed(3)} | cy: ${(1-circle.cy).toFixed(3)} | beam: ${(circle.beam+1).toFixed(0)} | ring: ${(circle.ring).toFixed(0)} | rad: ${(circle.radius).toFixed(4)}`}
      aria-label={`circle-a${circle.numberOfBeams}-b${circle.beam}-r${circle.ring}`}
    >
      <circle
        className={classes.circle}
        key={`circle-a${circle.numberOfBeams}-b${circle.beam}-r${circle.ring}`}
        fill="rgba(0,0,0,0.1)"
        cx={circle.cx}
        cy={circle.cy}
        r={circle.radius}
      />
    </Tooltip>
  ));
}

export default withStyles(styles)(Circles);
