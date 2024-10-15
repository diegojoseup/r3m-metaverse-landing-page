import React from 'react';
import {
    Box,
    Typography,
    Stack,
    useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function Dashboard () {
    const theme = useTheme();
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));
    const matchUpSm = useMediaQuery(theme.breakpoints.up('sm'));
    
    return (
        <Box
            sx={{
                bgcolor: '#FFFFFF',
                pb: 25,
                px: matchUpMd ? 0 : matchUpSm ? 9 : 5
            }}
        >
            <Stack gap={15}>
                <Stack
                    flexDirection="row"
                    justifyContent="center"
                    sx={{
                        position: 'relative',
                        top: matchUpSm ? 200 : 100,
                        zIndex: 0,
                        px: matchUpMd ? 5 : 3
                    }}
                >
                    <Box 
                        component="img" 
                        src="/images/Portals.svg" 
                        sx={{
                            maxWidth: matchUpMd ? 1200 : 600,
                            width: '100%'
                        }}
                    />
                </Stack>
                <Stack
                    flexDirection="row"
                    justifyContent="center"
                    sx={{
                        zIndex: 1
                    }}
                >
                    <Box 
                        component="img"
                        src="/images/iphone.png"
                    />
                </Stack>
                <Stack
                    justifyContent="center"
                    alignItems="center"
                >
                    <Stack
                        justifyContent="center"
                        alignItems="center"
                        sx={{
                            maxWidth: 680
                        }}
                        gap={4}
                    >
                        <Box>
                            <Typography
                                variant="subtitle2"
                                sx={{
                                    textAlign: 'center',
                                    color: '#000000',
                                    fontWeight: 700
                                }}
                            >Introducting H3M Portals</Typography>
                            <Typography
                                variant="subtitle2"
                                sx={{
                                    textAlign: 'center',
                                    color: '#777E90',
                                    fontWeight: 700
                                }}
                            >
                                An easy way to build, gamify, monetize, and publish social AR content in minutes, without code or 3D.
                            </Typography>
                        </Box>
                        <Typography sx={{ color: '#000000' }}>Coming Soon</Typography>
                        <Stack
                            flexDirection={matchUpSm ? "row" : "column"}
                            alignItems="center"
                            justifyContent="center"
                            gap={1.5}
                        >
                            <Stack
                                sx={{
                                    p: 1,
                                    bgcolor: '#FFFFFF',
                                    border: '0.658887px solid #000000',
                                    borderRadius: 2
                                }}
                            >
                                <Box 
                                    component="img"
                                    src="/images/appstore.png"
                                />
                            </Stack>
                            <Stack
                                sx={{
                                    p: 1,
                                    bgcolor: '#FFFFFF',
                                    border: '0.658887px solid #000000',
                                    borderRadius: 2
                                }}
                            >
                                <Box 
                                    component="img"
                                    src="/images/googlestore.png"
                                />
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </Box>
    );
}