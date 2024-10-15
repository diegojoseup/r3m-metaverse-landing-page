import {
    Box,
    Stack,
    Typography,
    useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function Dashboard () {
    const theme = useTheme();
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));
    const matchUpSm = useMediaQuery(theme.breakpoints.up('sm'));
    return (
        <Box sx={{ height: 1024 }}>
            <Stack justifyContent="space-between" sx={{ height: '100%' }}>
                <Stack
                    flexDirection={matchUpMd ? "row" : "column"}
                    alignItems="center"
                    justifyContent={matchUpMd ? "space-between" : "center"}
                    flex={1}
                    gap={matchUpMd ? 6 : matchUpSm ? 18 : 12 }
                    sx={{
                        px: matchUpSm ? 9 : 5,
                        flexWrap: 'wrap'
                    }}
                >
                    <Stack flex={matchUpMd ? 6 : 0}>
                        <Typography variant="h2"
                            sx={{
                                background: 'linear-gradient(180deg, #809CFF 0%, #FFFFFF 100%)',
                                backgroundClip: 'text',
                                textFillColor: 'transparent',
                                lineHeight: 1,
                                wordBreak: 'no-break'
                            }}
                        >Virtual Worlds</Typography>
                        <Typography variant="h2" sx={{ lineHeight: 1 }}>Real Revenue</Typography>
                    </Stack>
                    <Stack flexDirection="row" justifyContent={matchUpMd ? "flex-start": matchUpSm ? "flex-end" : "end"} flex={matchUpMd ? 5 : 0}>
                        <Typography variant="subtitle1"  
                            sx={{ lineHeight: 1.6,
                                letterSpacing: 0.32,
                                width: matchUpMd ? '100%' : matchUpSm ? '50%' : '100%'
                            }}>
                            We build award-winning brands from the ground up and create deeper immersion and engagement for their audience within the Metaverse using AR/VR/XR.
                        </Typography>
                    </Stack>
                </Stack>
                <Box sx={{ 
                        position: 'relative', 
                        overflow: 'scroll', 
                        width: '100%',
                        '&::-webkit-scrollbar': {
                            background: 'transparent',
                            width: 0
                        }
                    }}
                >
                    <Stack 
                        flex={0}
                        flexDirection="row" 
                        alignItems="center"
                        justifyContent="space-between"
                        sx={{
                            pb: 12,
                        }}
                    >
                        <Box component="img" src="/images/clients/client-warnerbros.png" />
                        <Box component="img" src="/images/clients/client-disney.png" />
                        <Box component="img" src="/images/clients/client-logos-apple.png" />
                        <Box component="img" src="/images/clients/client-showtime.png" />
                        <Box component="img" src="/images/clients/client-virgin.png" />
                    </Stack>
                </Box>
            </Stack>
        </Box>
    );
}