import React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
function Welcome() {
  return (
    <Box
      sx={{
        width: "98%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        m: 1,
        mb: 2,
      }}
    >
      <Avatar
        alt="Santosh Poudel"
        src="/picture.jpg"
        sx={{ height: "80px", width: "80px" }}
      />
      <Box>
        <Typography sx={{ fontSize: "18px", fontWeight: "400" }}>
          Santosh Poudel
        </Typography>
        <Typography sx={{ fontSize: "14px", fontWeight: "400" }}>
          Nepal
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "end",
        }}
      >
        <Typography sx={{ fontSize: "18px", fontWeight: "400" }}>
          Quality Assurance in Software Development
        </Typography>
        <Typography sx={{ fontSize: "14px", fontWeight: "400" }}>
          Started Monday,February 18
        </Typography>
      </Box>
    </Box>
  );
}

export default Welcome;
