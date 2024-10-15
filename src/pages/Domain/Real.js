import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Real() {
  const theme = useTheme();
  const matchUpSm = useMediaQuery(theme.breakpoints.up("sm"));
  const matchUpMd = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box>
      <Box
        sx={{
          px: matchUpMd ? 27 : matchUpSm ? 9 : 2.5,
          py: matchUpMd ? 24 : 12,
          bgcolor: theme.palette.text.primary,
        }}
      >
        <Stack>
          <Stack flexDirection="row" gap={1}>
            <Stack justifyContent="center">
              <Box
                src="/images/logo.png"
                component="img"
                sx={{
                  width: matchUpSm ? 42 : 21,
                }}
              />
            </Stack>
            <Typography
              variant="subtitle1"
              sx={{
                color: theme.palette.background.default,
              }}
            >
              Domain
            </Typography>
          </Stack>
          <Stack sx={{ pt: 4 }} gap={matchUpSm ? 25 : 8}>
            <Typography
              variant="h1"
              sx={{
                maxWidth: 1212,
                textOverflow: "ellipsis",
                overflow: "hidden",
                fontWeight: 600,
                fontfamily: "SF UI Display",
                lineHeight: 1,
                color: theme.palette.background.default,
              }}
            >
              Real-world locations to host AR experieces.
            </Typography>
            <Stack flexDirection="row">
              <Box flex={matchUpMd ? 3 : 0}></Box>
              <Stack flex={4} gap={4}>
                <Stack>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: "#000000",
                    }}
                  >
                    Make money with virtual land ownership.
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: "#777E90",
                    }}
                  >
                    If you have a high traffic area, you can sit back and earn
                    passive income by leasing your physical space for
                    independant creators and brand partners.
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
                  Sign Up For Beta &gt;
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Box>
      <Stack
        gap={4}
        sx={{
          bgcolor: theme.palette.text.primary,
          pb: matchUpSm ? 25 : 12.5,
          mt: -1,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontFamily: "SF UI Display",
            fontWeight: 700,
            color: "#5252E8",
            textTransform: "uppercase",
            textAlign: "center",
          }}
        >
          How it works
        </Typography>
        <Stack flexDirection={matchUpMd ? "row" : "column"} gap={10}>
          <Stack
            flex={1}
            justifyContent="center"
            gap={4}
            sx={{
              pl: matchUpMd ? 27 : matchUpSm ? 9 : 2.5,
              pr: matchUpMd ? 0 : matchUpSm ? 9 : 2.5,
              "& ul li": {
                color: "text.secondary",
                fontSize: matchUpSm ? 32 : 18,
                listStyleType: "disc",
                // listStyleType: 'disc',
                // display: 'flex',
                // alignItems: 'flex-start'
              },
              // '& ul li::before': {
              //     content: '"\\2022"',  /* Add content: \2022 is the CSS Code/unicode for a bullet */
              //     color: 'text.secondary', /* Change the color */
              //     fontWeight: 'bold', /* If you want it to be bold */
              //     display: 'inline-block', /* Needed to add space between the bullet and the text */
              //     width: '1em', /* Also needed for space (tweak if needed) */
              //     marginLeft: '-1em', /* Also needed for space (tweak if needed) */
              // }
            }}
          >
            <Typography variant="subtitle2" color="text.secondary">
              Domain is the first virtual land managemet platform that gives you
              total control over hosted virtual experiences.
            </Typography>
            <ul
              style={{
                color: "text.secondary",
                maxWidth: 450,
              }}
            >
              <li>
                <Typography color="text.secondary" variant="subtitle2">
                  Buy, Sell, Lease or Trade
                </Typography>
              </li>
              <li>
                <Typography color="text.secondary" variant="subtitle2">
                  Manage Properties
                </Typography>
              </li>
              <li>
                <Typography color="text.secondary" variant="subtitle2">
                  Organize Bookings
                </Typography>
              </li>
              <li>
                <Typography color="text.secondary" variant="subtitle2">
                  Grow revenue streams
                </Typography>
              </li>
            </ul>
          </Stack>
          <Stack
            flex={1}
            sx={{
              pl: matchUpMd ? 0 : matchUpSm ? 9 : 2.5,
              position: "relative",
              overflowX: "hidden",
            }}
          >
            <Box component="img" src="/images/booking.png" />
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
