import React from "react";
import Dashboard from "./Dashboard";
import Build from "./Build";
import Reach from "./Reach";
import Reduction from "./Reduction";
import Street from "./Street";
import Work from "./Work";

import { Box, Stack, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Portals() {
  const theme = useTheme();
  const matchUpMd = useMediaQuery(theme.breakpoints.up("md"));
  const matchUpSm = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Box
      sx={{
        px: matchUpMd ? 4 : 0,
      }}
    >
      <Stack gap={matchUpSm ? 4 : 2.5}>
        <Dashboard />
        <Street />
        <Build />
        {/* <Application /> */}
        <Reach />
        <Work />
        <Reduction />
      </Stack>
    </Box>
  );
}
