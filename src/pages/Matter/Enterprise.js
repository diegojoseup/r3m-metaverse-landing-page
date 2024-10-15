import { useState } from 'react';
import {
    Box,
    Stack,
    Typography,
    useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function Enterprise () {
    const theme = useTheme();
    const matchUpSm = useMediaQuery(theme.breakpoints.up('sm'));
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <Box>
            <Box
                sx={{
                    px: matchUpMd ? 27 : matchUpSm ? 9 : 2.5,
                    py: matchUpMd ? 24 : 12,
                    bgcolor: theme.palette.text.primary
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
                        >Matter</Typography>
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
                        Enterprise <br /> Level Publishing for AR, VR + XR.
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
                                        The power to rapid publish AR and VR worlds.
                                    </Typography>
                                    <Typography variant="subtitle2"
                                        sx={{
                                            color: '#777E90'
                                        }}
                                    >
                                        Matter provides a minimal and unobrusive interface that lets you focus on what matters most; your clients experience. 
                                        We give you gesture based controls and touch placement so you can design and deploy on the go.
                                    </Typography>
                                </Stack>
                                <Typography variant="subtitle2"
                                    sx={{
                                        color: '#7500FF'
                                    }}
                                >
                                    Sign Up For Beta &gt;
                                </Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
            </Box>
            <Stack
                gap={4}
                sx={{
                    bgcolor: theme.palette.text.primary,
                    pb: matchUpSm ? 25 : 12.5,
                    mt: -1
                }}
            >
                <Typography
                    variant="h5"
                    sx={{
                        fontFamily: 'SF UI Display',
                        fontWeight: 700,
                        color: '#5252E8',
                        textTransform: 'uppercase',
                        textAlign: 'center'
                    }}
                >How it works</Typography>
                <Stack flexDirection={matchUpMd ? "row" : "column"}
                    gap={10}
                >
                    <Stack 
                        flex={1}
                        justifyContent="center"
                        gap={4}
                        sx={{
                            pl: matchUpMd ? 27 : matchUpSm ? 9 : 0,
                            pr: matchUpMd ? 0 : matchUpSm ? 9 : 2.5,
                            '& ul li': {
                                color: 'text.secondary',
                                fontSize: matchUpSm ? 32 : 18,
                                listStyleType: 'decimal',
                                // listStyleType: 'disc',
                                // display: 'flex',
                                // alignItems: 'flex-start'
                            },
                            // '& ul li::before': {
                            //     content: '"\\2022"',  /* Add content: \2022 is the CSS Code/unicode for a bullet */
                            //     color: 'text.secondary', /* Change the color */
                            //     fontWeight: 'bold', /* If you want it to be bold */
                            //     display: 'inline-block', /* Needed to add space between the bullet and the text */
                            //     width: '1em', /* Also needed for space (tweak if needed) */
                            //     marginLeft: '-1em', /* Also needed for space (tweak if needed) */
                            // }
                        }}
                    >
                        <ul
                            style={{
                                color: 'text.secondary',
                                maxWidth: 450
                            }}
                        >
                            <li>
                                <Typography color="text.secondary" variant="subtitle2">
                                    Build your custom world in the 3D software of your choice.
                                </Typography>
                            </li>
                            <li>
                                <Typography color="text.secondary" variant="subtitle2">
                                    Export to Matter and place items from our marketplace to enhance your scene
                                </Typography>
                            </li>
                            <li>
                                <Typography color="text.secondary" variant="subtitle2">
                                    Publish anywhere in the world.
                                </Typography>
                            </li>
                        </ul>
                    </Stack>
                    <Stack flex={1} sx={{ 
                        pl: matchUpMd ? 0 : matchUpSm ? 9 : 2.5,
                        position:'relative', 
                        overflowX: 'hidden' 
                    }}>
                        <Box component="img"
                            src="/images/matter-half.png"
                        />
                    </Stack>
                </Stack>
            </Stack>
        </Box>
    )
}