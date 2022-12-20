import React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import ChangeHistoryIcon from "@mui/icons-material/ChangeHistory";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import AdbIcon from "@mui/icons-material/Adb";
let pages = ["Home", "Request", "Info", "People"];
function NabBarTest() {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#fefefe", color: "#404040", mb: 1 }}
    >
      <Toolbar>
        <IconButton size="large" edge="start" aria-label="logo">
          <AdbIcon />
        </IconButton>
        <Typography
          variant="h5"
          component="a"
          href="/"
          noWrap
          sx={{
            display: "flex",
            fontWeight: 700,
            textDecoration: "none",
            mr: 4,
          }}
        >
          darse
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            direction: "row",
          }}
        >
          {pages.map((page, index) => (
            <Button
              sx={{
                py: 2,
                display: "block",
                color: "inherit",
                // borderBottom: "3px solid blue",
                "&:hover": {
                  background: "rgba(242, 247, 255, 0.6)",

                  borderBottom: "3px solid #090f1a",
                  borderRadius: 0,
                },
              }}
              key={index}
              disableElevation
            >
              {`${page.slice(0, 1)}${page
                .slice(1, page.length + 1)
                .toLowerCase()}`}
            </Button>
          ))}
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            direction: "row",
            ml: 89,
          }}
        >
          <Badge
            color="secondary"
            badgeContent={10}
            sx={{ size: "30px", mx: 4 }}
          >
            <NotificationsNoneIcon />
          </Badge>
          <Avatar
            alt="Remy Sharp"
            src="/picture.jpg"
            sx={{ size: "30px", ml: 2 }}
          />
          <ChangeHistoryIcon sx={{ size: "30px" }} />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NabBarTest;
