import { Grid, Typography } from "@mui/material";
import React from "react";
import localFont from "next/font/local";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { pages } from "./contants";
import Link from "next/link";
// "xs" - Extra Small < 600
// "sm" - Small 600 < sm <= 960
// "md" - Medium 960 < md <= 1280
// "lg" - Large 1280 < 1920
// "xl" - Extra Large > 1920

const myFont = localFont({ src: "../styles/fonts/SharpSansSemibold.otf" });
const thinFont = localFont({ src: "../styles/fonts/SharpSansLight.otf" });

export function Footer() {
    return (
        <Grid p={0} container bgcolor="black" spacing={0}>
            <Grid
                px={12}
                py={6}
                item
                sm={6}
                display="flex"
                alignItems="flex-start"
                flexDirection="column"
                xs={12}
                md={4}
                lg={2.8}
            >
                {pages.map((page) => (
                    <Link key={page} href={`/${page}`}>
                        <Typography
                            fontSize={15}
                            lineHeight={2}
                            color="white"
                            fontFamily={myFont.style.fontFamily}
                        >
                            {page}
                        </Typography>
                    </Link>
                ))}
            </Grid>
            <Grid
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
                px={12}
                py={6}
                item
                sm={6}
                xs={12}
                md={4}
                lg={2.8}
            >
                <Typography
                    fontSize={15}
                    lineHeight={2}
                    color="white"
                    fontFamily={myFont.style.fontFamily}
                >
                    Find Us
                </Typography>
                <Typography
                    mt={2}
                    fontFamily={thinFont.style.fontFamily}
                    fontSize={15}
                    textAlign="start"
                    color="white"
                >
                    702, Galaxy Tower Office, 15th khoroo, Khan-Uul District,
                    Ulaanbaatar, Mongolia, 17011
                </Typography>
            </Grid>
            <Grid
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
                px={12}
                py={6}
                item
                sm={6}
                xs={12}
                md={4}
                lg={2.8}
            >
                <Typography
                    fontSize={15}
                    lineHeight={2}
                    color="white"
                    fontFamily={myFont.style.fontFamily}
                >
                    Contact Us
                </Typography>
                <Typography
                    mt={2}
                    textAlign="start"
                    fontFamily={thinFont.style.fontFamily}
                    fontSize={15}
                    color="white"
                >
                    (976) 7000-7222 consulting@farogroup.org
                </Typography>
            </Grid>
            <Grid px={12} py={6} item sm={6} xs={12} md={4} lg={3.5}>
                <Typography
                    fontSize={15}
                    lineHeight={2}
                    color="white"
                    fontFamily={myFont.style.fontFamily}
                >
                    Follow Us
                    <InstagramIcon sx={{ ml: 4, color: "#4FCF00" }} />
                    <FacebookIcon sx={{ ml: 2, color: "#4FCF00" }} />
                    <LinkedInIcon sx={{ ml: 2, color: "#4FCF00" }} />
                    <YouTubeIcon sx={{ ml: 2, color: "#4FCF00" }} />
                </Typography>
            </Grid>
            <Grid
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
                pb={4}
                item
                pl={12}
                py={6}
                sm={6}
                xs={12}
                md={4}
                lg={3.5}
            >
                <Typography
                    mt={2}
                    fontFamily={thinFont.style.fontFamily}
                    fontSize={15}
                    color="white"
                >
                    © Faro Consulting 2023.{" "}
                </Typography>
            </Grid>
        </Grid>
    );
}
