import { useState } from 'react';
import {
    Box,
    Stack,
    Typography,
    useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function Host () {
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
                        }}
                    >
                        Host anything, anywhere.
                    </Typography>
                    <Stack flexDirection="row">
                        <Box flex={matchUpMd ? 3 : 0}></Box>
                        <Stack flex={4} gap={4}>
                            <Stack>
                                <Typography 
                                    variant="subtitle2"
                                >
                                   We’re like AirBNB, but for virtual worlds.
                                </Typography>
                                <Typography variant="subtitle2"
                                    sx={{
                                        color: '#777E90'
                                    }}
                                >
                                    When you own virtual land, you can rent that space to artists and creators who want to host a unique experience. Disneyland, how about leasing out space near your Star Wars zone, 
                                    so users can promote AR projects and Jedi Force related virtual games?
                                </Typography>
                            </Stack>
                            <Typography variant="subtitle2"
                                sx={{
                                    background: 'linear-gradient(135.78deg, #00FF85 33.19%, #00F0FF 71.03%)',
                                    backgroundClip: 'text',
                                    textFillColor: 'transparent',
                                }}
                            >
                                Sign Up For Beta &gt;
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
                            columnGap: matchUpMd ? 8 : 12,
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
                                    background: 'linear-gradient(#00FF85, #00F0FF)',
                                    backgroundClip: 'text',
                                    textFillColor: 'transparent',
                                    lineHeight: 1
                                }}
                            >{card.price}</Typography>
                            <Typography 
                                variant="body2" 
                                sx={{ 
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
                    <Box
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(1, 1fr)',
                            gridAutoRows: matchUpMd ? '1fr' : 'unset',
                            rowGap: 6
                        }}
                    >
                        <Box
                            flex={1}
                            sx={{
                                borderRadius: 10,
                                bgcolor: 'text.primary',
                                pt: matchUpMd ? 10 : matchUpSm ? 7.5 : 5,
                            }}
                        >
                            <Stack 
                                flexDirection={matchUpMd ? "row" : "column"} 
                                alignItems={matchUpMd ? "center" : "inherit" }
                                gap={12}
                            >
                                <Stack
                                    flex={1}
                                    gap={2.5}
                                    sx={{
                                        pl: matchUpSm ? 8 : 5,
                                        pr: matchUpMd ? 0 : matchUpSm ? 8 : 5
                                    }}
                                >
                                    <Typography variant="h3" color="background.default">Virtual Worlds More Revenue</Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Build your virtual empire by collecting locations around the world. 
                                        Host, curate, flip, trade or sell locations and grow your enterprise.
                                    </Typography>
                                </Stack>
                                <Stack flex={1} sx={{ pl: matchUpMd ? 0 : matchUpSm ? 8 : 5 }}>
                                    <Box 
                                        component="img" 
                                        src={matchUpMd ? "/images/listing.png" : "/images/listing-tablet.png" }
                                        sx={{
                                            width: '100%'
                                        }}
                                    />
                                </Stack>
                            </Stack>
                        </Box>
                         <Box
                            flex={1}
                            sx={{
                                borderRadius: 10,
                                bgcolor: 'text.primary',
                                height: '100%'
                            }}
                        >
                            <Stack flexDirection={matchUpMd ? "row" : "column-reverse"} alignItems="flex-start">
                                <Stack
                                    flex={1}
                                    gap={2.5}
                                    sx={{
                                        px: matchUpSm ? 7.5 : 5,
                                        py: matchUpSm ? 7.5 : 5,
                                    }}
                                >
                                    <Typography variant="h3" color="background.default">Make money from your experiences.</Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        When curators place an experience on you virtual property you willrecieve a percentage of transactions that occur along with the fee to book your location.
                                    </Typography>
                                </Stack>
                                <Stack
                                    flexDirection="row"
                                    flex={1}
                                    sx={{
                                        width: '100%',
                                        borderTopRightRadius: 40,
                                        borderTopLeftRadius: matchUpMd ? 0 : 40,
                                        borderBottomRightRadius: matchUpMd ? 40 : 0
                                    }}
                                >
                                    <Box 
                                        component="img" 
                                        src="/images/zara.png" 
                                        sx={{ 
                                            borderTopRightRadius: 40,
                                            borderTopLeftRadius: matchUpMd ? 0 : 40,
                                            borderBottomRightRadius: matchUpMd ? 40 : 0,
                                            width: '100%',
                                            minHeight: '100%'
                                        }} 
                                    />
                                </Stack>
                            </Stack>
                        </Box>
                    </Box>
                </Stack>
            </Stack>
        </Box>
    )
}

const cards = [{
    title: 'Connect',
    price: '1',
    content: 'Login to Domain with your wallet and discover vacant land to purchase.',
}, {
    title: 'Purchase',
    price: '2',
    content: 'Select the plot you wish to own and add it to your portfolio.',
}, {
    title: 'Host',
    price: '3',
    content: 'Lease the land to uses who want to build experiences in AR.',
}, {
    
    title: 'Manage',
    price: '4',
    content: 'Add an experience or gamify the zone with AR waypoints.'
}]