"use client";

import { Box, Grid, Typography } from "@mui/material";
import localFont from "next/font/local";
import React from "react";
import Img1 from "../../../public/detail-services/service1.png";
import Img2 from "../../../public/detail-services/service2.png";
import Img3 from "../../../public/detail-services/service3.png";
import Img4 from "../../../public/detail-services/service4.png";
import Img5 from "../../../public/detail-services/service5.png";
import Image from "next/image";
import { Footer } from "../footer";

const thinFont = localFont({ src: "../../styles/fonts/SharpSansLight.otf" });
const myFont = localFont({ src: "../../styles/fonts/SharpSansBold.otf" });

const services = [
    {
        text: "Market Penetration Strategy",
        image: Img1,
        infos: [
            "Market Comparative Evaluation",
            "Development of an extensive strategy",
            "Implementation support",
            "M&A and Joint Venture (JV) Facilitation",
        ],
    },
    {
        text: "Market Development Solutions",
        image: Img2,
        infos: [
            "Regulatory Inspection",
            "Engagement Planning",
            "Brand Development",
            "In-Market Advocacy and Strategy Execution",
        ],
    },
    {
        text: "Crisis Management",
        image: Img3,
        infos: [
            "Government and political perspectives on difficult litigation-related issues",
            "Business related conflict resolution",
            "Navigating Corporate Crisis at the Behest of the Government",
            "Enhancing Brand Equity and Developing a Resiliency Strategy",
        ],
    },
    {
        text: "Enterprise Risk Management",
        image: Img4,
        infos: [
            "Political, Policy and Geopolitical Risk Monitoring",
            "Advisory Board Meetings",
            "Procedures in Situation Planning",
            "Strategy Development for Risk Management",
        ],
    },
    {
        text: "Government Relations",
        image: Img5,
        infos: [
            "Research on government policy, legislation, and regulations",
            "Advocate on behalf of the clients to government officials and agencies.",
            "Communication support between Government - Enterprise ",
            "Crisis Communications & Compliances",
        ],
    },
];

export default function SerVicesPage() {
    return (
        <Box pt={30}>
            <Typography
                fontSize={66}
                color={"#ffffff"}
                fontFamily={myFont.style.fontFamily}
                textAlign="center"
            >
                Our <span style={{ color: "#4FCF00" }}>services</span>
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
                We are experts in understanding the complex dynamics of
                public-private partnerships. We use our knowledge and experience
                to help our clients achieve their goals through strategic
                planning and sound analysis.
            </Typography>
            <Grid
                sx={{
                    display: { xs: "none", md: "flex" },
                }}
                my={10}
                container
            >
                {services.map((item, index) => (
                    <Grid mt={2} xs={12} container key={index}>
                        {index % 2 == 0 ? (
                            <Grid container>
                                <Grid
                                    display="flex"
                                    justifyContent="flex-end"
                                    xs={12}
                                    md={6}
                                >
                                    <div
                                        style={{
                                            width: 518,
                                            height: 344,
                                            // marginTop: 30,
                                            backgroundRepeat: "no-repeat",
                                            backgroundImage: `url(${item.image.src})`,
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: 518,
                                                marginLeft: "0px",
                                                marginBottom: "0px",
                                                height: 348,
                                                display: "flex",
                                                justifyContent: "flex-end",
                                                alignItems: "flex-end",
                                                borderRadius: 56,
                                                background:
                                                    "linear-gradient(0deg,  rgba(79,207,0, 0.24), rgba(79,207,0, 0.01))",
                                            }}
                                        >
                                            <Typography
                                                fontSize={30}
                                                textAlign="end"
                                                width="90%"
                                                p={4}
                                                fontFamily={
                                                    myFont.style.fontFamily
                                                }
                                                color={"white"}
                                            >
                                                {item.text}
                                            </Typography>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid xs={12} md={6}>
                                    <Box
                                        sx={{
                                            width: 518,
                                            height: 348,
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "center",
                                        }}
                                    >
                                        {item.infos.map((text, index) => (
                                            <div
                                                style={{
                                                    display: "flex",
                                                    flexDirection: "row",
                                                    marginTop: "10px",
                                                    marginLeft: "60px",
                                                    marginBottom: "10px",
                                                }}
                                                key={index}
                                            >
                                                <div style={{ flexGrow: 0 }}>
                                                    <Image
                                                        src={require("../../../public/Ellipse.png")}
                                                        width={26}
                                                        objectFit="contain"
                                                        style={{
                                                            marginRight: "15px",
                                                        }}
                                                        quality={100}
                                                        height={26}
                                                        alt="Picture of the author"
                                                    />
                                                </div>
                                                <Typography
                                                    mr={2}
                                                    width="90%"
                                                    fontFamily={
                                                        thinFont.style
                                                            .fontFamily
                                                    }
                                                    key={index}
                                                    fontSize={20}
                                                    color="white"
                                                >
                                                    {text}
                                                </Typography>
                                            </div>
                                        ))}
                                    </Box>
                                </Grid>
                            </Grid>
                        ) : (
                            <Grid container>
                                <Grid
                                    display="flex"
                                    flexDirection="column"
                                    alignItems="flex-end"
                                    xs={12}
                                    md={6}
                                >
                                    <Box
                                        sx={{
                                            width: 518,
                                            height: 348,
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "center",
                                        }}
                                    >
                                        {item.infos.map((text, index) => (
                                            <div
                                                style={{
                                                    display: "flex",
                                                    flexDirection: "row",
                                                    marginTop: "10px",
                                                    marginBottom: "10px",
                                                }}
                                                key={index}
                                            >
                                                <div style={{ flexGrow: 0 }}>
                                                    <Image
                                                        src={require("../../../public/Ellipse.png")}
                                                        width={26}
                                                        objectFit="contain"
                                                        style={{
                                                            marginRight: "15px",
                                                        }}
                                                        quality={100}
                                                        height={26}
                                                        alt="Picture of the author"
                                                    />
                                                </div>
                                                <Typography
                                                    mr={2}
                                                    fontFamily={
                                                        thinFont.style
                                                            .fontFamily
                                                    }
                                                    key={index}
                                                    fontSize={20}
                                                    color="white"
                                                >
                                                    {text}
                                                </Typography>
                                            </div>
                                        ))}
                                    </Box>
                                </Grid>
                                <Grid xs={12} md={6}>
                                    <div
                                        style={{
                                            width: 518,
                                            height: 344,
                                            // marginTop: 30,
                                            backgroundRepeat: "no-repeat",
                                            backgroundImage: `url(${item.image.src})`,
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: 518,
                                                marginLeft: "0px",
                                                marginBottom: "0px",
                                                height: 348,
                                                display: "flex",
                                                justifyContent: "flex-end",
                                                alignItems: "flex-end",
                                                borderRadius: 56,
                                                background:
                                                    "linear-gradient(0deg,  rgba(79,207,0, 0.24), rgba(79,207,0, 0.01))",
                                            }}
                                        >
                                            <Typography
                                                fontSize={30}
                                                textAlign="end"
                                                width="90%"
                                                p={4}
                                                fontFamily={
                                                    myFont.style.fontFamily
                                                }
                                                color={"white"}
                                            >
                                                {item.text}
                                            </Typography>
                                        </div>
                                    </div>
                                </Grid>
                            </Grid>
                        )}
                    </Grid>
                ))}
            </Grid>
            <Grid
                sx={{
                    flexGrow: 1,
                    display: { xs: "flex", md: "none" },
                }}
                container
            >
                {services.map((item, index) => (
                    <Grid xs={12} key={index}>
                        <div
                            style={{
                                width: "100vw",
                                height: "68vw",
                                marginTop: 20,
                                backgroundSize: "contain",
                                backgroundRepeat: "no-repeat",
                                backgroundImage: `url(${item.image.src})`,
                            }}
                        >
                            <div
                                style={{
                                    width: "100vw",
                                    height: "68vw",
                                    marginLeft: "0px",
                                    marginBottom: "0px",
                                    display: "flex",
                                    justifyContent: "flex-end",
                                    alignItems: "flex-end",
                                    borderRadius: "10vw",
                                    background:
                                        "linear-gradient(0deg,  rgba(79,207,0, 0.24), rgba(79,207,0, 0.01))",
                                }}
                            >
                                <Typography
                                    fontSize={30}
                                    textAlign="end"
                                    width="90%"
                                    p={4}
                                    fontFamily={myFont.style.fontFamily}
                                    color={"white"}
                                >
                                    {item.text}
                                </Typography>
                            </div>
                        </div>
                        <div style={{ marginTop: "40px", marginLeft: "20px" }}>
                            {item.infos.map((text, index) => (
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        marginTop: "10px",
                                        marginBottom: "10px",
                                    }}
                                    key={index}
                                >
                                    <div style={{ flexGrow: 0 }}>
                                        <Image
                                            src={require("../../../public/Ellipse.png")}
                                            width={26}
                                            objectFit="contain"
                                            style={{
                                                marginRight: "15px",
                                                flexGrow: 0,
                                            }}
                                            quality={100}
                                            height={26}
                                            alt="Picture of the author"
                                        />
                                    </div>
                                    <Typography
                                        mr={2}
                                        width="80%"
                                        fontFamily={thinFont.style.fontFamily}
                                        key={index}
                                        fontSize={20}
                                        color="white"
                                    >
                                        {text}
                                    </Typography>
                                </div>
                            ))}
                        </div>
                    </Grid>
                ))}
            </Grid>
            <Footer />
        </Box>
    );
}
