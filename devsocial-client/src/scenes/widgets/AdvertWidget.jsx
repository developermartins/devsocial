import { Typography, useTheme } from "@mui/material";

import FlexBetween from "../../components/FlexBetween";
import WidgetWrapper from "../../components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();

  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={ dark } variant="h5" fontWeight="500">
          Sponsored
        </Typography>

        <Typography color={ medium }>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        src="http://localhost:3001/assets/MidjourneyEmblem.png"
        alt="advert"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />

      <FlexBetween>
        <Typography color={ main }>Midjourney</Typography>
        <Typography color={ medium }>midjourney.com</Typography>
      </FlexBetween>
      <Typography color={ medium } m="0.5rem 0">
        Midjourney is an independent research lab exploring new mediums of thought and expanding
        the imaginative powers of the human species.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
