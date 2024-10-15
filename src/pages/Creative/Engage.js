import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Engage() {
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
          Keep people engaged up to
          <span>&nbsp;20x longer.</span>
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
                Boost your selling power.
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{
                  color: "#777E90",
                }}
              >
                When you leverage immersive technology to tell a story and offer
                your products, you stand out from the competition and consumers
                stick around longer.
              </Typography>
            </Stack>
            <Stack>
              <Typography
                variant="subtitle2"
                sx={{
                  color: "#777E90",
                  // lineHeight: 1.2,
                  "& span": {
                    color: "#FFFFFF",
                  },
                }}
              >
                <span>AVG WEB SESSION:&nbsp;</span> 15 - 45 Seconds
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{
                  color: "#777E90",
                  // lineHeight: 1.2,
                  "& span": {
                    color: "#FFFFFF",
                  },
                }}
              >
                <span>AVG AR/VR SESSION:&nbsp;</span> 19.1 Minutes
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
              Start Now &gt;
            </Typography>
          </Stack>
        </Stack>
        <Box>
          <Stack gap={4}>
            <Stack alignItems="center">
              <Typography
                variant="subtitle1"
                sx={{
                  color: "#777E90",
                  "& span": {
                    color: "#FFFFFF",
                  },
                }}
              >
                Virtual Worlds&nbsp;
                <span>Real Revenue</span>
              </Typography>
            </Stack>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: matchUpMd
                  ? "repeat(8, 1fr)"
                  : matchUpSm
                  ? "repeat(4, 1fr)"
                  : "repeat(2, 1fr)",
                gap: matchUpSm ? 5.5 : 2.5,
              }}
            >
              {items.map((item, key) => (
                <Stack
                  key={key}
                  gap={3}
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Box sx={{ px: matchUpSm ? 2.5 : 0 }}>
                    <Box
                      src={item.image}
                      component="img"
                      sx={{
                        width: "100%",
                        maxWidth: "100%",
                      }}
                    />
                  </Box>
                  <Typography
                    sx={{
                      color: "#9DAFBD",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                    }}
                  >
                    {item.title}
                  </Typography>
                </Stack>
              ))}
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}

const items = [
  { image: "/images/strategy.png", title: "Strategy" },
  { image: "/images/ar.png", title: "AR/VR" },
  { image: "/images/campaigns.png", title: "Campaigns" },
  { image: "/images/events.png", title: "Events" },
  { image: "/images/experiential.png", title: "Experiential" },
  { image: "/images/video.png", title: "Video" },
  { image: "/images/games.png", title: "Games" },
  { image: "/images/social.png", title: "Social" },
];
