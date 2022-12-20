import React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
type propType = {
  FieldName: string;
};
function IconInputField({ FieldName }: propType) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", m: 1 }}>
      <Typography sx={{ fontSize: "12px", fontWeight: "400" }}>
        {FieldName}
      </Typography>
      <Select value="Sick" sx={{ width: "186px", height: "56px" }}>
        <MenuItem>Sick</MenuItem>
        <MenuItem>Personal</MenuItem>
      </Select>
    </Box>
  );
}

export default IconInputField;
