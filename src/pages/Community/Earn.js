import { useState } from 'react';
import {
    Box,
    Stack,
    Typography,
    useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function Earn () {
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
                    bgcolor: "text.primary"
                }}
            >
                <Stack>
                    <Stack flexDirection="row" gap={1}>
                        <Typography 
                            variant="subtitle1"
                            color="background.default"
                        >Earn Passive Income</Typography>
                    </Stack>
                    <Stack sx={{ pt: 4 }} gap={matchUpSm ? 25 : 8}>
                        <Typography 
                            variant="h1" 
                            color="background.default"
                            sx={{ 
                                maxWidth: 1212,
                                textOverflow: 'ellipsis',
                                overflow: 'hidden',
                                fontWeight: 600,
                                fontfamily: 'SF UI Display',
                                lineHeight: 1,
                            }}
                        >
                        Earn more from Portals and Wallet.
                        </Typography>
                        <Stack flexDirection="row">
                            <Box flex={matchUpMd ? 3 : 0}></Box>
                            <Stack flex={4} gap={4}>
                                <Stack>
                                    <Typography 
                                        variant="subtitle2"
                                        color="background.default"
                                    >Earn commission, airdrops and more.
                                    </Typography>
                                    <Typography variant="subtitle2"
                                        sx={{
                                            color: '#777E90'
                                        }}
                                    >
                                        When you buy and hold a minimum of 5000 hmmm you are eligible for 5% commission in our app Portals, 3% earnings from every transation that occurs in
                                         our wallet, airdrop rewards, gifted NFTs, and discounted purchases from the Portals marketplace.
                                    </Typography>
                                </Stack>
                                <Typography variant="subtitle2"
                                    sx={{
                                        background: 'linear-gradient(270deg, #5035FF 30.47%, #00A3FF 100%)',
                                        backgroundClip: 'text',
                                        textFillColor: 'transparent',
                                    }}
                                >
                                    Buy Token &gt;
                                </Typography>
                            </Stack>
                        </Stack>
                        <Box
                            sx={{
                                display: 'grid',
                                gridTemplateColumns: matchUpMd 
                                                        ? 'repeat(4, 1fr)' 
                                                        : matchUpSm 
                                                        ? 'repeat(2, 1fr)' 
                                                        : 'repeat(1, 1fr)',
                                columnGap: matchUpMd ? 5 : 2,
                                rowGap: 8
                            }}
                        >
                        {cards.map((card, key) => 
                            <Stack key={key} gap={4}>
                                <Typography 
                                    sx={{ 
                                        fontSize:  matchUpXs ? '96px !important' : '60px !important',
                                        fontFamily: 'SF Pro Display',
                                        fontWeight: 600,
                                        textAlign: 'center',
                                        background: 'linear-gradient(270deg, #5035FF 30.47%, #00A3FF 100%)',
                                        backgroundClip: 'text',
                                        textFillColor: 'transparent',
                                        lineHeight: 1
                                    }}
                                >{card.price}</Typography>
                                <Typography 
                                    variant="subtitle1" 
                                    color="background.default"
                                    sx={{ 
                                        fontWeight: 600,
                                        textAlign: 'center' 
                                    }}
                                >{card.title}</Typography>
                                <Typography 
                                    color="text.secondary"
                                    variant="body1"
                                    sx={{ textAlign: 'center' }}
                                >{card.content}</Typography>
                            </Stack>
                        )}
                        </Box>
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