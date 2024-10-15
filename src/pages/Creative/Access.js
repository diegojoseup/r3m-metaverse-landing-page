import { useState } from 'react';
import {
    Box,
    Stack,
    Typography,
    useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function Access () {
    const theme = useTheme();
    const matchUpSm = useMediaQuery(theme.breakpoints.up('sm'));
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <Box
            sx={{
                px: matchUpMd ? 27 : matchUpSm ? 9 : 5,
                py: matchUpMd ? 24 : 12,
            }}
        >
            <Stack sx={{ pt: 4 }} gap={matchUpSm ? 25 : 8}>
                <Typography 
                    variant="h1" 
                    sx={{ 
                        fontWeight: 600,
                        fontfamily: 'SF UI Display',
                        lineHeight: 1,
                        textOverflow: 'ellipsis',
                        overflow: 'hidden'
                    }}
                >
                   Access a $5 trillion opportunity.
                </Typography>
                <Stack flexDirection="row">
                    <Box flex={matchUpMd ? 3 : 0}></Box>
                    <Stack flex={4} gap={4}>
                        <Stack>
                            <Typography 
                                variant="subtitle2"
                                sx={{ 
                                    color: '#000000'
                                }}
                            >
                                Launch your virtual presence.
                            </Typography>
                            <Typography variant="subtitle2"
                                sx={{
                                    color: '#777E90'
                                }}
                            >
                                Stay ahead of the Metaverse tech curve and multiply your revenue streams by taking your brand and products into the virtual world.
                            </Typography>
                        </Stack>
                        <Typography variant="subtitle2"
                            sx={{
                                background: 'linear-gradient(#00FF85, #00F0FF)',
                                backgroundClip: 'text',
                                textFillColor: 'transparent',
                            }}
                        >
                            Start Now &gt;
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
        </Box>
    )
}