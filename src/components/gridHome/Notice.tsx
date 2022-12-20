import React from "react";
import Box from "@mui/material/Box";
import ComputerIcon from "@mui/icons-material/Computer";
import Typography from "@mui/material/Typography";
function Notice() {
  const iconStyle = {
    width: "54px",
    height: "36px",
  };
  return (
    <Box sx={{ display: "flex", flexDirection: "row", mb: 1 }}>
      <ComputerIcon sx={{ size: "55px", mr: 3 }} style={iconStyle} />
      <Box sx={{ width: "80%" }}>
        <Typography sx={{ fontSize: "20px", fontWeight: "600" }}>
          Change in IT Policy
        </Typography>
        <Typography sx={{ fontSize: "14px" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quos
          iusto amet veritatis earum non maiores, perspiciatis quis, dolor
          dignissimos consequuntur nam.
        </Typography>
      </Box>
    </Box>
  );
}

export default Notice;
