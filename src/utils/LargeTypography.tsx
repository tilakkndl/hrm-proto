import React from "react";
import Typography from "@mui/material/Typography";
type propsType = {
  Text: string;
};
function LargeTypography({ Text }: propsType) {
  return <Typography sx={{ fontSize: "24px", m: 2 }}>{Text}</Typography>;
}

export default LargeTypography;
