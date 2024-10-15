import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Outlet, useLocation } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
import { Box, CssBaseline, useMediaQuery } from '@mui/material';

import Header from './Header';
import Footer from './Footer';
import CursorIn from '../cursor-inner';

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        // padding: theme.spacing(3),
        // paddingTop: 100,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        // marginLeft: `${drawerWidth}px`,
        ...(open && {
                transition: theme.transitions.create('margin', {
                    easing: theme.transitions.easing.easeOut,
                    duration: theme.transitions.duration.enteringScreen,
                }),
            // marginLeft: 0,
        }),
    }),
);
  
export default function Layout () {  
    const theme = useTheme();
    const cursorRef = React.useRef();
    const { pathname } = useLocation();
    // const cursor = new Cursor(document.querySelector('.cursor')); 

    React.useEffect(() => {
        const main = document.createElement('script');
        const demo = document.createElement('script');

        main.src = '/scripts/imagesloaded.pkgd.min.js';
        main.async = true;

        demo.src = '/scripts/demo.js';
        demo.async = true;

        document.body.appendChild(main);
        document.body.appendChild(demo);

        return () => {
            document.body.removeChild(main);
            document.body.removeChild(demo);
        }
    }, [pathname])
    return (
        <Box
            sx={{
                position: 'relative',
                minHeight: '100vh',
                bgcolor: theme.palette.background.default
            }}
        >
            <CursorIn />
            <Box>
                <CssBaseline />
                <Main>
                    <div data-scroll className="content">
                        <Header />
                        <Outlet />
                        <Footer />
                    </div>
                </Main>
            </Box>
        </Box>
    );
}