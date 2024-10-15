import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Reach() {
  const theme = useTheme();
  const matchUpSm = useMediaQuery(theme.breakpoints.up("sm"));
  const matchUpMd = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box
      sx={{
        px: matchUpMd ? 27 : matchUpSm ? 9 : 5,
        py: matchUpMd ? 24 : 12,
      }}
    >
      <Stack sx={{ pt: 4 }} gap={matchUpSm ? 25 : 8}>
        <Typography
          variant="h1"
          sx={{
            textOverflow: "ellipsis",
            overflow: "hidden",
            fontWeight: 600,
            fontfamily: "SF UI Display",
            lineHeight: 1.1,
            "& span": {
              background: "linear-gradient(#00FF85, #00F0FF)",
              backgroundClip: "text",
              textFillColor: "transparent",
            },
          }}
        >
          Reach people
          <span>&nbsp; anywhere.</span>
        </Typography>
        <Stack flexDirection="row">
          <Box flex={matchUpMd ? 3 : 0}></Box>
          <Stack flex={4} gap={4}>
            <Stack>
              <Typography
                variant="subtitle2"
                sx={{
                  color: "#FFFFFF",
                }}
              >
                Get discovered faster.
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{
                  color: "#777E90",
                }}
              >
                When you publish a world to Portals, you get instant discovery
                with our video feed and a beacon that populates around the user
                in nearby locations. We gamify engagement like Pokemon Go and
                reward users who interact with your brand.
              </Typography>
            </Stack>
            <Typography
              variant="subtitle2"
              sx={{
                background: "linear-gradient(#00FF85, #00F0FF)",
                backgroundClip: "text",
                textFillColor: "transparent",
              }}
            >
              Get Started &gt;
            </Typography>
          </Stack>
        </Stack>
        <Box>
          <Typography
            variant="h5"
            sx={{
              textTransform: "uppercase",
              fontWeight: 700,
              fontFamily: "SF UI Display",
              color: "#5252E8",
              textAlign: "center",
              letterSpacing: 2.4,
            }}
          >
            How it works
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              columnGap: 8,
              pt: 7.5,
              overflow: "auto",
              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            {phones.map((card, key) => (
              <Stack gap={4} justifyContent="space-between">
                <Stack key={key} gap={2}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      textAlign: "center",
                      fontWeight: 700,
                    }}
                  >
                    {card.title}
                  </Typography>
                  <Typography
                    color="text.secondary"
                    sx={{ textAlign: "center" }}
                  >
                    {card.content}
                  </Typography>
                </Stack>
                <Stack gap={4}>
                  <Stack flexDirection="row" justifyContent="center">
                    <Box component="img" src="/images/circle-arrow-up.png" />
                  </Stack>
                  <Stack flexDirection="row" justifyContent="center">
                    <Box component="img" src={card.img} />
                  </Stack>
                </Stack>
              </Stack>
            ))}
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}

const phones = [
  {
    title: "Explore",
    content:
      "Search for beacons and earn rewards for revealing map territory and discovering new experiences",
    img: "/images/portal-1.png",
  },
  {
    title: "Discover",
    content:
      "Discover hidden worlds and unclaimed rewards and unlock new experiences based off real time engagement",
    img: "/images/portal-2.png",
  },
  {
    title: "Engage",
    content:
      "Connect with  brands, musicians, and creators and join communitiies to help growinig brands",
    img: "/images/portal-3.png",
  },
];
