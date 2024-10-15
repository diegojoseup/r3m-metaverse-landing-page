import { 
    Box,
    Stack,
    Typography 
} from "@mui/material";
import { Link } from 'react-router-dom';

export default function Creative () {
    return (
        <Box className="item">
            <Box className="item__img-wrap"
                sx={{
                    background: 'url(/images/creative-desktop.png)'
                }}
            >
                <Box
                    className="item__img"
                    sx={{ 
                        height: 1024,
                        background: 'url(/images/creative-desktop.png)',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center'
                    }}
                >
                </Box>
                <Stack 
                    alignItems="center" 
                    gap={1}
                    sx={{
                        pt: 12,
                        position: 'absolute',
                        width: '100%'
                    }}
                >
                    <Typography variant="h3">Creative</Typography>
                    <Typography variant="body2">Shape Your Virtual Presence</Typography>
                    <Link to="/creative" style={{ textDecoration: 'none' }}>
                        <Typography variant="body2" sx={{ color: '#7500FF' }}>Learn More &gt; </Typography>
                    </Link>
                </Stack>
            </Box>
        </Box>
    );
}