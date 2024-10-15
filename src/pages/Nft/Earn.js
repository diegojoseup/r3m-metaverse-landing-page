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

export default function Earn () {
    const theme = useTheme();
    const matchUpSm = useMediaQuery(theme.breakpoints.up('sm'));
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));
    const matchUpXs = useMediaQuery(theme.breakpoints.up('xs'));
    return (
        <Box
            sx={{
                px: matchUpMd ? 27 : matchUpSm ? 9 : 2.5,
                py: matchUpMd ? 24 : 12,
                pb: 0,
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
                        }}
                    >
                        Earn, discover, and unlock more in Portals.
                    </Typography>
                    <Stack flexDirection="row">
                        <Box flex={matchUpMd ? 3 : 0}></Box>
                        <Stack flex={4} gap={4}>
                            <Stack>
                                <Typography 
                                    variant="subtitle2"
                                >
                                    Unlock H3M Portals with Meta Keys.
                                </Typography>
                                <Typography variant="subtitle2"
                                    sx={{
                                        color: '#777E90'
                                    }}
                                >
                                    A collection of 6 NFTs that enhance user roles and value in our native app Portals. 
                                    By owning a card you can augment features, open hidden worlds, increase earnings, unlock discounts, and gain access.
                                </Typography>
                            </Stack>
                            <Typography variant="subtitle2"
                                sx={{
                                    background: 'linear-gradient(#00FF85, #00F0FF)',
                                    backgroundClip: 'text',
                                    textFillColor: 'transparent',
                                }}
                            >
                                Buy On Opensea &gt;
                            </Typography>
                        </Stack>
                    </Stack>
                    <Box
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: matchUpMd 
                                                    ? 'repeat(3, 1fr)' 
                                                    : matchUpSm 
                                                    ? 'repeat(1, 1fr)' 
                                                    : 'repeat(1, 1fr)',
                            columnGap: matchUpMd ? 4 : 2,
                            rowGap: matchUpMd ? 12 : 8
                        }}
                    >
                    {cards.map((card, key) => 
                        <Stack key={key} gap={3}>
                            <Stack flexDirection="row">
                                <Box
                                    sx={{
                                        background: `url(${card.img})`,
                                        height: 390,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center center',
                                        backgroundRepeat: 'no-repeat',
                                        width: '100%',
                                        borderRadius: 10
                                    }}
                                ></Box>
                            </Stack>
                            <Stack flexDirection="row" justifyContent="space-between">
                                <Typography variant="subtitle2">{card.title}</Typography>
                                <Stack flexDirection="row">
                                    <Button variant="outlined"
                                        sx={{
                                            background: 'linear-gradient(135.78deg, #00FF85 33.19%, #00F0FF 71.03%)',
                                            // backgroundClip: 'text',
                                            // textFillColor: 'transparent', 
                                            zIndex: 1,
                                            position: 'relative',
                                            '&::before': {
                                                content: '""',
                                                position: 'absolute',
                                                top: 1,
                                                right: 1,
                                                bottom: 1,
                                                left: 1,
                                                backgroundColor: 'background.default',
                                                borderRadius: 1,
                                                zIndex: -1
                                            }
                                        }}
                                    >
                                        <Typography variant="body2"
                                            sx={{
                                                background: 'linear-gradient(135.78deg, #00FF85 33.19%, #00F0FF 71.03%)',
                                                backgroundClip: 'text',
                                                textFillColor: 'transparent', 
                                            }}
                                        >{card.price} ETH</Typography>
                                    </Button>
                                </Stack>
                            </Stack>
                            <Stack flexDirection={matchUpSm ? "row" : 'column'} alignItems={matchUpSm ? "center" : "flex-start"} justifyContent="space-between" gap={4}>
                                <Stack flexDirection={matchUpSm ? "row" : 'column'} alignItems={matchUpSm ? "center" : "flex-start"} gap={1}> 
                                    <Stack flexDirection="row" alignItems="center">
                                        <CandlestickChartIcon sx={{ color: '#777E91' }} />
                                        <Typography color="#777E91">Highest bid</Typography>
                                    </Stack>
                                    <Typography>{card.bid} ETH</Typography>
                                </Stack>
                                <Stack>
                                    <Typography color="#777E91">New bid 🔥</Typography>
                                </Stack>
                            </Stack>
                            <Divider />
                            <Stack>
                                <ul>
                                {card.spec.map((item, index) => 
                                    <li key={index}>
                                        <Typography variant="body2">{item}</Typography>
                                    </li>
                                )}
                                </ul>
                            </Stack>
                        </Stack>
                    )}
                    </Box>
                </Stack>
            </Stack>
        </Box>
    )
}

const cards = [{
    title: 'Nano',
    price: 2.45,
    bid: 0.001,
    img: '/images/micro.png',
    spec: [
        "Increase earnings by 5%"
    ],
},{
    title: 'Micro',
    price: 2.45,
    bid: 0.001,
    img: '/images/micro.png',
    spec: [
        "Increase earnings by 5%",
        "20% discount on 3D models"
    ],
},{
    title: 'Mega',
    price: 2.45,
    bid: 0.001,
    img: '/images/micro.png',
    spec: [
        "Increase earnings by 10%",
        "30% discount on 3D models",
        "Max Items removed"
    ],
},{
    title: 'Giga',
    price: 2.45,
    bid: 0.001,
    img: '/images/micro.png',
    spec: [
        "Increase earnings by 12.5%",
        "40% discount on 3D models",
        "Max Items removed",
        "1 free premium world"
    ],
},{
    title: 'Tera',
    price: 2.45,
    bid: 0.001,
    img: '/images/micro.png',
    spec: [
        "Increase earnings by 15%",
        "50% discount on 3D models ",
        "Max Items removed",
        "1 free premium world",
        "1 virtual land deed"
    ],
},{
    title: 'Nexus',
    price: 2.45,
    bid: 0.001,
    img: '/images/micro.png',
    spec: [
        "Increase earnings by 20%",
        "Unlimited 3D assets forever",
        "Max Items removed",
        "Unlimited premium worlds",
        "3 virtual land deeds",
        "Access to token gated worlds",
        "VIP event access"
    ],
},]