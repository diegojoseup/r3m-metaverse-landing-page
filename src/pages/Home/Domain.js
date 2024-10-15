import { 
    Box,
    Stack,
    Typography,
} from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';

export default function Domain () {
    return (
        <Box className="item">
            <Box className="item__img-wrap"
                sx={{
                    background: 'url(/images/domain-desktop.png)'
                }}
            >
                <Box
                    className="item__img"
                    sx={{ 
                        height: 1024,
                        background: 'url(/images/domain-desktop.png)',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                    }}>
                    
                </Box>
                <Stack 
                        alignItems="center" 
                        gap={1}
                        sx={{
                            pt: 6,
                            position: 'absolute',
                            width: '100%'
                        }}
                    >
                        <Typography variant="h3"
                        >Domain</Typography>
                        <Typography variant="body2"
                            sx={{
                                opacity: 0.7
                            }}
                        >Virtual Land Management</Typography>
                        <Link to="/domain" style={{ textDecoration: 'none' }}>
                            <Typography 
                                variant="body2" 
                                sx={{ 
                                    background: 'linear-gradient(135.78deg, #00FF85 33.19%, #00F0FF 71.03%)',
                                    backgroundClip: 'text',
                                    textFillColor: 'transparent'
                            }}
                            >Learn More &gt; </Typography>
                        </Link>
                    </Stack>
            </Box>
        </Box>
    );
}