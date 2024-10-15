import { useState } from 'react';
import {
    Box,
    Stack,
    Typography,
    useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function Tech () {
    const theme = useTheme();
    const matchUpSm = useMediaQuery(theme.breakpoints.up('sm'));
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <Box>
            <Box
                sx={{
                    px: matchUpMd ? 27 : matchUpSm ? 9 : 2.5,
                    py: matchUpMd ? 24 : 12,
                    pt: 0,
                }}
            >
                <Stack>
                    <Stack flexDirection="row" gap={1}>
                        <Typography 
                            variant="subtitle1"
                        >Let's Do Good Together</Typography>
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
                            }}
                        >
                        Tech you love for the planet you love.
                        </Typography>
                        <Stack flexDirection="row">
                            <Box flex={matchUpMd ? 3 : 0}></Box>
                            <Stack flex={4} gap={4}>
                                <Stack>
                                    <Typography 
                                        variant="subtitle2"
                                    >We can help your Non-Profit.
                                    </Typography>
                                    <Typography variant="subtitle2"
                                        sx={{
                                            color: '#777E90'
                                        }}
                                    >
                                        If you have a mission and a purpost to change the world we live in and make it better we would love to work with you. 
                                        Our team has ways to gamify a cause and drive engagement and we are excited to partner with great initiatives.
                                    </Typography>
                                </Stack>
                                <Typography variant="subtitle2"
                                    sx={{
                                        background: 'linear-gradient(135.78deg, #00FF85 33.19%, #00F0FF 71.03%)',
                                        backgroundClip: 'text',
                                        textFillColor: 'transparent',
                                    }}
                                >
                                    Work With Us &gt;
                                </Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
            </Box>
        </Box>
    )
}