import React from "react";
import { Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Street() {
  const theme = useTheme();
  const matchUpMd = useMediaQuery(theme.breakpoints.up("md"));
  const matchUpSm = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Box className="item">
      <Box
        className="item__img-wrap"
        sx={{
          background: "url(/images/street-desktop.png)",
        }}
      >
        <Box
          className="item__img"
          sx={{
            height: 1024,
            background: matchUpMd
              ? "url(/images/street-desktop.png)"
              : matchUpSm
              ? "url(/images/street-tablet.png)"
              : "url(/images/street-mobile.png)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></Box>
      </Box>
    </Box>
  );
}
