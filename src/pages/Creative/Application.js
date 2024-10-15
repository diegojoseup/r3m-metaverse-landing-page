import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Application() {
  const theme = useTheme();
  const matchUpSm = useMediaQuery(theme.breakpoints.up("sm"));
  const matchUpMd = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box
      sx={{
        px: matchUpMd ? 27 : matchUpSm ? 9 : 5,
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: matchUpMd
            ? "repeat(4, 1fr)"
            : matchUpSm
            ? "repeat(2, 1fr)"
            : "repeat(1, 1fr)",
          gap: 4,
        }}
      >
        {items.map((item, key) => (
          <Stack
            key={key}
            gap={4}
            alignItems="center"
            justifyContent="space-between"
          >
            <Box>
              <Box
                src={item.image}
                component="img"
                sx={{
                  width: "100%",
                  borderRadius: 10,
                }}
              />
            </Box>
            <Stack gap={2} alignItems="center">
              <Typography
                variant="subtitle1"
                sx={{
                  textAlign: "center",
                  color: "#FFFFFF",
                  lineHeight: 1,
                }}
              >
                {item.title}
              </Typography>
              <Typography
                sx={{
                  textAlign: "center",
                  color: "#9DAFBD",
                  lineHeight: 1,
                }}
              >
                {item.description}
              </Typography>
            </Stack>
          </Stack>
        ))}
      </Box>
    </Box>
  );
}

const items = [
  {
    image: "/images/applications/1.png",
    title: "3D Artifacts",
    description: "A Purpose For Dimension",
  },
  {
    image: "/images/applications/2.png",
    title: "AR/VR Fashion",
    description: "Custom Filters and Looks",
  },
  {
    image: "/images/applications/3.png",
    title: "NFT's",
    description: "Custom Collectables",
  },
  {
    image: "/images/applications/4.png",
    title: "Bespoke Worlds",
    description: "Unique AR/VR Spaces",
  },
];
