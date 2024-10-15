import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Project() {
  const theme = useTheme();
  const matchUpSm = useMediaQuery(theme.breakpoints.up("sm"));
  const matchUpMd = useMediaQuery(theme.breakpoints.up("md"));
  const matchUpXs = useMediaQuery(theme.breakpoints.up("xs"));
  return (
    <Box
      sx={{
        px: matchUpMd ? 27 : matchUpSm ? 9 : 2.5,
        py: matchUpMd ? 24 : 12,
        pb: 0,
      }}
    >
      <Stack>
        <Stack sx={{ pt: 4 }} gap={matchUpSm ? 25 : 8}>
          <Typography
            variant="h1"
            sx={{
              maxWidth: 1228,
              textOverflow: "ellipsis",
              overflow: "hidden",
              fontWeight: 600,
              fontfamily: "SF UI Display",
              lineHeight: 1,
            }}
          >
            Your old projects can make you money.
          </Typography>
          <Stack flexDirection="row">
            <Box flex={matchUpMd ? 3 : 0}></Box>
            <Stack flex={4} gap={4}>
              <Stack>
                <Typography variant="subtitle2">
                  H3M Portals combine AR beacon technology with real-time KPI’s
                  to help help creators track and maximize the conversion
                  process in real time so you can engage your audience with the
                  content they need the moment they need it.
                </Typography>
              </Stack>
              <Typography
                variant="subtitle2"
                sx={{
                  background:
                    "linear-gradient(135.78deg, #00FF85 33.19%, #00F0FF 71.03%)",
                  backgroundClip: "text",
                  textFillColor: "transparent",
                }}
              >
                Start Selling &gt;
              </Typography>
            </Stack>
          </Stack>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: matchUpMd
                ? "repeat(4, 1fr)"
                : matchUpSm
                ? "repeat(2, 1fr)"
                : "repeat(1, 1fr)",
              columnGap: matchUpMd ? 2.5 : 2,
              rowGap: 8,
            }}
          >
            {cards.map((card, key) => (
              <Stack key={key} gap={4}>
                <Typography
                  sx={{
                    fontSize: matchUpXs ? "96px !important" : "60px !important",
                    fontFamily: "SF Pro Display",
                    fontWeight: 600,
                    textAlign: "center",
                    background: "linear-gradient(#00FF85, #00F0FF)",
                    backgroundClip: "text",
                    textFillColor: "transparent",
                    lineHeight: 1,
                  }}
                >
                  {card.price}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    textAlign: "center",
                  }}
                >
                  {card.title}
                </Typography>
                <Typography
                  color="text.secondary"
                  variant="body1"
                  sx={{ textAlign: "center" }}
                >
                  {card.content}
                </Typography>
              </Stack>
            ))}
          </Box>
        </Stack>
      </Stack>
      <Box
        sx={{
          pt: 25,
        }}
      >
        <Box className="item">
          <Box
            className="item__img-wrap"
            sx={{
              background: matchUpMd
                ? "url(/images/swimming-matter.png)"
                : matchUpSm
                ? "url(/images/swimming.png)"
                : "url(/images/swimming.png)",
              borderRadius: 10,
            }}
          >
            <Box
              className="item__img"
              sx={{
                height: 904,
                background: "url(/images/model.png)",
                backgroundSize: "cover",
              }}
            ></Box>

            <Stack
              gap={1}
              justifyContent="center"
              sx={{
                position: "absolute",
                width: "100%",
                height: "100%",
              }}
            >
              <Typography variant="h3" sx={{ textAlign: "center" }}>
                Start Selling Today
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ textAlign: "center", cursor: "pointer" }}
              >
                Upload Your Models &gt;
              </Typography>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

const cards = [
  {
    title: "Package",
    price: "1",
    content:
      "Collect your files into an organized folder with a preview, the source file, textures and a baked FBX.",
  },
  {
    title: "Upload",
    price: "2",
    content:
      "Navigate to our upload browser and drop your zip or rar package in our upload window.",
  },
  {
    title: "Sell",
    price: "3",
    content:
      "Promote your work from your own Portal AR space, social channels or portfolio website.",
  },
  {
    title: "Get Paid",
    price: "4",
    content:
      "At the end of each quarter we account for your earnings and issue payment for your work.",
  },
];
