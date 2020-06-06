import React from "react";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField"

function Toolbar(setConfig) {
  return (
    <Box mt={1} mb={1} id="toolbar">
      <TextField fullWidth label="Number Of Beams" variant="outlined" />
    </Box>
  );
}

export default Toolbar;
