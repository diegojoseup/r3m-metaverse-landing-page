import {
  Button,
  Divider,
  Box,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CandlestickChartIcon from "@mui/icons-material/CandlestickChart";

export default function Unlock() {
  const theme = useTheme();
  const matchUpSm = useMediaQuery(theme.breakpoints.up("sm"));
  const matchUpMd = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box>
      <Box
        sx={{
          px: matchUpMd ? 27 : matchUpSm ? 9 : 2.5,
          py: matchUpMd ? 24 : 12,
          bgcolor: "text.primary",
        }}
      >
        <Stack>
          <Stack flexDirection="row" gap={1}>
            <Typography variant="subtitle1" color="background.default">
              Enhanced Experience
            </Typography>
          </Stack>
          <Stack sx={{ pt: 4 }} gap={matchUpSm ? 25 : 8}>
            <Typography
              variant="h1"
              color="background.default"
              sx={{
                maxWidth: 1212,
                textOverflow: "ellipsis",
                overflow: "hidden",
                fontWeight: 600,
                fontfamily: "SF UI Display",
                lineHeight: 1,
              }}
            >
              Unlock value and hidden worlds in Portals app.
            </Typography>
            <Stack flexDirection="row">
              <Box flex={matchUpMd ? 3 : 0}></Box>
              <Stack flex={4} gap={4}>
                <Stack>
                  <Typography variant="subtitle2" color="background.default">
                    Enhance your world and earn more.
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: "#777E90",
                    }}
                  >
                    When you purchase an H3M NFT card. You can sync it to our
                    wallet app. Each card has unique properties to enhance your
                    experience. Earn more rewards by engaging, unlock hidden
                    portal, access exlusive locations, get discounted offerings,
                    and more.
                  </Typography>
                </Stack>
                <Typography
                  variant="subtitle2"
                  sx={{
                    background:
                      "linear-gradient(270deg, #5035FF 30.47%, #00A3FF 100%)",
                    backgroundClip: "text",
                    textFillColor: "transparent",
                  }}
                >
                  View All NFT's &gt;
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Box>
      <Box
        sx={{
          mt: "-1px",
          px: matchUpMd ? 27 : matchUpSm ? 9 : 2.5,
          py: matchUpMd ? 24 : 12,
          bgcolor: "text.primary",
        }}
      >
        <Stack
          flexDirection={matchUpMd ? "row" : "column"}
          gap={matchUpMd ? 18 : 5}
        >
          <Stack flex={2}>
            <Box
              component="img"
              src="/images/video-file.png"
              sx={{ borderRadius: 10, width: "100%" }}
            />
          </Stack>
          <Stack flex={1} gap={4}>
            <Stack
              flexDirection={matchUpSm ? "row" : "column"}
              justifyContent="space-between"
              gap={2}
            >
              <Typography
                variant="h4"
                color="background.default"
                sx={{
                  fontWeight: 700,
                }}
              >
                Meta Key
              </Typography>
              <Stack flexDirection="row">
                <Button
                  variant="outlined"
                  sx={{
                    background:
                      "linear-gradient(135.78deg, #00FF85 33.19%, #00F0FF 71.03%)",
                    // backgroundClip: 'text',
                    // textFillColor: 'transparent',
                    zIndex: 1,
                    position: "relative",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 1,
                      right: 1,
                      bottom: 1,
                      left: 1,
                      backgroundColor: "text.primary",
                      borderRadius: 1,
                      zIndex: -1,
                    },
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      background:
                        "linear-gradient(135.78deg, #00FF85 33.19%, #00F0FF 71.03%)",
                      backgroundClip: "text",
                      textFillColor: "transparent",
                    }}
                  >
                    2.45 ETH
                  </Typography>
                </Button>
              </Stack>
            </Stack>
            <Stack
              flexDirection={matchUpSm ? "row" : "column"}
              alignItems={matchUpSm ? "center" : "flex-start"}
              justifyContent="space-between"
              gap={4}
            >
              <Stack
                flexDirection={matchUpSm ? "row" : "column"}
                alignItems={matchUpSm ? "center" : "flex-start"}
                gap={1}
              >
                <Stack flexDirection="row" alignItems="center">
                  <CandlestickChartIcon sx={{ color: "#777E91" }} />
                  <Typography color="#777E91">Highest bid</Typography>
                </Stack>
                <Typography color="background.default">0.001 ETH</Typography>
              </Stack>
              <Stack>
                <Typography color="#777E91">New bid 🔥</Typography>
              </Stack>
            </Stack>
            <Divider />
            <Stack
              sx={{
                "& ul li": {
                  color: "text.secondary",
                  fontSize: matchUpSm ? 32 : 18,
                  // listStyleType: 'desc',
                },
              }}
            >
              <ul
                style={{
                  color: "text.secondary",
                }}
              >
                <li>
                  <Typography variant="body2" color="text.secondary">
                    Increase earnings by 20%
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2" color="text.secondary">
                    Unlimited 3D assets forever{" "}
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2" color="text.secondary">
                    Max Items removed
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2" color="text.secondary">
                    Unlimited premium worlds
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2" color="text.secondary">
                    3 virtual land deeds
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2" color="text.secondary">
                    Access to gated worlds
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2" color="text.secondary">
                    VIP event access
                  </Typography>
                </li>
              </ul>
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
                <Typography>Purchase</Typography>
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
                    backgroundColor: "text.primary",
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
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}
