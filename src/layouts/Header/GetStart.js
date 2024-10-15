import * as React from 'react';
import {
    Stack,
    Typography,
    TextField,
    useMediaQuery
} from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { useTheme } from '@mui/material/styles';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

export default function GetStart(props) {

    const theme = useTheme();
    const matchUpSm = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <div>
            <Dialog
                open={props.open}
                TransitionComponent={Transition}
                keepMounted
                onClose={props.handleClose}
                aria-describedby="alert-dialog-slide-description"
                sx={{
                    '& .MuiPaper-root': {
                        bgcolor: theme.palette.text.primary,
                        borderRadius: 0,
                        borderTopRightRadius: matchUpSm ? 0 : 40,
                        borderTopLeftRadius: matchUpSm ? 0 : 40,
                        p: matchUpSm ? 7.5 : 4,
                        maxWidth: 800
                    }
                }}
            >
                <Stack gap={6}>
                    <Stack gap={1}>
                        <Typography variant="h1" 
                            sx={{ 
                                lineHeight: 1,
                                fontFamily: 'SF UI Display',
                                fontWeight: 600,
                                color:  theme.palette.background.default
                            }}>Get Started</Typography>
                        <Typography variant="body2"
                            sx={{
                                color: theme.palette.background.default
                            }}
                        >
                            If you are ready to expand into the Metaverse. 
                            Send us your contact details and our team will get in contact with you.
                        </Typography>
                    </Stack>
                    <Stack gap={2}>
                        <Stack flexDirection="row" alignItems="center">
                            <TextField 
                                label="First Name" 
                                variant="standard" 
                                sx={{
                                    flex: 1,
                                    '& input': {
                                        color: theme.palette.background.default,
                                        borderBottom: ` 1px solid ${theme.palette.background.default}`,
                                    }
                                }}
                            />
                            <TextField 
                                label="Last Name" 
                                variant="standard" 
                                sx={{
                                    flex: 1,
                                    '& input': {
                                        color: theme.palette.background.default,
                                        borderBottom: ` 1px solid ${theme.palette.background.default}`,
                                    }
                                }}
                            />
                        </Stack>
                        <TextField
                            label="Your Email" 
                            variant="standard" 
                            sx={{
                                flex: 1,
                                '& input': {
                                    color: theme.palette.background.default,
                                    borderBottom: ` 1px solid ${theme.palette.background.default}`,
                                }
                            }}
                        />
                    </Stack>
                    <Stack
                        flexDirection="row"
                        justifyContent="flex-end"
                        sx={{ pt: 1.5 }}>
                        <Button
                            onClick={props.handleClose}
                            sx={{ 
                                background: 'linear-gradient(270.67deg, #5200FF 0.12%, #00B6C1 99.61%)',
                                borderRadius: 15,
                                color: theme.palette.text.primary,
                                px: matchUpSm ? 10 : 0,
                                py: 1.5,
                                width: matchUpSm ? 'unset' : '100%'
                            }}
                        >
                            <Typography>Submit</Typography>
                        </Button>
                    </Stack>
                </Stack>
            </Dialog>
        </div>
    );
}
