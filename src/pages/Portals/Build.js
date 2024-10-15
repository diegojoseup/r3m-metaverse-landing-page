import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Build() {
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
            Portals
          </Typography>
        </Stack>
        <Stack sx={{ pt: 4 }} gap={matchUpSm ? 25 : 8}>
          <Typography
            variant="h1"
            sx={{
              maxWidth: 900,
              textOverflow: "ellipsis",
              overflow: "hidden",
              fontWeight: 600,
              fontfamily: "SF UI Display",
              lineHeight: 1,
              color: theme.palette.background.default,
            }}
          >
            Build your virtual world in minutes.
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
                  Experience an omniverse of AR spaces.
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: "#777E90",
                  }}
                >
                  designed and curated for brands, creators, musicians,
                  entertainer, nft artists, and gamers. First spaces that fit
                  your lifestyle and get fully immersed in worlds beyond your
                  imagination.
                </Typography>
              </Stack>
              <Typography
                variant="subtitle2"
                sx={{
                  color: "#7500FF",
                }}
              >
                Download App &gt;
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
