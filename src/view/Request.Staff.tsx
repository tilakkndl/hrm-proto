import React from "react";
import Box from "@mui/material/Box";
import LeaveStatusRefined from "../components/gridHome/LeaveStatusRefined";
import LargeTypography from "../utils/LargeTypography";
import IconInputField from "../components/IconInputField";

function Request() {
  return (
    <>
      <Box sx={{ backgroundColor: "#fefefe" }}>
        <Box sx={{ width: "20vw", display: "flex", m: 2 }}>
          <LeaveStatusRefined />
          <LeaveStatusRefined />
        </Box>
        <LargeTypography Text="Request History" />
        <Box sx={{ display: "flex" }}>
          <IconInputField FieldName="Leave Type" />
          <IconInputField FieldName="Leave Type" />
          <IconInputField FieldName="Status" />
        </Box>
      </Box>
    </>
  );
}

export default Request;
