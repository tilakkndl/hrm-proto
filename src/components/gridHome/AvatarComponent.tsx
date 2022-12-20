import React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
function AvatarComponent() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        alt="Santosh Poudel"
        src="/picture.jpg"
        sx={{ height: "54px", width: "54px" }}
      />
    </Stack>
  );
}

export default AvatarComponent;
