import { Box, Stack, Typography } from "@mui/material";

export default function Dashboard() {
  return (
    <Box className="item">
      <Box
        className="item__img-wrap"
        sx={{
          background: "url(/images/creative-desktop.png)",
        }}
      >
        <Box
          className="item__img"
          sx={{
            height: 1024,
            background: "url(/images/creative-desktop.png)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <Stack
            alignItems="center"
            gap={1}
            sx={{
              pt: 12,
            }}
          >
            <Typography variant="h4">Creative</Typography>
            <Typography variant="body2">Shape Your Virtual Presence</Typography>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
