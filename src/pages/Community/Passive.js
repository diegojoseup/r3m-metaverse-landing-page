import { useState } from 'react';
import {
    Box,
    Stack,
    Typography,
    useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function Passive () {
    const theme = useTheme();
    const matchUpSm = useMediaQuery(theme.breakpoints.up('sm'));
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));
    const matchUpXs = useMediaQuery(theme.breakpoints.up('xs'));
    return (
        <Box>
            <Box
                sx={{
                    px: matchUpMd ? 27 : matchUpSm ? 9 : 2.5,
                    py: matchUpMd ? 24 : 12,
                }}
            >
                <Stack
                    flexDirection={matchUpMd ? "row" : "column"}
                    alignItems="center"
                    gap={matchUpMd ? 0 : 7}             
                >
                    <Stack 
                        gap={4}
                        flex={1}
                    >
                        <Stack flexDirection="row">
                            <Typography 
                                variant="subtitle1"
                            >Passive Income</Typography>
                        </Stack>
                        <Typography 
                            sx={{ 
                                fontSize:  matchUpXs ? '96px !important' : '60px !important',
                                fontFamily: 'SF Pro Display',
                                fontWeight: 600,
                                maxWidth: 1212,
                                textOverflow: 'ellipsis',
                                overflow: 'hidden',
                                fontWeight: 600,
                                fontfamily: 'SF UI Display',
                                lineHeight: 1,
                            }}
                        >
                        Earn 36% APY when you stake.
                        </Typography>
                        <Typography variant="subtitle2"
                            sx={{
                                background: 'linear-gradient(135.78deg, #00FF85 33.19%, #00F0FF 71.03%)',
                                backgroundClip: 'text',
                                textFillColor: 'transparent',
                            }}
                        >
                            Stake Now &gt;
                        </Typography>
                    </Stack>
                    <Stack flex={1}>
                        <Box 
                            component="img"
                            src="/images/coins.png"
                            sx={{
                                width: '100%'
                            }}
                        />
                    </Stack>
                </Stack>
            </Box>
        </Box>
    )
}


const cards = [{
    title: 'Commission',
    price: '1',
    content: 'By holding your HMMM token you qualify for commissions from transactions in our Wallet app. ',
}, {
    title: 'Airdrops',
    price: '2',
    content: 'Each month we will airdrop tokens to quallified holders if you are staked or not.',
}, {
    title: 'NFT\'s',
    price: '3',
    content: 'From time ti time our company will release one of a kind NFTs which token holders will recieve.',
}, {
    title: 'Discounts',
    price: '4',
    content: 'Users who have connected their wallet and hold 5000 tokens will recieve a 20% marketplace discount.'
}]