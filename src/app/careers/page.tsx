"use client";

import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import localFont from "next/font/local";
import career from "../../../public/careerbg.png";
import Image from "next/image";
import { Footer } from "../footer";

const myFont = localFont({ src: "../../styles/fonts/SharpSansBold.otf" });
const thinFont = localFont({ src: "../../styles/fonts/SharpSansLight.otf" });
const semiBold = localFont({ src: "../../styles/fonts/SharpSansSemibold.otf" });

const reasons = [
    "Competitive salary and benefits",
    "Innovation and collaboration",
    "Learning andgrowth",
    "Diversity and Inclusion",
    "Fun and supportive team",
];

export default function CareersPage() {
    return (
        <Box pt={30}>
            <Typography
                fontSize={66}
                color={"#ffffff"}
                fontFamily={myFont.style.fontFamily}
                textAlign="center"
            >
                Careers
            </Typography>
            <Typography
                fontSize={24}
                fontFamily={thinFont.style.fontFamily}
                textAlign="center"
                color="#fff"
                alignSelf="center"
                ml="22vw"
                width="56vw"
            >
                If you&apos;re looking for a challenging and rewarding career,
                we encourage you to apply.
            </Typography>
            <div
                style={{
                    marginTop: "5vh",
                    width: "100vw",
                    height: "30vw",
                    backgroundSize: "cover",
                    display: "flex",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundImage: `url(${career.src})`,
                }}
            />

            <Typography
                fontSize={48}
                color={"#ffffff"}
                fontFamily={myFont.style.fontFamily}
                textAlign="center"
                mt={4}
            >
                Why <span style={{ color: "#4FCF00" }}>work</span> with us?
            </Typography>
            <Grid mt={10} justifyContent="center" container>
                <Grid container justifyContent="center" xs={8}>
                    {reasons.map((item, index) => (
                        <Grid xs={12} md={4.6} m={1} lg={3.8} key={index}>
                            <Box flexGrow={0} display="flex">
                                <div
                                    style={{
                                        flexGrow: 0,
                                    }}
                                >
                                    <Image
                                        objectFit="responsive"
                                        src={require("../../../public/item1.png")}
                                        width={58}
                                        style={{ marginTop: "30px" }}
                                        height={58}
                                        quality={100}
                                        alt="Picture of the author"
                                    />
                                </div>
                                <Typography
                                    m={3}
                                    fontFamily={semiBold.style.fontFamily}
                                    fontSize={22}
                                    color="white"
                                    width="80%"
                                >
                                    {item}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
            <Typography
                m={8}
                fontFamily={semiBold.style.fontFamily}
                textAlign="center"
                color="#4FCF00"
            >
                Open positions
            </Typography>
            <Footer />
        </Box>
    );
}
