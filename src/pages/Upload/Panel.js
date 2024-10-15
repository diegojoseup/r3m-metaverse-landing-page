import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Panel() {
  const theme = useTheme();
  const matchUpSm = useMediaQuery(theme.breakpoints.up("sm"));
  const matchUpMd = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box
      sx={{
        background: "url(/images/marketplace-background.png)",
        backgroundSize: "100% auto",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box sx={{ pt: 35 }}></Box>
      <Box
        sx={{
          px: matchUpMd ? 27 : matchUpSm ? 9 : 2.5,
          // pt: matchUpMd ? 52 : 40,
          py: 25,
          background:
            "linear-gradient(0deg, #FFFFFF 63.17%, rgba(255, 255, 255, 0) 100%)",
        }}
      >
        <Stack flexDirection={matchUpMd ? "row" : "column"} gap={4}>
          <Stack
            flex="45%"
            justifyContent="center"
            alingItems="center"
            sx={{
              bgcolor: "#87B2CD",
            }}
          >
            <Stack
              flexDirection="row"
              alignItems="center"
              justifyContent="center"
              sx={{
                height: matchUpMd ? "unset" : 500,
              }}
            >
              <Box src="/images/upload.png" component="img" />
            </Stack>
          </Stack>
          <Stack flex="55%" gap={3}>
            <Typography
              variant="body2"
              color="background.default"
              sx={{
                fontWeight: 700,
              }}
            >
              Guidelines
            </Typography>
            <Typography variant="body2" color="background.default">
              You can upload your model as an archive (.zip or .rar preferred)
              or as separate files (.obj, .fbx, .stl, etc.). Add previews in
              .png or .jpeg file formats. Just drag & drop your model folder on
              this page to upload.
            </Typography>
            <Stack flexDirection="row">
              <Typography variant="body2" color="#616161">
                Model Folder &gt; &nbsp;
              </Typography>
              <Stack gap={1}>
                <Typography variant="body2" color="#616161">
                  Preview1.jpg
                </Typography>
                <Typography variant="body2" color="#616161">
                  Preview1.jpg
                </Typography>
                <Typography variant="body2" color="#616161">
                  Preview1.jpg
                </Typography>
                <Typography variant="body2" color="#616161">
                  Preview1.jpg
                </Typography>
                <Typography variant="body2" color="#616161">
                  Preview1.jpg
                </Typography>
              </Stack>
            </Stack>
            <Typography
              variant="body2"
              color="background.default"
              sx={{
                fontWeight: 700,
              }}
            >
              Requirements
            </Typography>
            <Typography variant="body2" color="background.default">
              A high-res preview must be attached. All textures and lighting
              must be baked. Use the latin alphabet for file names. Single file
              size limit: 5.5 GB
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}
