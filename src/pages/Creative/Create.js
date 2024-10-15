import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Create() {
  const theme = useTheme();
  const matchUpSm = useMediaQuery(theme.breakpoints.up("sm"));
  const matchUpMd = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box
      sx={{
        px: matchUpMd ? 27 : matchUpSm ? 9 : 5,
        py: matchUpMd ? 24 : 12,
        bgcolor: theme.palette.text.primary,
      }}
    >
      <Stack>
        <Stack flexDirection="row" gap={1}>
          <Stack justifyContent="center">
            <Box
              src="/images/logo.png"
              component="img"
              sx={{
                width: matchUpSm ? 42 : 21,
              }}
            />
          </Stack>
          <Typography
            variant="subtitle1"
            sx={{
              color: theme.palette.background.default,
            }}
          >
            Creative
          </Typography>
        </Stack>
        <Stack sx={{ pt: 4 }} gap={matchUpSm ? 25 : 8}>
          <Typography
            variant="h1"
            sx={{
              textOverflow: "ellipsis",
              overflow: "hidden",
              fontWeight: 600,
              fontfamily: "SF UI Display",
              lineHeight: 1,
              color: theme.palette.background.default,
              "& span": {
                background: "linear-gradient(#5035FF, #00A3FF)",
                backgroundClip: "text",
                textFillColor: "transparent",
              },
            }}
          >
            Create virtually &nbsp;
            <span>anything.</span>
          </Typography>
          <Stack flexDirection="row">
            <Box flex={matchUpMd ? 3 : 0}></Box>
            <Stack flex={4} gap={4}>
              <Stack>
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: "#000000",
                  }}
                >
                  Reduce your production costs by 50%.
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: "#777E90",
                  }}
                >
                  Get all your creative designed under one roof and deploy
                  everywhere. Stop juggling agencies, get more coverage for your
                  creative work, expand your reach, get deeper engagement, and
                  unlock sales opportunities through monetization.
                </Typography>
              </Stack>
              <Typography
                variant="subtitle2"
                sx={{
                  color: "#7500FF",
                }}
              >
                Get Started &gt;
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
