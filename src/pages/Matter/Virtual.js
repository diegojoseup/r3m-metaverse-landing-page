import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Virtual() {
  const theme = useTheme();
  const matchUpSm = useMediaQuery(theme.breakpoints.up("sm"));
  const matchUpMd = useMediaQuery(theme.breakpoints.up("md"));
  const matchUpXs = useMediaQuery(theme.breakpoints.up("xs"));
  return (
    <Box
      sx={{
        px: matchUpMd ? 27 : matchUpSm ? 9 : 2.5,
        py: matchUpMd ? 24 : 12,
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
            Virtual worlds that don’t cost a fortune.
          </Typography>
          <Stack flexDirection="row">
            <Box flex={matchUpMd ? 3 : 0}></Box>
            <Stack flex={4} gap={4}>
              <Stack>
                <Typography variant="subtitle2">
                  A new offering for high-profile clients.
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: "#777E90",
                  }}
                >
                  Don’t lose clients because you cant build Metaverse worlds.
                  Matter lets you skip the development pipeline all together ad
                  publish AR/VR spaces in minutes.
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
                Sign Up For Beta &gt;
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
              columnGap: matchUpMd ? 8 : 12,
              rowGap: 8,
            }}
          >
            {cards.map((card, key) => (
              <Stack key={key}>
                <Typography
                  flex="20%"
                  variant="body2"
                  sx={{
                    textAlign: "center",
                  }}
                >
                  {card.title}
                </Typography>
                <Typography
                  flex="40%"
                  sx={{
                    fontSize: matchUpXs ? "96px !important" : "60px !important",
                    fontFamily: "SF Pro Display",
                    fontWeight: 600,
                    textAlign: "center",
                    background: "linear-gradient(#00FF85, #00F0FF)",
                    backgroundClip: "text",
                    textFillColor: "transparent",
                  }}
                >
                  {card.price}
                </Typography>
                <Typography
                  color="text.secondary"
                  variant="body1"
                  flex="38%"
                  sx={{ textAlign: "center" }}
                >
                  {card.content}
                </Typography>
              </Stack>
            ))}
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
}

const cards = [
  {
    title: "Reduce Dev Time By",
    price: "90%",
    content:
      "Cut your development time and get virtual worlds up and running in miutes.",
  },
  {
    title: "Cut Resource Dependancies By",
    price: "50%",
    content:
      "Reduce your design resources by leveraging our prebuilt 3D assets and virtual worlds.",
  },
  {
    title: "Save A Bundle Per Project",
    price: "$40K",
    content:
      "On average a traditional virtual world can cost a fortune to produce. Earn more by cutting resources and time. ",
  },
  {
    title: "Increase Output Of Virtual Worlds",
    price: "24k",
    content:
      "Instead of spending six months iterating and developing you can publish in one week.",
  },
];
