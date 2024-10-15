import { useState } from 'react';
import {
    Box,
    Stack,
    Typography,
    useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function Model () {
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
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: matchUpMd 
                                            ? 'repeat(3, 1fr)' 
                                            : matchUpSm 
                                            ? 'repeat(1, 1fr)' 
                                            : 'repeat(1, 1fr)',
                    columnGap: matchUpMd ? 2.5 : 2,
                    rowGap: 8
                }}
            >
            {cards.map((card, key) => 
                <Stack key={key} gap={4} alignItems="center">
                    <Stack 
                        flexDirection="row"
                        alignItems="center"
                        justifyConten="center"
                    >
                        <Box src={card.img} component="img" />
                    </Stack>
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
        </Box>
    )
}

const cards = [{
    title: '3D Model',
    img: '/images/circle.png',
    content: 'Clean subD mesh, good edgeflow, and minimal  polygon density.',
}, {
    title: 'Unwrapped UV\'s',
    img: '/images/plain.png',
    content: 'Fully unwrapped and atlased UV’s. Textures must work upon deployment.',
}, {
    title: 'Baked Textures',
    img: '/images/bubble.png',
    content: 'Materials are baked with lighting and use no procedural materials.',
}]