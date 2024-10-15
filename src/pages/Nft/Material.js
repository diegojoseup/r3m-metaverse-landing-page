import {
  Avatar,
  Box,
  Button,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";

export default function Material() {
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
      <Stack flexDirection={matchUpMd ? "row" : "column"} gap={7.5}>
        <Stack flex={2}>
          <Box
            component="img"
            src="/images/video-file.png"
            sx={{ borderRadius: 10, width: "100%" }}
          />
        </Stack>
        <Stack flex={1} gap={4}>
          <Stack flexDirection="row">
            <Box
              component="img"
              src="/images/Material-logo.svg"
              sx={{ maxWidth: "100%" }}
            />
          </Stack>
          <Stack
            gap={4}
            sx={{
              p: matchUpSm ? 4 : 2,
              border: "1px solid",
              borderColor: "divider",
            }}
          >
            <Typography>
              Each Material you own will grant you earning rewards collected
              from:
            </Typography>
            <Box component="ul" sx={{ my: 0 }}>
              <li>
                <Typography>The sale of our IP to another Entity</Typography>
              </li>
              <li>
                <Typography>Primary IP infringment lawsuit.</Typography>
              </li>
              <li>
                <Typography>Secondary IP infringment lawsuit.</Typography>
              </li>
              <li>
                <Typography>IP licensing deals.</Typography>
              </li>
            </Box>
          </Stack>
          <Stack
            alignItems="center"
            justifyContent="center"
            sx={{
              p: matchUpSm ? 4 : 2,
              border: "1px solid",
              borderColor: "divider",
            }}
          >
            <Typography>Current Bid</Typography>
            <Typography variant="h4" sx={{ fontWeight: 700 }}>
              3 ETH
            </Typography>
            <Typography variant="body2" color="#777E90">
              $3,618.36
            </Typography>
          </Stack>
          <Stack
            flexDirection={matchUpSm ? "row" : "column"}
            justifyContent="space-between"
            gap={4}
          >
            <Stack flexDirection="row" alignItems="center" gap={1}>
              <Avatar
                src="/images/avatar/1.png"
                sx={{ bgcolor: "text.primary" }}
              />
              <Box>
                <Typography color="#777E90">Creator</Typography>
                <Typography>H3M</Typography>
              </Box>
            </Stack>
            <Stack flexDirection="row" alignItems="center" gap={1}>
              <Avatar sx={{ bgcolor: "#45B36B" }}>
                <CropSquareIcon sx={{ color: "text.primary" }} />
              </Avatar>
              <Box>
                <Typography color="#777E90">Instant price</Typography>
                <Typography>1 ETH</Typography>
              </Box>
            </Stack>
          </Stack>
          <Stack
            flexDirection={matchUpSm ? "row" : "column"}
            gap={1}
            justifyContent="space-between"
          >
            <Button
              fullWidth
              sx={{
                background:
                  "linear-gradient(270deg, #5035FF 30.47%, #00A3FF 100%)",
                borderRadius: 15,
                color: theme.palette.text.primary,
                py: 1.5,
              }}
            >
              <Typography>Place a bid</Typography>
            </Button>
            <Button
              fullWidth
              sx={{
                background:
                  "linear-gradient(270deg, #5035FF 30.47%, #00A3FF 100%)",
                borderRadius: 15,
                color: theme.palette.text.primary,
                py: 1.5,
                zIndex: 1,
                position: "relative",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 1,
                  right: 1,
                  bottom: 1,
                  left: 1,
                  backgroundColor: "background.default",
                  borderRadius: 15,
                  zIndex: -1,
                },
              }}
            >
              <Typography
                sx={{
                  background:
                    "linear-gradient(270deg, #5035FF 30.47%, #00A3FF 100%)",
                  backgroundClip: "text",
                  textFillColor: "transparent",
                }}
              >
                Details &gt;
              </Typography>
            </Button>
          </Stack>
          <Stack flexDirection="row" gap={2}>
            <Avatar
              sx={{
                bgcolor: "background.default",
                // border: '2px solid',
                borderColor: "text.secondary",
                color: "text.primary",
              }}
            >
              <WestIcon />
            </Avatar>
            <Avatar
              sx={{
                bgcolor: "background.default",
                border: "2px solid",
                borderColor: "text.secondary",
                color: "text.primary",
              }}
            >
              <EastIcon />
            </Avatar>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
