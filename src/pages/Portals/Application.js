import React from 'react';
import {
    Box,
    Typography,
    Stack,
    useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function Application () {
    const theme = useTheme();
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));
    const matchUpSm = useMediaQuery(theme.breakpoints.up('sm'));
    
    return (
        <Box
            sx={{
                px: matchUpMd ? 27 : 0,
                py: matchUpSm ? 25 : 12.5,
                bgcolor: '#FFFFFF'
            }}
        >
            <Stack
                alignItems="center"
                justifyContent="center"
                gap={7.5}
            >
                <Typography 
                    variant='body2'
                    sx={{ 
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        color: '#5252E8'
                    }}
                >
                    How it works
                </Typography>
                <Box 
                    sx={{ 
                        position: 'relative', 
                        overflow: 'scroll', 
                        width: '100%',
                        '&::-webkit-scrollbar': {
                            background: 'transparent',
                            width: 0
                        }
                    }}
                >
                    <Stack 
                        flex={0}
                        flexDirection="row" 
                        alignItems="center"
                        justifyContent="space-between"
                    >
                    {items.map((item, key) =>
                        <Stack
                            key={key}
                            alignItems="center"
                            sx={{
                                width: 400,
                                position: 'relative'
                            }}
                        >
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    fontWeight: 700,
                                    color: '#000000'
                                }}
                            >
                            {item.title}
                            </Typography>
                            <Stack>
                                <Typography 
                                    sx={{ 
                                        color: '#777E90',
                                        textAlign: 'center',
                                        fontWeight: 600
                                    }}
                                >
                                    {item.content}
                                </Typography>
                                <Typography 
                                    sx={{ 
                                        color: '#000000',
                                        textAlign: 'center',
                                        fontWeight: 600
                                    }}
                                >
                                    {item.sub}
                                </Typography>
                            </Stack>
                            <Stack
                                sx={{
                                    px: 5
                                }}
                            >
                                <Box 
                                    component="img"
                                    src={item.image}
                                    sx={{
                                        width: '100%'
                                    }}
                                />
                            </Stack>
                        </Stack>
                    )}
                    </Stack>
                </Box>
            </Stack>
        </Box>
    );
}

const items = [{
    title: 'Games',
    content: 'Search for beacons and earn rewards for revealing map territory and discovering',
    sub: 'new experiences',
    image: '/images/application1.png',
}, {
    title: 'Metacommerce',
    content: 'Discover hidden worlds and unclaimed rewards and unlock new experiences based off',
    sub: 'real time engagement',
    image: '/images/application2.png',
}, {
    title: 'NFT\'s',
    content: 'Connect with  brands, musicians, and creators and join communitiies to help',
    sub: 'growinig brands',
    image: '/images/application8.png',
}]