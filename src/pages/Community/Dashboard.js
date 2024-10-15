import { 
    Box,
    Stack,
    Typography,
    useMediaQuery
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link } from 'react-router-dom';
import Earn from "./Earn";

export default function Dashboard () {
    const theme = useTheme();
    const matchUpSm = useMediaQuery(theme.breakpoints.up('sm'));
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));
    const matchUpXs = useMediaQuery(theme.breakpoints.up('xs'));
    return (
        <Box>
            <Stack 
                justifyContent="center"
                sx={{ 
                    height: 1024,
                    // background: 'url(/images/foundation.png)',
                    backgroundColor: 'text.primary',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    maxWidth: '100%',
                    px: 2,
                }}
            >
                <Stack 
                    gap={1}
                    sx={{
                        pt: 5
                    }}
                >
                    <Typography 
                        sx={{ 
                            fontWeight: 700, 
                            fontSize: matchUpSm ? '92px !important' : '56px !important', 
                            textAlign: 'center',
                            lineHeight: 1,
                            color: 'background.default',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis'
                        }}
                    >Join a <br /> Vibrant Community</Typography>
                    <Typography variant="body2"
                        sx={{
                            background: 'linear-gradient(270deg, #5035FF 30.47%, #00A3FF 100%)',
                            backgroundClip: 'text',
                            textFillColor: 'transparent',
                            textAlign: 'center'
                        }}
                    >Visit Telegram</Typography>
                </Stack>
            </Stack>
            <Earn />
        </Box>
    );
}