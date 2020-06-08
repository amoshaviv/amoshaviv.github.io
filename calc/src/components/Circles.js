import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  circle: {
    "&:hover": {
      fill: "red",
    },
  },
});

function Circles({ circles, classes }) {
  return circles.map((circle) => (
      <circle
        className={classes.circle}
        key={`circle-a${circle.numberOfBeams}-b${circle.beam}-r${circle.ring}`}
        fill="rgba(0,0,0,0.1)"
        cx={circle.cx}
        cy={circle.cy}
        r={circle.radius}
      />
  ));
}

export default withStyles(styles)(Circles);
