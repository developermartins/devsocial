import { Box } from "@mui/material";
import { styled } from "@mui/system";

// Reuse css properties
const FlexBetween = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
});

export default FlexBetween;

