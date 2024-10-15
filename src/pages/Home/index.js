import {
    Box,
    Stack,
    Typography,
    useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Dashboard from './Dashboard';
import Creative from './Creative';
import Portals from './Portals';
import Matter from './Matter';
import Domain from './Domain';
import Marketplace from './Marketplace';
import Foundation from './Foundation';
import Economy from './Economy';

export default function Home () {
    const theme = useTheme();
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <Box sx={{
            px: matchUpMd ? 4 : 0,
            py: 4
        }}>
            <Stack gap={4}>
                <Dashboard />
                <Creative />
                <Portals />
                <Matter />
                <Domain />
                <Marketplace />
                <Foundation />
                <Economy />
            </Stack>
        </Box>
    );
}