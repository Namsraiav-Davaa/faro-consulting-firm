"use client";

import React from "react";
import {
    AppBar,
    Avatar,
    Box,
    Button,
    Container,
    Icon,
    IconButton,
    Menu,
    MenuItem,
    SvgIcon,
    Toolbar,
    Tooltip,
    Typography,
} from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../public/logo.svg";
import { makeStyles } from "@mui/styles";
import Image from "next/image";
import localFont from "next/font/local";
import { Link } from "react-router-dom";

const myFont = localFont({ src: "../styles/fonts/SharpSansLight.otf" });
const pages = ["About us", "Services", "Media", "Careers", "Contact"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

export function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
        null
    );
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
        null
    );

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar
            sx={{
                boxShadow: "none",
                px: 0,
                py: "20px",
                backgroundColor: "transparent",
            }}
            position="static"
        >
            <Container sx={{ flexGrow: 1, maxWidth: "100vw" }} maxWidth={false}>
                <Toolbar>
                    <Box
                        sx={{
                            display: { xs: "none", md: "flex" },
                        }}
                    >
                        <Link to={"/About us"}>
                            <Image
                                src={Logo}
                                alt="123"
                                style={{ marginLeft: "5vw" }}
                            />
                        </Link>
                    </Box>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "flex", md: "none" },
                        }}
                    >
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", md: "none" },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                >
                                    <Typography
                                        fontFamily={myFont.style.fontFamily}
                                        textAlign="center"
                                    >
                                        <Link to={`/${page}`}>{page}</Link>
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box
                        sx={{
                            display: { xs: "flex", md: "none" },
                            mr: 1,
                        }}
                    >
                        <Image src={Logo} width={60} alt="123" />
                    </Box>
                    <Box
                        pr="15vh"
                        sx={{
                            flexGrow: 1,
                            justifyContent: "flex-end",
                            display: { xs: "none", md: "flex" },
                        }}
                    >
                        {pages.map((page) => (
                            <Button
                                component={Link}
                                to={`/${page}`}
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{
                                    my: 4,
                                    color: "white",
                                    textTransform: "capitalize",
                                    display: "block",
                                    fontWeight: 100,
                                    fontSize: 16,
                                    fontFamily: myFont.style.fontFamily,
                                }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton
                                onClick={handleOpenUserMenu}
                                sx={{ p: 0 }}
                            >
                                <Avatar
                                    alt="Remy Sharp"
                                    src="/static/images/avatar/2.jpg"
                                />
                            </IconButton>
                        </Tooltip>
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
                            {settings.map((setting) => (
                                <MenuItem
                                    key={setting}
                                    onClick={handleCloseUserMenu}
                                >
                                    <Typography textAlign="center">
                                        {setting}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
