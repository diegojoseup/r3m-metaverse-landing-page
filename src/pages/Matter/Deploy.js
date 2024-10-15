import { Box, Stack, Typography, useMediaQuery, Divider } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Deploy() {
  const theme = useTheme();
  const matchUpSm = useMediaQuery(theme.breakpoints.up("sm"));
  const matchUpMd = useMediaQuery(theme.breakpoints.up("md"));
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
              "& span": {
                background:
                  "linear-gradient(135.78deg, #00FF85 33.19%, #00F0FF 71.03%)",
                backgroundClip: "text",
                textFillColor: "transparent",
              },
            }}
          >
            Deploy your virtual worlds &nbsp; <br />
            <span>without code.</span>
          </Typography>
          <Stack flexDirection="row">
            <Box flex={matchUpMd ? 3 : 0}></Box>
            <Stack flex={4} gap={4}>
              <Stack>
                <Typography variant="subtitle2">
                  Matter works with your favorite 3D software.
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: "#777E90",
                  }}
                >
                  Export your 3D worlds or objects directly into Matter and
                  choose from a library of prebuilt assets to enhance your
                  worlds in minutes. Wiith matter you can deploy anywhere in the
                  world or to your own URL.
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
                Sign Up For Beta &gt;
              </Typography>
            </Stack>
          </Stack>
          <Stack flexDirection={matchUpMd ? "row" : "column"} gap={4}>
            <Box
              flex={1}
              sx={{
                bgcolor: "text.primary",
                borderRadius: 10,
                pt: 6.5,
              }}
            >
              <Stack
                gap={5}
                justifyContent="space-between"
                sx={{ height: "100%" }}
              >
                <Stack gap={2.5} sx={{ px: matchUpMd ? 7 : 2.5 }}>
                  <Typography variant="h3" color="background.default">
                    Place and publish in an instant.
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Don’t let code stop you from building something great.
                    Upload models directly to matter and publish in an instant.
                  </Typography>
                </Stack>
                <Stack flexDirection="row" justifyContent="center">
                  <Box
                    component="img"
                    src={
                      matchUpMd
                        ? "/images/face-desktop.png"
                        : "/images/face.png"
                    }
                    sx={{ maxWidth: "100%", borderRadius: 10 }}
                  />
                </Stack>
              </Stack>
            </Box>
            <Box
              flex={1}
              sx={{
                bgcolor: "text.primary",
                borderRadius: 10,
                pt: 6.5,
                px: matchUpMd ? 7 : 2.5,
              }}
            >
              <Stack
                gap={5}
                justifyContent="space-between"
                sx={{ height: "100%" }}
              >
                <Box flex={4}>
                  <Typography variant="body2" color="background.default">
                    Export from your favorite platform.
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    With the click of a button you can export 3D scenes to our
                    virtual world builder so you can have full creative control
                    over your global virtual presence.
                  </Typography>
                </Box>
                <Stack
                  flex={9}
                  justifyContent="flex-end"
                  sx={{ pb: matchUpMd ? 12 : 6 }}
                >
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "repeat(2, 1fr)",
                      rowGap: matchUpMd ? 12 : 6,
                      columnGap: matchUpMd ? 6 : 3,
                      "& img": {
                        maxWidth: "100%",
                        mr: "auto",
                        ml: "auto",
                      },
                    }}
                  >
                    <Box src="/images/blender.png" component="img" />
                    <Box src="/images/cinema.png" component="img" />
                    <Box src="/images/maya.png" component="img" />
                    <Box src="/images/unreal.png" component="img" />
                  </Box>
                </Stack>
              </Stack>
            </Box>
          </Stack>
          <Stack
            flexDirection={matchUpMd ? "row" : matchUpSm ? "row" : "column"}
            gap={4}
            sx={{
              py: matchUpMd ? 0 : 10,
            }}
          >
            <Stack
              flex={1}
              flexDirection={matchUpMd ? "row" : "column"}
              alignItems={
                matchUpMd ? "flex-end" : matchUpSm ? "flex-start" : "center"
              }
              justifyContent={matchUpMd ? "flex-start" : "inherit"}
              gap={3}
              sx={{
                pb: matchUpMd ? 10 : 0,
                pt: matchUpMd ? 7.5 : 0,
              }}
            >
              <Box>
                <Typography
                  variant="body2"
                  sx={{
                    textAlign: matchUpSm ? "left" : "center",
                  }}
                >
                  Up to
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 600,
                    fontFamily: "SF Pro Display",
                    background: "linear-gradient(#00FF85, #00F0FF)",
                    backgroundClip: "text",
                    textFillColor: "transparent",
                    lineHeight: 1,
                  }}
                >
                  90%
                </Typography>
              </Box>
              <Typography
                variant="subtitle1"
                sx={{
                  textAlign: matchUpSm ? "left" : "center",
                  maxWidth: 260,
                  lineHeight: 1,
                  fontFamily: "SF Pro Display",
                  fontWeight: 600,
                  letterSpacing: 0.32,
                }}
              >
                Reduction of development costs.
              </Typography>
            </Stack>
            <Divider
              orientation={
                matchUpMd ? "horizontal" : matchUpSm ? "vertical" : "horizontal"
              }
              flexItem
            />
            <Stack
              flex={1}
              flexDirection={matchUpMd ? "row" : "column"}
              alignItems={matchUpSm ? "flex-end" : "center"}
              justifyContent="flex-start"
              gap={3}
              sx={{
                pb: matchUpMd ? 10 : 0,
                pt: matchUpMd ? 7.5 : 0,
              }}
            >
              <Box>
                <Typography
                  variant="body2"
                  sx={{
                    textAlign: matchUpSm ? "left" : "center",
                  }}
                >
                  Up to
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 600,
                    fontFamily: "SF Pro Display",
                    background: "linear-gradient(#00FF85, #00F0FF)",
                    backgroundClip: "text",
                    textFillColor: "transparent",
                    lineHeight: 1,
                  }}
                >
                  50%
                </Typography>
              </Box>
              <Typography
                variant="subtitle1"
                sx={{
                  textAlign: matchUpSm ? "left" : "center",
                  maxWidth: 260,
                  lineHeight: 1,
                  fontFamily: "SF Pro Display",
                  fontWeight: 600,
                  letterSpacing: 0.32,
                }}
              >
                Reduction of resource staffing expenses.
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
