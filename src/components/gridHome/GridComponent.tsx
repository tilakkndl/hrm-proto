import React from "react";
import Navbar from "../Navbar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import "./Grid.style.css";
import LeaveStatus from "./LeaveStatus";
import LeaveState from "./LeaveState";
import AvatarComponent from "./AvatarComponent";
import Celebration from "./Celebration";
import Notice from "./Notice";
import Welcome from "./Welcome";
import LeaveStatusRefined from "./LeaveStatusRefined";

function GridComponent() {
  console.log(window.innerHeight);
  return (
    <div>
      <div className="container">
        <div className="box-1">
          <Avatar
            alt="Santosh Poudel"
            src="/picture.jpg"
            sx={{ width: "142px", height: "142px", margin: "auto" }}
          />
          <Typography
            component="h4"
            sx={{
              fontSize: "18px",
              fontWeight: 400,
              margin: "auto",
              mt: -2,
            }}
          >
            Santosh Poudel
          </Typography>
          <Typography
            component="h6"
            sx={{ fontSize: "14px", fontWeigth: 400, margin: "auto", mt: -5 }}
          >
            Product Manager
          </Typography>
          {/* <Grid container sx={{ mb: 2 }}>
            <Grid item>
              <LeaveStatus />
            </Grid>
            <Grid item>
              <LeaveStatus />
            </Grid>
          </Grid> */}
          <Box sx={{ width: "100%", display: "flex", flexDirection: "row" }}>
            <LeaveStatusRefined />
            <LeaveStatusRefined />
          </Box>
          <Box>
            <LeaveState />
            <LeaveState />
            <LeaveState />
          </Box>
        </div>
        <div className="box-2">
          <Typography sx={{ fontSize: "24px" }}>Who's Out</Typography>
          <Typography sx={{ fontSize: "14px", mb: 1 }}>Today</Typography>
          <Stack direction="row" spacing={2}>
            <AvatarComponent />
            <AvatarComponent />
            <AvatarComponent />
            <AvatarComponent />
          </Stack>
          <Typography sx={{ fontSize: "14px", my: 1 }}>Tomorrow</Typography>
          <Stack direction="row" spacing={2}>
            <AvatarComponent />
            <AvatarComponent />
            <AvatarComponent />
            <AvatarComponent />
          </Stack>
        </div>
        <div className="box-3">
          <Typography sx={{ fontSize: "24px", m: 1 }}>Notice Board</Typography>
          <Notice />
          <Notice />
        </div>
        <div className="box-4">
          <Typography sx={{ fontSize: "24px", my: 1 }}>Celebration</Typography>
          <Celebration />
          <Celebration />
          <Celebration />
        </div>

        <div className="box-5">
          <Typography sx={{ fontSize: "24px", fontWeight: "400" }}>
            Welcome to Darse Technology
          </Typography>
          <Welcome />
          <Welcome />
        </div>
      </div>
    </div>
  );
}

export default GridComponent;
