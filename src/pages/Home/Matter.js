import { Box, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

export default function Matter() {
  const theme = useTheme();
  return (
    <Box className="item">
      <Box
        className="item__img-wrap"
        sx={{
          background: "url(/images/matter-desktop.png)",
        }}
      >
        <Box
          className="item__img"
          sx={{
            height: 1024,
            background: "url(/images/matter-desktop.png)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></Box>
        <Stack
          alignItems="center"
          gap={1}
          sx={{
            pt: 6,
            position: "absolute",
            width: "100%",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: theme.palette.background.default,
            }}
          >
            Matter
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: theme.palette.background.default,
            }}
          >
            Enterprise AR/VR Publishing
          </Typography>
          <Link to="/matter" style={{ textDecoration: "none" }}>
            <Typography variant="body2" sx={{ color: "#7500FF" }}>
              Learn More &gt;{" "}
            </Typography>
          </Link>
        </Stack>
      </Box>
    </Box>
  );
}
