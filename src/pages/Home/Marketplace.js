import { 
    Box,
    Stack,
    Typography 
} from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';

export default function Marketplace () {
    const theme = useTheme();
    return (
        <Box className="item">
            <Box className="item__img-wrap"
                sx={{
                    background: 'url(/images/marketplace-desktop.png)'
                }}
            >
                <Box
                    className="item__img"
                    sx={{
                        height: 1024,
                        background: 'url(/images/marketplace-desktop.png)',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}
                >
                </Box>
                
                <Stack 
                    alignItems="center" 
                    gap={1}
                    sx={{
                        pt:6,
                        position: 'absolute',
                        width: '100%'
                    }}
                >
                    <Typography variant="h3" sx={{ color: theme.palette.background.default }}>Marketplace</Typography>
                    <Typography variant="body2" sx={{ color: theme.palette.background.default, opacity: 0.7 }}>Sell Your 3D Models</Typography>
                    <Link to="/marketplace" style={{ textDecoration: 'none' }}>
                        <Typography variant="body2" sx={{ color: '#7500FF' }}>Learn More &gt; </Typography>
                    </Link>
                </Stack>
            </Box>
        </Box>
    );
}