import React from 'react';
import Dashboard from './Dashboard';
import Host from './Host';
import Real from './Real';
import Swimming from './Swimming';

import {
    Box,
    Stack,
    useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function Domain () {
    const theme = useTheme();
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));
    const matchUpSm = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Box sx={{
            px: matchUpMd ? 4 : 0,
        }}>
            <Stack gap={matchUpSm ? 4 : 2.5}>
                <Dashboard />
                <Swimming />
                <Real />
                <Host />
            </Stack>
        </Box>
    );
}