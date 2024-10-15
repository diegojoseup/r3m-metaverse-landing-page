import { Box, Stack, Typography } from "@mui/material";

export default function Dashboard() {
  return (
    <Box
      sx={{
        height: 1024,
        background: "url(/images/foundation.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Stack
        alignItems="center"
        gap={1}
        sx={{
          pt: 5,
        }}
      >
        <Typography
          variant="h4"
          color="background.default"
          sx={{ fontWeight: 700 }}
        >
          Foundation
        </Typography>
        <Typography
          variant="body2"
          color="background.default"
          sx={{ opacity: 0.7 }}
        >
          Corporate Social Responsibility
        </Typography>
      </Stack>
    </Box>
  );
}
