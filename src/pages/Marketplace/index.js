import React from 'react';
import Project from './Project';
import Royalty from './Royalty';

import {
    Box,
    Stack,
    useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function Marketplace () {
    const theme = useTheme();
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));
    const matchUpSm = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Box sx={{
            px: matchUpMd ? 4 : 0,
        }}>
            <Stack gap={matchUpSm ? 4 : 2.5}>
                <Royalty />
                <Project />
            </Stack>
        </Box>
    );
}