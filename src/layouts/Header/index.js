import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import { MenuItem, useMediaQuery, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import GetStart from "./GetStart";

const pages = [
  {
    title: "Creative",
    href: "/creative",
  },
  {
    title: "Portals",
    href: "/portals",
  },
  {
    title: "Matter",
    href: "/matter",
  },
  {
    title: "Domain",
    href: "/domain",
  },
  {
    title: "Marketplace",
    href: "/marketplace",
  },
  {
    title: "Foundation",
    href: "/foundation",
  },
  {
    title: "Token",
    href: "/token",
  },
  {
    title: "NFT's",
    href: "/nft",
  },
  {
    title: "Community",
    href: "/community",
  },
];

export default function Header() {
  const theme = useTheme();
  const matchUpMd = useMediaQuery(theme.breakpoints.up("md"));
  const matchUpSm = useMediaQuery(theme.breakpoints.up("sm"));
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: theme.palette.background.default,
        backgroundImage: "none",
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          px: matchUpMd ? 25 : matchUpSm ? 12 : 4,
        }}
      >
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <Box src="/images/logo-white.png" component="img" />
          </Link>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            display: matchUpMd ? "flex" : "none",
          }}
          gap={2.5}
        >
          <Link
            to="/"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box src="/images/logo-white.png" component="img" />
          </Link>
          {pages.map((page, key) => (
            <Link to={page.href} key={key} style={{ textDecoration: "none" }}>
              <Typography
                onClick={() => {}}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.title}
              </Typography>
            </Link>
          ))}
        </Box>

        <Box sx={{ flexGrow: 0 }}>
          <Stack flexDirection="row" alignItems="center" gap={1.5}>
            <Typography
              sx={{
                background:
                  "linear-gradient(135.78deg, #00FF85 33.19%, #00F0FF 71.03%)",
                backgroundClip: "text",
                textFillColor: "transparent",
              }}
            >
              Stake
            </Typography>
            <Typography
              onClick={handleClickOpen}
              sx={{
                cursor: "pointer",
                display: matchUpMd ? "block" : "none",
              }}
            >
              Contact Us
            </Typography>
            <Stack alignItems="center" justifyContent="center">
              <Box
                component="img"
                src="/images/menu.png"
                onClick={handleOpenUserMenu}
                sx={{
                  cursor: "pointer",
                }}
              />
            </Stack>
          </Stack>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {pages.map((page, key) => (
              <MenuItem key={key} onClick={() => handleCloseUserMenu}>
                <Link
                  to={page.href}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Typography textAlign="center">{page.title}</Typography>
                </Link>
              </MenuItem>
            ))}
            {!matchUpMd ? (
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography
                  onClick={handleClickOpen}
                  sx={{
                    cursor: "pointer",
                    display: {
                      xs: "none",
                      md: "block",
                    },
                  }}
                >
                  Contact Us
                </Typography>
              </MenuItem>
            ) : (
              <></>
            )}
          </Menu>
        </Box>
      </Toolbar>
      <GetStart open={open} handleClose={handleClose} />
    </AppBar>
  );
}
