"use client";

import { Box, Button, Typography } from "@mui/material";
import React from "react";
import localFont from "next/font/local";
import Image from "next/image";
import { Card, CardMedia } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Img from "../../public/needConsulting.png";
import { Footer } from "../footer";

const myFont = localFont({ src: "../../styles/fonts/SharpSansBold.otf" });
const mediumFont = localFont({ src: "../../styles/fonts/SharpSans.otf" });
const semiboldFont = localFont({
    src: "../../styles/fonts/SharpSansSemibold.otf",
});
const thinFont = localFont({ src: "../../styles/fonts/SharpSansLight.otf" });

const divStyle = {
    backgroundImage: `url("/../public/needConsulting.png")`,
    backgroundSize: "cover",
    backgroundColor: "#fafafa",
    backgroundPosition: "center",
    width: "100%",
    height: "400px", // Adjust the height as needed
};

const useStyles = makeStyles({
    root: {
        position: "relative",
        height: 0,
        paddingTop: "56.25%", // 16:9 aspect ratio (adjust as needed)
    },
    media: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
    },
    overlay: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
        color: "white",
    },
});

const datas = [
    {
        title: "Expertise",
        desc: "Our consultants have years of experience in a variety of industries, and we are experts in our respective fields. We are constantly staying up-to-date on the latest trends and best practices, so we can provide our clients with the most effective solutions.",
    },
    {
        title: "Results",
        desc: "We have a proven track record of success. Our clients have consistently achieved their goals after working with us. We are committed to helping our clients achieve their desired outcomes, and we will work with you to develop a customized solution that meets your specific needs.",
    },
    {
        title: "Approach",
        desc: "We take a collaborative approach to consulting. We work with our clients to understand their unique needs and challenges, and we develop customized solutions that will help them achieve their goals. ",
    },
    {
        title: "Commitment",
        desc: "We are committed to our clients' success. We are always available to answer your questions and provide guidance, and we are committed to providing you with the highest quality of service.",
    },
    {
        title: "Value",
        desc: "We offer our clients a great value for their investment. Our services are affordable, and we offer a guarantee of satisfaction. We are confident that you will be satisfied with our services, and we are committed to making sure that you achieve your desired outcomes.",
    },
];

export default function AboutPage() {
    return (
        <div style={{ minHeight: "100vh" }}>
            <Box
                width="100%"
                display="flex"
                justifyContent="center"
                alignItems="center"
                pt="5vw"
                flexDirection="column"
                sx={{ alignItems: "center" }}
            >
                <Box display="flex" flexDirection="row">
                    <Typography
                        fontSize={66}
                        color={"#ffffff"}
                        fontFamily={myFont.style.fontFamily}
                    >
                        About
                    </Typography>
                    <Typography
                        fontSize={66}
                        ml={"15px"}
                        color={"#4FCF00"}
                        fontFamily={myFont.style.fontFamily}
                    >
                        us
                    </Typography>
                </Box>
                <Typography
                    fontFamily={mediumFont.style.fontFamily}
                    fontSize={24}
                    width={"45%"}
                    textAlign={"center"}
                    color={"#ffffff"}
                >
                    We bring an entrepreneurial mindset to your toughest
                    challenges, building businesses that redefine indsutries.
                </Typography>
                <Box display="flex" flexDirection="row" width="100%">
                    <Box
                        width="50%"
                        height="25vw"
                        display="flex"
                        alignItems="center"
                        justifyContent="flex-end"
                    >
                        <Image
                            src={"/../public/image1.png"}
                            width={600}
                            quality={100}
                            height={500}
                            alt="Picture of the author"
                        />
                    </Box>
                    <Box
                        width="50%"
                        height="25vw"
                        display="flex"
                        flexDirection="column"
                        pl={"5%"}
                        alignItems="flex-start"
                        justifyContent="center"
                    >
                        <Typography
                            fontFamily={thinFont.style.fontFamily}
                            width="57%"
                            fontWeight="10"
                            color="#ffffff"
                            align="justify"
                            fontSize={18}
                        >
                            Our firm is designed to operate as a single global
                            partnership, united by a strong set of values. We
                            are equally committed to attracting and developing a
                            talented and diverse group of colleagues, and to
                            helping our clients create meaningful and lasting
                            change.
                        </Typography>
                        <Button
                            variant="outlined"
                            sx={{
                                borderWidth: 4,
                                borderColor: "#4FCF00",
                                borderRadius: "50px",
                                color: "white",
                                fontFamily: mediumFont.style.fontFamily,
                                textTransform: "lowercase",
                                px: "30px",
                                mt: "30px",
                            }}
                        >
                            Get in touch
                        </Button>
                    </Box>
                </Box>
                <Box display="flex" flexDirection="row">
                    <Typography
                        fontSize={66}
                        color={"#ffffff"}
                        fontFamily={myFont.style.fontFamily}
                    >
                        Why choose
                    </Typography>
                    <Typography
                        fontSize={66}
                        ml={"15px"}
                        color={"#4FCF00"}
                        fontFamily={myFont.style.fontFamily}
                    >
                        us
                    </Typography>
                </Box>
                <Typography
                    fontFamily={mediumFont.style.fontFamily}
                    fontSize={24}
                    width={"45%"}
                    textAlign={"center"}
                    color={"#ffffff"}
                >
                    We help businesses create a more sustainable and inclusive
                    future.
                </Typography>
                <Box display="flex" mt="5vw" flexDirection="row" width="100%">
                    <Box
                        display="flex"
                        pl="10%"
                        alignItems="flex-start"
                        flexDirection="column"
                        width="50%"
                    >
                        <Typography
                            fontSize={54}
                            color={"#ffffff"}
                            fontFamily={myFont.style.fontFamily}
                        >
                            Process
                        </Typography>
                        <Typography
                            fontFamily={thinFont.style.fontFamily}
                            width="70%"
                            align="justify"
                            fontWeight="10"
                            color="#ffffff"
                            fontSize={18}
                        >
                            Our team of professionals develops and implements
                            business strategies that focus on government
                            relations and business partnerships. They use these
                            strategies to create solutions for market entry,
                            expansion, and risk management.
                        </Typography>
                        <Button
                            variant="outlined"
                            sx={{
                                borderWidth: 4,
                                borderColor: "#4FCF00",
                                borderRadius: "50px",
                                color: "white",
                                fontFamily: mediumFont.style.fontFamily,
                                textTransform: "lowercase",
                                px: "30px",
                                mt: "30px",
                            }}
                        >
                            our services
                        </Button>
                        <Image
                            src={"/../public/image2.png"}
                            width={530}
                            quality={100}
                            style={{ marginTop: "30px" }}
                            height={800}
                            alt="Picture of the author"
                        />
                    </Box>
                    <Box pt="80px" width="50%">
                        {datas.map((item, index) => (
                            <Box
                                display="flex"
                                mb="50px"
                                alignItems="flex-start"
                                key={item.title}
                            >
                                <Image
                                    src={`/../public/item${index + 1}.png`}
                                    width={120}
                                    style={{ marginTop: "30px" }}
                                    height={120}
                                    quality={100}
                                    alt="Picture of the author"
                                />
                                <Box ml="30px">
                                    <Typography
                                        fontFamily={myFont.style.fontFamily}
                                        width="70%"
                                        align="justify"
                                        fontWeight="10"
                                        color="#ffffff"
                                        fontSize={22}
                                    >
                                        {item.title}
                                    </Typography>
                                    <Typography
                                        mt="20px"
                                        fontFamily={thinFont.style.fontFamily}
                                        width="70%"
                                        align="justify"
                                        fontWeight="10"
                                        color="#ffffff"
                                        fontSize={18}
                                    >
                                        {item.desc}
                                    </Typography>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
            <div className="relative">
                <Image
                    layout="fill"
                    className="object-center object-cover pointer-events-none"
                    src={"/../public/needConsulting.png"}
                    alt={"title"}
                    quality={100}
                />
                <Box
                    pb="8vw"
                    pt="14vw"
                    pl="8vw"
                    sx={{ zIndex: 10, position: "relative" }}
                >
                    <Box display="flex">
                        <Typography
                            fontFamily={myFont.style.fontFamily}
                            fontSize={100}
                            display="flex"
                            sx={{ zIndex: 10, position: "relative" }}
                            color="#FFFFFF"
                        >
                            Need
                        </Typography>
                        <Typography
                            fontFamily={myFont.style.fontFamily}
                            fontSize={100}
                            ml={3}
                            display="flex"
                            sx={{ zIndex: 10, position: "relative" }}
                            color="#4FCF00"
                        >
                            consult
                        </Typography>
                        <Typography
                            fontFamily={myFont.style.fontFamily}
                            fontSize={100}
                            display="flex"
                            sx={{ zIndex: 10, position: "relative" }}
                            color="#FFFFFF"
                        >
                            ing
                        </Typography>
                    </Box>
                    <Typography
                        fontFamily={semiboldFont.style.fontFamily}
                        fontSize={20}
                        display="flex"
                        pb={0}
                        color="#FFFFFF"
                    >
                        Let us guide you!
                    </Typography>
                </Box>
            </div>
            <Footer />
        </div>
    );
}
