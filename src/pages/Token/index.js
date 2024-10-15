import React from "react";

import {
  Box,
  Button,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
  Chip,
  LinearProgress,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Token() {
  const theme = useTheme();
  const matchUpMd = useMediaQuery(theme.breakpoints.up("md"));
  const matchUpSm = useMediaQuery(theme.breakpoints.up("sm"));
  const [user, setUser] = React.useState(1);
  const handleUser = (user) => {
    setUser(user);
  };

  return (
    <Box
      sx={{
        px: matchUpMd ? 4 : 0,
        py: 15,
      }}
    >
      <Box
        sx={{
          px: matchUpMd ? 27 : matchUpSm ? 9 : 2.5,
          py: matchUpMd ? 12 : 0,
        }}
      >
        <Stack
          flexDirection={matchUpMd ? "row" : "column"}
          alignItems={matchUpMd ? "center" : "inherit"}
          gap={12}
        >
          <Stack flex={1} gap={4}>
            <Typography variant="subtitle1">Passive Income</Typography>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: "92px !important",
                fontFamily: "SF Pro Display",
                lineHeight: 1,
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              Earn 36% APY when you stake.
            </Typography>
            <Stack>
              <Typography
                variant="body2"
                sx={{
                  "& span": {
                    color: "#777E90",
                  },
                }}
              >
                Rewards Issued: <span> Every 3 Seconds </span>
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  "& span": {
                    color: "#777E90",
                  },
                }}
              >
                Collect Rewards: <span> After 7 Days</span>
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  "& span": {
                    color: "#777E90",
                  },
                }}
              >
                Unstake: <span>After 14 Days</span>
              </Typography>
            </Stack>
          </Stack>
          <Stack flex={1} gap={2.5}>
            <Stack alignItems="center" justifyContent="center">
              <Stack
                flexDirection="row"
                sx={{
                  background: "#181E25",
                  borderRadius: 10,
                  p: 0.5,
                }}
              >
                <Button
                  sx={{
                    flex: 1,
                    borderRadius: 10,
                    px: matchUpSm ? 5 : 2,
                    py: 1,
                    bgcolor: user == 1 ? "#000" : "transparent",
                    color: user == 1 ? "#fff" : "rgba(255,255,255,0.3)",
                  }}
                  onClick={() => handleUser(1)}
                >
                  <Typography variant="h6">Stake</Typography>
                </Button>
                <Button
                  sx={{
                    flex: 1,
                    borderRadius: 10,
                    px: matchUpSm ? 5 : 2,
                    py: 1,
                    bgcolor: user == 2 ? "#000" : "tranparent",
                    color: user == 2 ? "#fff" : "rgba(255,255,255,0.3)",
                  }}
                  onClick={() => handleUser(2)}
                >
                  <Typography variant="h6">Unstake</Typography>
                </Button>
              </Stack>
            </Stack>
            <Stack gap={1.5}>
              <Stack flexDirection="row" justifyContent="space-between">
                <Typography>From</Typography>
                <Typography color="#5F97FF">Use Max</Typography>
              </Stack>
              <Stack
                flexDirection={matchUpSm ? "row" : "column"}
                alignItems="center"
                gap={2}
                sx={{
                  border: "1px solid #303C4B",
                  borderRadius: 6,
                  px: 2,
                  py: 1.5,
                  width: "100%",
                }}
              >
                <Typography>HMMM</Typography>
                <Divider
                  orientation={matchUpSm ? "vertical" : "horizontal"}
                  flexItem
                />
                <Stack>
                  <Typography
                    sx={{
                      fontSize: "44px !important",
                      lineHeight: 1,
                      background:
                        "linear-gradient(91.26deg, #70A2FF 0%, #54F0D1 100%)",
                      backgroundClip: "text",
                      textFillColor: "transparent",
                    }}
                  >
                    15,249
                  </Typography>
                  <Typography>%5,000</Typography>
                </Stack>
              </Stack>
            </Stack>

            <Stack
              flexDirection={matchUpSm ? "row" : "column"}
              alignItems="center"
              gap={2}
              sx={{
                border: "1px solid #303C4B",
                borderRadius: 6,
                px: 2,
                py: 1.5,
                width: "100%",
              }}
            >
              <Stack flex={1} gap={2}>
                <Typography
                  sx={{
                    fontSize: "44px !important",
                    lineHeight: 1,
                    background:
                      "linear-gradient(91.26deg, #70A2FF 0%, #54F0D1 100%)",
                    backgroundClip: "text",
                    textFillColor: "transparent",
                    textAlign: "center",
                  }}
                >
                  36%
                </Typography>
                <Typography
                  sx={{
                    textAlign: "center",
                  }}
                >
                  APY
                </Typography>
              </Stack>
              <Divider
                orientation={matchUpSm ? "vertical" : "horizontal"}
                flexItem
              />
              <Stack flex={1} gap={2}>
                <Typography
                  sx={{
                    fontSize: "44px !important",
                    lineHeight: 1,
                    background:
                      "linear-gradient(91.26deg, #70A2FF 0%, #54F0D1 100%)",
                    backgroundClip: "text",
                    textFillColor: "transparent",
                    textAlign: "center",
                  }}
                >
                  4200
                </Typography>
                <Typography
                  sx={{
                    textAlign: "center",
                  }}
                >
                  Earnings
                </Typography>
              </Stack>
            </Stack>
            <Stack
              gap={4}
              sx={{
                border: "1px solid #303C4B",
                borderRadius: 6,
                p: 4,
                width: "100%",
              }}
            >
              <Stack
                flexDirection={matchUpMd ? "row" : "column"}
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography>Staked</Typography>
                <Typography variant="h6">25,000/120,350</Typography>
              </Stack>
              {/* <Slider /> */}
              <LinearProgress
                value={30}
                variant="determinate"
                sx={{
                  background: "#202832",
                  // background: 'linear-gradient(270.67deg, #5200FF 0.12%, #00B6C1 99.61%)',
                  height: 22,
                  borderRadius: 10,
                  "& .MuiLinearProgress-bar": {
                    background:
                      "linear-gradient(270.67deg, #5200FF 0.12%, #00B6C1 99.61%)",
                  },
                }}
              />
              <Stack
                flexDirection={matchUpMd ? "row" : "column"}
                justifyContent="space-between"
                alignItems="center"
                gap={2}
              >
                <Typography variant="caption" color="#717891">
                  Rewards Earned: 850 HMMM
                </Typography>
                <Chip label="Get Rewards" />
              </Stack>
            </Stack>
            <Stack sx={{ px: 4, pt: 2 }}>
              <Button
                sx={{
                  background:
                    "linear-gradient(270.67deg, #5200FF 0.12%, #00B6C1 99.61%)",
                  borderRadius: 15,
                  color: theme.palette.text.primary,
                  px: matchUpSm ? 10 : 0,
                  py: 1.5,
                  width: matchUpSm ? "unset" : "100%",
                }}
              >
                <Typography>Stake</Typography>
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Box>

      {/* <Stack gap={matchUpSm ? 4 : 2.5}>
                <Passive />
            </Stack> */}
    </Box>
  );
}
