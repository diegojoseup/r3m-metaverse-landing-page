import {
    Box, Stack, useMediaQuery
} from '@mui/material';
import  { useTheme } from '@mui/material/styles';

export default function Swimming () {
    const theme = useTheme();
    const matchUpSm = useMediaQuery(theme.breakpoints.up('sm'));
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <Box
            sx={{
                px: matchUpMd ? 27 : matchUpSm ? 9 : 2.5,
                py: 2
            }}
        >
            <Box
            >
                <Box 
                    component="img" 
                    src="/images/swimming.png"
                    sx={{
                        width: '100%',
                        borderRadius: 10
                    }}
                />
            </Box>
        </Box>
    )
}