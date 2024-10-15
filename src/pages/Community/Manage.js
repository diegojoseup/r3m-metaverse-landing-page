import { useState } from 'react';
import {
    Box,
    Stack,
    Typography,
    useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function Manage () {
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
                <Stack gap={matchUpMd ? 24 : 12}>
                    <Stack flexDirection={matchUpMd ? 'row' : 'column'} gap={ matchUpMd ? 0: 4 }>
                        <Box flex={1}
                            sx={{
                                borderRadius: matchUpMd ? 0 : 10,
                                borderTopLeftRadius: 40,
                                borderBottomLeftRadius: 40,
                                bgcolor: "text.primary",
                            }}
                        >
                            <Stack gap={7.5} sx={{
                                p: 7.5, px: matchUpSm ? 7.5 : 2}}>
                                <Stack gap={4}>
                                    <Stack 
                                        flexDirection="row" 
                                        alignItems="center"
                                        justifyContent="space-between"
                                    >
                                        <Typography variant="body2" color="rgba(0, 0, 0, 0.6)">Market Cap</Typography>
                                        <Stack flexDirection="row" alignItems="center" gap={2}>
                                            <Typography variant="body2"
                                                sx={{
                                                    background: 'linear-gradient(270deg, #5035FF 30.47%, #00A3FF 100%)',
                                                    backgroundClip: 'text',
                                                    textFillColor: 'transparent',
                                                }}
                                            >Buy Token &gt;</Typography>
                                            <Box 
                                                src="/images/logo.png" 
                                                component="img" 
                                                sx={{
                                                    width: matchUpSm ? 32 : 16
                                                }}
                                            />
                                        </Stack>
                                    </Stack>
                                    <Typography variant="h3" color="background.default">$ 13,489,230</Typography>
                                </Stack>
                                <Stack gap={4}>
                                    <Typography variant="body2" color="rgba(0, 0, 0, 0.6)">Current Price</Typography>
                                    <Typography variant="h3" color="background.default">$0.40</Typography>
                                    <Box component="img" src="/images/Line.png" 
                                        sx={{
                                            maxWidth: '100%'
                                        }}
                                    />
                                </Stack>
                                <Stack gap={3}>
                                    <Typography variant="body2" color="rgba(0, 0, 0, 0.6)">Tokenomics</Typography>
                                    <Stack gap={matchUpSm ? 1 : 2}>
                                    {cards.map((item, key) => 
                                        <Stack 
                                            key={key}
                                            flexDirection={matchUpSm ? "row" : "column"}
                                            alignItems={matchUpSm ? "center" : "flex-start"} 
                                            justifyContent="space-between" 
                                        
                                        >
                                            <Stack flexDirection={matchUpSm ? "row" : "column"} gap={matchUpSm ? 2 : 0}>
                                                <Typography color="background.default" sx={{ fontWeight: 700 }}>{item.title}</Typography>
                                                <Typography color="background.default">{item.price}</Typography>
                                            </Stack>
                                            <Typography
                                                sx={{
                                                    fontWeight: 700,
                                                    background: 'linear-gradient(270deg, #5035FF 30.47%, #00A3FF 100%)',
                                                    backgroundClip: 'text',
                                                    textFillColor: 'transparent',
                                                }}
                                            >{item.type}</Typography>
                                        </Stack>
                                    )}
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Box>
                        <Box flex={1}
                            sx={{
                                background: 'linear-gradient(270deg, #5035FF 30.47%, #00A3FF 100%)',
                                py: 12,
                                borderRadius: matchUpMd ? 0 : 10,
                                borderBottomRightRadius: 40,
                                borderTopRightRadius: 40,
                                px: 2
                            }}
                        >
                            <Stack flexDirection="row" alignItems="center" justifyContent="center">
                                <Stack gap={4} alignItems="center">
                                    <Typography variant="h3" sx={{ textAlign: 'center' }}>Collect + Earn</Typography>
                                    <Box 
                                        component="img"
                                        src="/images/wallet-phone.png"
                                        sx={{
                                            maxWidth: matchUpSm ? 255 : '100%'
                                        }}
                                    />
                                    <Typography variant="subtitle2" sx={{ textAlign: 'center' }}>Get H3M Wallet &gt;</Typography>
                                </Stack>
                            </Stack>
                        </Box>
                    </Stack>
                    <Stack>
                        <Stack flexDirection="row" gap={1}>
                            <Typography 
                                variant="subtitle1"
                            >Everything In One Place</Typography>
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
                            Manage your NFT’s, rewards and earnings.
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
                                            H3M Portals combine AR beacon technology with real-time KPI’s to help help creators track and maximize the conversion process in real time so you can engage your audience with the content they need the moment they need it.
                                        </Typography>
                                    </Stack>
                                    <Typography variant="subtitle2"
                                        sx={{
                                            background: 'linear-gradient(135.78deg, #00FF85 33.19%, #00F0FF 71.03%)',
                                            backgroundClip: 'text',
                                            textFillColor: 'transparent',
                                        }}
                                    >
                                        Download Now &gt;
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                    <Box>
                        <Typography
                            variant="h5"
                            sx={{
                                textTransform: 'uppercase',
                                fontWeight: 700,
                                fontFamily: 'SF UI Display',
                                color: '#5252E8',
                                textAlign: 'center',
                                letterSpacing: 2.4
                            }}
                        >How it works</Typography>
                        <Box
                            sx={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(3, 1fr)',
                                columnGap: 8,
                                pt: 7.5,
                                overflow: 'auto',
                                '&::-webkit-scrollbar' : {
                                    display: 'none'
                                }
                            }}
                        >
                            {phones.map((card, key) => 
                            <Stack gap={4}>
                                <Stack key={key} gap={2}>
                                    <Typography 
                                        variant="subtitle1" 
                                        sx={{ 
                                            textAlign: 'center' 
                                        }}
                                    >{card.title}</Typography>
                                    <Typography 
                                        color="text.secondary"
                                        sx={{ textAlign: 'center' }}
                                    >{card.content}</Typography>
                                    <Stack flexDirection="row" justifyContent="center">
                                        <Box
                                            component="img" 
                                            src="/images/circle-arrow-up.png" 
                                        />
                                    </Stack>
                                </Stack>
                                <Stack flexDirection="row" justifyContent="center">
                                    <Box 
                                        component="img"
                                        src={card.img}
                                    />
                                </Stack>
                            </Stack>
                            )}
                        </Box>
                    </Box>
                </Stack>
            </Box>
        </Box>
    )
}

const cards = [{
        title: 'Total Supply',
        price: '34,000,000',
        type: 'View Contract',
    },{
        title: 'Staked',
        price: '2,000,000',
        type: 'View Contract',
    },{
        title: 'Circulating',
        price: '5,000,000',
        type: 'bscscan',
    },{
        title: 'Devs',
        price: '5,000,000',
        type: 'bscscan',
    },{
        title: 'Marketing',
        price: '5,000,000',
        type: 'View Wallet',
    },{
        title: 'Investors',
        price: '5,000,000',
        type: 'View Wallet',
    },
]

const phones = [{
    title: 'Manage',
    content: 'Use our wallet to get further utility out of your collection of NFT’s, cards, and rewards.',
    img: '/images/phone-1.png'
}, {
    title: 'Collect',
    content: 'Collect NFT’s, beacons, artifacts and a range of branded products and rewards',
    img: '/images/phone-2.png'
}, {
    title: 'Grow',
    content: 'Use our wallet app to stake your HMMM token and earn 36% APY from your staked balance.',
    img: '/images/phone-3.png'
}]