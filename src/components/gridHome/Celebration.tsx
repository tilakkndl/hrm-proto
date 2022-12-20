import React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Celebration() {
  return (
    <Box
      sx={{
        display: "flex",
        width: "98%",
        justifyContent: "flex-start",
        alignItems: "center",
        mb: 2,
        // height: "55px",
      }}
    >
      <Avatar
        alt="Santosh Poudel"
        src="/picture.jpg"
        sx={{ height: "54px", width: "54px", mx: 2, alignItems: "center" }}
      />
      <Box sx={{ height: "54px" }}>
        <Typography sx={{ fontSize: "14px" }}>Santosh Poudel</Typography>
        <Typography sx={{ fontSize: "11px" }}>Feb 22-Birthday</Typography>
      </Box>
    </Box>
  );
}

export default Celebration;
