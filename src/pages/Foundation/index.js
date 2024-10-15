import {
    Box,
    Stack,
    Typography,
    useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Dashboard from './Dashboard';
import Tech from './Tech';

export default function Creative () {
    const theme = useTheme();
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <Box sx={{
            px: matchUpMd ? 4 : 0,
            pb: 4
        }}>
            <Stack gap={4}>
                <Dashboard />
                <Tech />
            </Stack>
        </Box>
    );
}