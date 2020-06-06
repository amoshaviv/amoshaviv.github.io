import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

function Toolbar({ setConfig, config }) {
  const handleSubmit = (ev) => {
    ev.preventDefaults();
  };

  const beamsText = config.beams ? config.beams.join(',') : '';

  return (
    <Box pt={2} pb={1}>
      <form method="get" id="toolbar">
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <TextField
              id="beams"
              name="beams"
              fullWidth
              label="Beams"
              defaultValue={beamsText}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <TextField
              id="maximumRings"
              name="maximumRings"
              fullWidth
              label="Maximum Rings"
              defaultValue={config.maximumRings}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <TextField
              id="maximumBeams"
              name="maximumBeams"
              fullWidth
              label="Maximum Beams"
              defaultValue={config.maximumBeams}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Button fullWidth size="large" variant="outlined" type="submit">Update</Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}

export default Toolbar;
