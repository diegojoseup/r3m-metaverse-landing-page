import {
    Box, Stack, Typography
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function Economy () {
    const theme = useTheme();
    return (
        <Box
            sx={{
                bgcolor: theme.palette.background.paper
            }}
        >
            <Stack 
                alignItems="center"
                gap={1}
                sx={{
                    py: 7
                }}
            >
                <Typography variant="h3">
                    Defi Economy
                </Typography>
                <Typography variant="body2">Our Token</Typography>
                <Typography variant="body2">Learn More &gt;</Typography>
            </Stack>
        </Box>
    );
}