import React from 'react';
import {
    Box,
    Typography,
    Stack,
    useMediaQuery,
    Divider
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function Reduction () {
    const theme = useTheme();
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));
    const matchUpSm = useMediaQuery(theme.breakpoints.up('sm'));
    
    return (
        <Box
            sx={{
                px: matchUpMd ? 27 : matchUpSm ? 9 : 2.5,
            }}
        >
            <Stack
                flexDirection={matchUpMd ? "row" : "column"}
                alignItems="flex-end"
                gap={7.5}
            >
                <Stack
                >
                    <Box flex={1}
                    >
                        <Box 
                            component="img" 
                            src="/images/dragon.png" 
                            sx={{ 
                                width: '100%', 
                                height: '100%',
                                display: 'flex',
                                borderTopLeftRadius: 40,
                                borderTopRightRadius: 40
                           }}
                        />
                    </Box>
                    <Box
                        flex={1}
                        sx={{
                            bgcolor: '#FFFFFF',
                            borderBottomRightRadius: 40,
                            borderBottomLeftRadius: 40,
                        }}
                    >
                        <Stack 
                            gap={2.5}
                            // alignItems="flex-end"
                            justifyContent="flex-end"
                            sx={{
                                height: '100%',
                                py: 12,
                                px: matchUpSm ? 7.5 : 5
                            }}
                        >
                            <Typography
                                variant="h3"
                                sx={{
                                    lineHeight: 1,
                                    color: '#000000'
                                }}
                            >
                                Go virtual in minutes.
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{
                                    color: '#777E90',

                                }}
                            >
                               Portals lets anyone build, publish and monetize a virtual world without code or 3D. With hundreds of prebuilt models, mix ad match to build a world, or put up one of our fully built environments with the tap of a button.
                            </Typography>
                        </Stack>
                    </Box>
                </Stack>
                <Stack
                    gap={4}
                >
                    <Stack
                    >
                        <Box flex={1}
                        >
                            <Box 
                                component="img" 
                                src="/images/carbon.png" 
                                sx={{ 
                                    width: '100%', 
                                    height: '100%',
                                    display: 'flex',
                                    borderTopLeftRadius: 40,
                                    borderTopRightRadius: 40
                            }}
                            />
                        </Box>
                        <Box
                            flex={1}
                            sx={{
                                bgcolor: '#FFFFFF',
                                borderBottomRightRadius: 40,
                                borderBottomLeftRadius: 40,
                            }}
                        >
                            <Stack 
                                gap={2.5}
                                // alignItems="flex-end"
                                justifyContent="flex-end"
                                sx={{
                                    height: '100%',
                                    py: 12,
                                    px: matchUpSm ? 7.5 : 5
                                }}
                            >
                                <Typography
                                    variant="h3"
                                    sx={{
                                        lineHeight: 1,
                                        color: '#000000'
                                    }}
                                >
                                    Tap button launch world.
                                </Typography>
                                <Box>
                                    <Typography
                                            variant="body2"
                                            sx={{
                                                color: '#000000'
                                            }}
                                        >
                                            Get a virtual worlds in miutes.
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: '#777E90'
                                        }}
                                    >
                                        Our marketplace of prefabricated worlds lets you tap a button and get up and runing in AR. 
                                        Just add your products and original 3D objects to persoalize each space for your needs.
                                    </Typography>
                                </Box>
                                
                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: '#7500FF'
                                    }}
                                >
                                    Download Now &gt;
                                </Typography>
                            </Stack>
                        </Box>
                    </Stack>
                    <Stack
                        flexDirection={matchUpMd ? "column" : matchUpSm ? "row" : "column"}
                        gap={4}
                        sx={{
                            py: matchUpMd ? 0 : 10
                        }}
                    >
                        <Stack
                            flex={1}
                            flexDirection={matchUpMd ? "row" : "column"}
                            alignItems={matchUpMd ? "flex-end" : matchUpSm ? "flex-start" : "center"}
                            justifyContent={matchUpMd ? "space-between" : "inherit"}
                            gap={3}
                            sx={{
                                pb: matchUpMd ? 10 : 0,
                                pt: matchUpMd ? 7.5 : 0
                            }}
                        >
                            <Box>
                                <Typography variant="body2"
                                   sx={{
                                        textAlign: matchUpSm ? 'left' : 'center'
                                }}>Up to</Typography>
                                <Typography
                                    variant="h2"
                                    sx={{
                                        fontWeight: 600,
                                        fontFamily: 'SF Pro Display',
                                        background: 'linear-gradient(#00FF85, #00F0FF)',
                                        backgroundClip: 'text',
                                        textFillColor: 'transparent',
                                        lineHeight: 1
                                    }}
                                >90%</Typography>
                            </Box>
                            <Typography 
                                variant="subtitle1"
                                sx={{ 
                                    textAlign: matchUpSm ? 'left' : 'center',
                                    maxWidth: 260,
                                    lineHeight: 1,
                                    fontFamily: 'SF Pro Display',
                                    fontWeight: 600,
                                    letterSpacing: 0.32,
                                    
                                }}
                            >Reduction of development costs.</Typography>
                        </Stack>
                        <Divider 
                            orientation={matchUpMd ? 'horizontal' : matchUpSm ? 'vertical' : 'horizontal'} 
                            flexItem
                        />
                        <Stack
                            flex={1}
                            flexDirection={matchUpMd ? "row" : "column"}
                            alignItems={matchUpSm ? "flex-end" : "center"}
                            justifyContent="space-between"
                            gap={3}
                            sx={{
                                pb: matchUpMd ? 10 : 0,
                                pt: matchUpMd ? 7.5: 0
                            }}
                        >
                            <Box>
                                <Typography 
                                    variant="body2"
                                    sx={{
                                        textAlign: matchUpSm ? 'left' : 'center'
                                    }}
                                >Up to</Typography>
                                <Typography
                                    variant="h2"
                                    sx={{
                                        fontWeight: 600,
                                        fontFamily: 'SF Pro Display',
                                        background: 'linear-gradient(#00FF85, #00F0FF)',
                                        backgroundClip: 'text',
                                        textFillColor: 'transparent',
                                        lineHeight: 1
                                    }}
                                >50%</Typography>
                            </Box>
                            <Typography 
                                variant="subtitle1"
                                sx={{ 
                                    textAlign: matchUpSm ? 'left' : 'center',
                                    maxWidth: 260,
                                    lineHeight: 1,
                                    fontFamily: 'SF Pro Display',
                                    fontWeight: 600,
                                    letterSpacing: 0.32
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