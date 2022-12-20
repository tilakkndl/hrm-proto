import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import OtherHousesIcon from "@mui/icons-material/OtherHouses";

function LeaveStatusRefined() {
  return (
    <Box
      sx={{
        width: "49%",
        display: "flex",
        flexDirection: "column",
        border: "2px solid #DFDFDF",
      }}
    >
      <Typography
        sx={{
          fontSize: "14px",
          fontWeight: "400",
          ml: 1,
          mb: 1,
        }}
      >
        Sick Leave
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <OtherHousesIcon sx={{ width: "44px", height: "40px" }} />
        <Typography sx={{ fontSize: "24px" }}>2 days</Typography>
      </Box>
    </Box>
  );
}

export default LeaveStatusRefined;
