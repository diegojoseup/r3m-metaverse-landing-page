import {
    Box, 
    Stack,
    Typography,
    useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function Covered () {
    const theme = useTheme();
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));
    const matchUpSm = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Box sx={{
            px: matchUpMd ? 27 : matchUpSm ? 7.5 : 2.5,
        }}>
            <Stack
                flexDirection={matchUpMd ? "row" : "column"}
            >
                <Box flex={1}
                >
                    <Box 
                        component="img" 
                        src="/images/covered.png" 
                        sx={{ 
                            width: '100%', 
                            height: '100%',
                            display: 'flex',
                            borderTopLeftRadius: 40,
                            borderBottomLeftRadius: matchUpMd ? 40 : 0,
                            borderTopRightRadius: matchUpMd ? 0 : 40
                        }}
                    />
                </Box>
                <Box
                    flex={1}
                    sx={{
                        bgcolor: '#FFFFFF',
                        pt: matchUpMd ? 0 : matchUpSm ? 15 : 5,
                        borderTopRightRadius: matchUpMd ? 40 : 0,
                        borderBottomRightRadius: 40,
                        borderBottomLeftRadius: matchUpMd ? 0: 40,
                    }}
                >
                    <Stack 
                        gap={2.5}
                        // alignItems="flex-end"
                        justifyContent="flex-end"
                        sx={{
                            height: '100%',
                            pl: matchUpSm ? 7.5 : 5,
                            pr: matchUpSm ? 15 :  5,
                            pb: matchUpSm ? 12.5 : 5
                        }}
                    >
                        <Typography
                            variant="h3"
                            sx={{
                                lineHeight: 1,
                                color: '#000000'
                            }}
                        >
                            We've got you covered.
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                color: '#777E90'
                            }}
                        >
                            We  include the support you need.
                            We will assist you with the creative strategies, VR/AR mechanics, and campaign launch support to get your virtual presence making you money the moment you launch it.
                        </Typography>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    )
}