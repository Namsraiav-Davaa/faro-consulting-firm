"use client";

import React, { useContext } from "react";
import { usePathname } from "next/navigation";
import {
    AppBar,
    Box,
    Button,
    Container,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
} from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../public/logo.svg";
import LogoB from "../../public/logoB.svg";
import { makeStyles } from "@mui/styles";
import Image from "next/image";
import localFont from "next/font/local";
import { pages } from "component/app/contants";
import Link from "next/link";
import { ColorContext } from "component/contexts/textColor";

const myFont = localFont({ src: "../styles/fonts/SharpSansLight.otf" });
const settings = ["Profile", "Account", "Dashboard", "Logout"];

export function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
        null
    );

    const { color } = useContext(ColorContext);

    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
        null
    );

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const pathname = usePathname();

    console.log("pathname :>> ", pathname);

    const _color = pathname !== "/home" ? "white" : color;

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
            // position="static"
        >
            <Container
                sx={{ flexGrow: 1, maxWidth: "100vw" }}
                disableGutters={true}
                maxWidth={false}
            >
                <Toolbar disableGutters={true}>
                    <Box
                        sx={{
                            display: { xs: "none", md: "flex" },
                        }}
                    >
                        <Link href={"/"}>
                            <Image
                                src={_color == "white" ? Logo : LogoB}
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
                                        <Link href={`/${page}`}>{page}</Link>
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
                            <Link href={`/${page}`} key={page}>
                                <Button
                                    // component={Link}
                                    // to={`/${page}`}
                                    onClick={handleCloseNavMenu}
                                    sx={{
                                        my: 4,
                                        mx: 2,
                                        py: 0,
                                        color: _color,
                                        textTransform: "capitalize",
                                        display: "block",
                                        fontWeight: 100,
                                        borderRadius: 0,
                                        borderBottom:
                                            `/${page}` == pathname
                                                ? "1.5px solid #4FCF00"
                                                : "",
                                        fontSize: 16,
                                        fontFamily: myFont.style.fontFamily,
                                    }}
                                >
                                    {page}
                                </Button>
                            </Link>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>{/*  */}</Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
