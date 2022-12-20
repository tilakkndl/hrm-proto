import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AdbIcon from "@mui/icons-material/Adb";
import IconButton from "@mui/material/IconButton";
import OtherHousesIcon from "@mui/icons-material/OtherHouses";
function LeaveStatus() {
  return (
    <Box
      sx={{
        border: "1px solid #DFDFDF",
        width: "158.5px",
        // width: "50%",
      }}
    >
      <Typography
        component="p"
        sx={{ fontSize: "12px", fontWeight: 400, mb: 1, ml: 1 }}
      >
        Sick Leave
      </Typography>
      <Grid
        container
        // justifyContent="center"
        // alignItems="center"
        direction="row"
      >
        <Grid item>
          <IconButton
            size="large"
            edge="start"
            aria-label="logo"
            // sx={{ height: "40px", width: "40px" }}
          >
            {/* <AdbIcon /> */}
            <OtherHousesIcon fontSize="large" />
          </IconButton>
        </Grid>
        <Grid item>
          <Typography sx={{ fontSize: "24px" }}>2 days</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default LeaveStatus;
