import { useState } from 'react';
import {
    Box,
    Button,
    Divider,
    Stack,
    Typography,
    useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CandlestickChartIcon from '@mui/icons-material/CandlestickChart';

export default function Invest () {
    const theme = useTheme();
    const matchUpSm = useMediaQuery(theme.breakpoints.up('sm'));
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));
    const matchUpXs = useMediaQuery(theme.breakpoints.up('xs'));
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
                            textOverflow: 'ellipsis',
                            overflow: 'hidden',
                            fontWeight: 600,
                            fontfamily: 'SF UI Display',
                            lineHeight: 1,
                            '& span' : {
                                background: 'linear-gradient(#00FF85, #00F0FF)',
                                backgroundClip: 'text',
                                textFillColor: 'transparent',
                            }
                        }}
                    >
                        Invest in our<br />
                        <span>intellectual property.</span>
                    </Typography>
                    <Stack flexDirection="row">
                        <Box flex={matchUpMd ? 3 : 0}></Box>
                        <Stack flex={4} gap={4}>
                            <Stack>
                                <Typography 
                                    variant="subtitle2"
                                >
                                    A new kind of collectable.
                                </Typography>
                                <Typography variant="subtitle2"
                                    sx={{
                                        color: '#777E90'
                                    }}
                                >
                                    H3M Material — is a collection of NFTs that unlock access to intellectual property value in our brand ecosystem. 
                                    Owning Material grants you 0.5% ownership of each patent we file. 
                                </Typography>
                            </Stack>
                            <Typography variant="subtitle2"
                                sx={{
                                    background: 'linear-gradient(#00FF85, #00F0FF)',
                                    backgroundClip: 'text',
                                    textFillColor: 'transparent',
                                }}
                            >
                                View NFT &gt;
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </Box>
    )
}