import { Box, Stack, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Dashboard from "./Dashboard";
import Create from "./Create";
import Access from "./Access";
import Covered from "./Covered";
import Engage from "./Engage";
import Application from "./Application";
import Faq from "./Faq";
import Swimming from "./Swimming";

export default function Creative() {
  const theme = useTheme();
  const matchUpMd = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box
      sx={{
        px: matchUpMd ? 4 : 0,
        pb: 4,
      }}
    >
      <Stack gap={4}>
        <Dashboard />
        <Create />
        <Access />
        <Covered />
        <Engage />
        <Application />
        <Faq />
        <Swimming />
      </Stack>
    </Box>
  );
}
