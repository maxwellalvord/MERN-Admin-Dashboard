const { Box } = require("@mui/material");
const { styled } = require("@mui/system");

const FlexBetween = stlyed(Box)({
  display: "flex",
  justifyContent: "Space-between",
  alignItems: "center"
});

export default FlexBetween;