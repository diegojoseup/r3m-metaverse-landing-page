import { useState } from 'react';
import {
    Box,
    Stack,
    Typography,
    useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function Royalty () {
    const theme = useTheme();
    const matchUpSm = useMediaQuery(theme.breakpoints.up('sm'));
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <Box>
            <Box
                sx={{
                    px: matchUpMd ? 27 : matchUpSm ? 9 : 2.5,
                    // pt: matchUpMd ? 52 : 40,
                    pt: 60,
                    pb: matchUpMd ? 24 : 12,
                    background: 'url(/images/marketplace-background.png)',
                    backgroundSize: '100% auto',
                    backgroundRepeat: 'no-repeat',
                    bgcolor: "text.primary"
                }}
            >
                <Stack>
                    <Stack flexDirection="row" gap={1}>
                        <Stack justifyContent="center">
                            <Box 
                                src="/images/logo.png" 
                                component="img" 
                                sx={{
                                    width: matchUpSm ? 42 : 21
                                }}
                            />
                        </Stack>
                        <Typography 
                            variant="subtitle1"
                            sx={{
                                color: theme.palette.background.default
                            }}
                        >Marketplace</Typography>
                    </Stack>
                    <Stack sx={{ pt: 4 }} gap={matchUpSm ? 25 : 8}>
                        <Typography 
                            variant="h1" 
                            sx={{ 
                                maxWidth: 1212,
                                textOverflow: 'ellipsis',
                                overflow: 'hidden',
                                fontWeight: 600,
                                fontfamily: 'SF UI Display',
                                lineHeight: 1,
                                color: theme.palette.background.default,
                            }}
                        >
                        Get 85% royalties for 3D content.
                        </Typography>
                        <Stack flexDirection="row">
                            <Box flex={matchUpMd ? 3 : 0}></Box>
                            <Stack flex={4} gap={4}>
                                <Stack>
                                    <Typography variant="subtitle2"
                                        sx={{
                                            color: '#777E90'
                                        }}
                                    >
                                        Sell your 3D models and earn 85% royalties. 
                                        Your models will be purchased by our app users and by agencies to build and publish virtual worlds in the Metaverse. Our platform speeds the process of integration by removing the middleman of 3D creation for creatives. 
                                        You can help fuel no code AR/VR/XR today.
                                    </Typography>
                                </Stack>
                                <Typography variant="subtitle2"
                                    sx={{
                                        color: '#7500FF'
                                    }}
                                >
                                    Upload Your Models Now &gt;
                                </Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
            </Box>
            
            <Stack 
                justifyContent="center" 
                alignItems="center"
                sx={{
                    bgcolor: 'text.primary',
                    py: matchUpSm ? 25 : 8,
                    mt: '-1px'
                }}
            >
                <Box 
                    component="img"
                    src="/images/face-large.png" 
                    sx={{
                        maxWidth: '100%'
                    }}
                />
            </Stack>
        </Box>
    )
}