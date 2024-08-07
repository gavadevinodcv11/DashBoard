import React from "react";
import CircularProgress from "@mui/joy/CircularProgress";

export default function CircularProgressWithLabel() {
  return (
    <CircularProgress size='lg' variant="soft" determinate value={70}>
      <p color="white">70%</p>
    </CircularProgress>
  );
}
