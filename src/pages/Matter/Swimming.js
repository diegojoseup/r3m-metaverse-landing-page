import React from 'react';
import {
    Box,
    useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function Swimmng () {
    const theme = useTheme();
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));
    const matchUpSm = useMediaQuery(theme.breakpoints.up('sm'));
    
    return (
        
        <Box className="item">
            <Box className="item__img-wrap"
                sx={{
                    background: matchUpMd 
                        ? 'url(/images/swimming-matter.png)'
                        : matchUpSm
                        ? 'url(/images/swimming.png)'
                        : 'url(/images/swimming.png)'
                    ,
                }}
            >
                <Box
                    className="item__img"
                    sx={{ 
                        height: 1024,
                        background: matchUpMd 
                            ? 'url(/images/swimming-matter.png)'
                            : matchUpSm
                            ? 'url(/images/swimming.png)'
                            : 'url(/images/swimming.png)'
                        ,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center'
                    }}
                    >
                </Box>
            </Box>
        </Box>
    );
}