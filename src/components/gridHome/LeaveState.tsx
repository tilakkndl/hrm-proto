import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import OtherHousesIcon from "@mui/icons-material/OtherHouses";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import Button from "@mui/material/Button";

function LeaveState() {
  return (
    <Box
      sx={{
        width: "317px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        border: "1px solid #DFDFDF",
        alignContent: "center",
        p: 1,
        pr: 0,
        pl: 0,
      }}
    >
      <OtherHousesIcon fontSize="large" />
      <Typography sx={{ mt: 1 }}>12Feb, 2022</Typography>
      <Button
        color="primary"
        startIcon={<HorizontalRuleIcon sx={{ transform: "rotate(90deg)" }} />}
        sx={{ border: "2px solid #DFDFDF", pr: 2, pl: 0 }}
      >
        approved
      </Button>
    </Box>
  );
}

export default LeaveState;
