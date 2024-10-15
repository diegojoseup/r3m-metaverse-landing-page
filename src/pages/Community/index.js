import { Box, Stack, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Dashboard from "./Dashboard";
import Passive from "./Passive";
import Unlock from "./Unlock";
import Manage from "./Manage";

export default function Community() {
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
        <Passive />
        <Unlock />
        <Manage />
      </Stack>
    </Box>
  );
}
