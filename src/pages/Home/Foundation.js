import { 
    Box,
    Stack,
    Typography 
} from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';

export default function Foundation () {
    const theme = useTheme();
    return (
        <Box className="item">
            <Box className="item__img-wrap"
                sx={{
                    background: 'url(/images/foundation.png)'
                }}
            >
                <Box
                    className="item__img"
                    sx={{
                        height: 1024,
                        background: 'url(/images/foundation.png)',
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
                    <Typography variant="h3" sx={{ color: theme.palette.background.default }}>Foundation</Typography>
                    <Typography variant="body2" sx={{ color: theme.palette.background.default, opacity: 0.7 }}>Corporate Social Responsibility</Typography>
                    <Link to="/foundation" style={{ textDecoration: 'none' }}>
                        <Typography variant="body2" sx={{ color: '#7500FF' }}>Learn More &gt; </Typography>
                    </Link>
                </Stack>
            </Box>
        </Box>
    );
}