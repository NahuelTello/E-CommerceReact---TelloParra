import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Spinner = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress sx={{ color: "#2A2A2A" }} />
    </Box>
  );
};

export default Spinner;
