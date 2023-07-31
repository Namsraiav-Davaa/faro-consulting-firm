"use client";

import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import localFont from "next/font/local";
import Img1 from "../../../public/service1.png";
import Img2 from "../../../public/service2.png";
import Img3 from "../../../public/service3.png";
import Img4 from "../../../public/service4.png";
import Img5 from "../../../public/service5.png";
import withUs from "../../../public/withUs.png";
import { makeStyles } from "@mui/styles";
import { Footer } from "../footer";
import Nature from "../../../public/nature.png";

import "./styles.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper/modules";
// import { makeStyles } from "@mui/styles";
const myFont = localFont({ src: "../../styles/fonts/SharpSansBold.otf" });
const thinFont = localFont({ src: "../../styles/fonts/SharpSansLight.otf" });
const Font = localFont({ src: "../../styles/fonts/SharpSansSemibold.otf" });

import colab1 from "../../../public/colab1.png";
import colab2 from "../../../public/colab2.png";
import colab3 from "../../../public/colab3.png";
import colab5 from "../../../public/colab4.png";
import colab4 from "../../../public/colab5.png";
import colab6 from "../../../public/colab6.png";
import colab7 from "../../../public/colab7.png";
import colab8 from "../../../public/colab8.png";
import colab9 from "../../../public/colab9.png";

const colabs = [
    colab1,
    colab2,
    colab3,
    colab4,
    colab5,
    colab6,
    colab7,
    colab8,
    colab9,
];

const services = [
    { text: "Market Penetration Strategy", image: Img1 },
    { text: "Market Development Solutions", image: Img2 },
    { text: "Crisis Management", image: Img3 },
    { text: "Enterprise Risk Management", image: Img4 },
    { text: "Government Relations", image: Img5 },
];

const styles = {
    responsiveText: {
        fontSize: "7rem",
        "@media (max-width: 1500px)": {
            fontSize: "5.5rem",
        },
        "@media (max-width: 1200px)": {
            fontSize: "4.5rem",
        },
        "@media (max-width: 800px)": {
            fontSize: "3.4rem",
        },
        "@media (max-width: 600px)": {
            fontSize: "3.4rem",
        },
        "@media (max-width: 400px)": {
            fontSize: "2rem",
        },
    },
    responsiveText2: {
        fontSize: "7.5rem",
        "@media (max-width: 1500px)": {
            fontSize: "7.5rem",
        },
        "@media (max-width: 1200px)": {
            fontSize: "4rem",
        },
        "@media (max-width: 800px)": {
            fontSize: "3rem",
        },
        "@media (max-width: 600px)": {
            fontSize: "2rem",
        },
        "@media (max-width: 400px)": {
            fontSize: "1rem",
        },
    },
};

const team = [
    {
        first_name: "Byambajargal",
        last_name: "Ayushjav",
        role: "CEO",
        image: require("../../../public/bimja.png"),
    },
    {
        first_name: "Khashkhuu",
        last_name: "Tsegmid",
        role: "Consultant",
        image: require("../../../public/khashaa.png"),
    },
    {
        first_name: "Khassod",
        last_name: "Amgalan",
        role: "Financial Consultant",
        image: require("../../../public/khasa.png"),
    },
    {
        first_name: "Amartungalag",
        last_name: "Tumurbaatar",
        role: "Data Analyst",
        image: require("../../../public/amaaraa.png"),
    },
    {
        first_name: "Namsraijav",
        last_name: "Davaa",
        role: "Tech Consultant",
        image: require("../../../public/namsrai.png"),
    },
    {
        first_name: "Aruinbayar",
        last_name: "Duger",
        role: "Financial Analyst",
        image: require("../../../public/ariukaa.png"),
    },
    {
        first_name: "Otgontsetseg",
        last_name: "Ganbold",
        role: "Analyst",
        image: require("../../../public/otgo.png"),
    },
    {
        first_name: "Adiyabazar",
        last_name: "Ayushjav",
        role: "Consultant",
        image: require("../../../public/Adiya.png"),
    },
];

export default function HomePage() {
    const [screenHeight, setscreenHeight] = useState(0);
    console.log("screenHeight :>> ", screenHeight);
    useEffect(() => {
        const handleResize = () => {
            setscreenHeight(window.innerHeight);
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // Initial screen width

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const useStyles = makeStyles((theme) => ({
        root: {
            "& label.Mui-focused": {
                color: "#FFFFFF",
            },
            "& .MuiInput-underline:after": {
                borderBottomColor: "yellow",
            },
            "& .MuiOutlinedInput-root": {
                "& fieldset": {
                    borderColor: "#4FCF00",
                },
                "&:hover fieldset": {
                    borderColor: "#4FCF00",
                },
                "&.Mui-focused fieldset": {
                    borderColor: "#4FCF00",
                },
            },
        },
        input: {
            color: "white",
        },
    }));

    const classes = useStyles();

    const imageHeight = screenHeight;

    return (
        <>
            <Swiper
                direction={"vertical"}
                slidesPerView={1}
                spaceBetween={30}
                mousewheel={true}
                speed={1300}
                pagination={{
                    clickable: true,
                }}
                scrollbar={{ draggable: true }}
                modules={[Mousewheel, Pagination]}
                className="mySwiper"
                touchEventsTarget="container"
                touchReleaseOnEdges={true}
            >
                <SwiperSlide>
                    <Grid sx={{ padding: 0, height: "100%" }} container>
                        <Grid
                            xs={12}
                            sx={{
                                display: "flex",
                                p: "5vw",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                justifyContent: "flex-end",
                            }}
                            sm={12}
                            md={4.8}
                        >
                            <Typography
                                lineHeight={0.9}
                                mt={10}
                                sx={styles.responsiveText}
                                fontFamily={myFont.style.fontFamily}
                                color="#4FCF00"
                            >
                                Gateway
                            </Typography>
                            <Typography
                                lineHeight={0.9}
                                sx={styles.responsiveText}
                                fontFamily={myFont.style.fontFamily}
                                color="white"
                            >
                                to the
                            </Typography>
                            <Typography
                                lineHeight={0.9}
                                sx={styles.responsiveText}
                                fontFamily={myFont.style.fontFamily}
                                color="white"
                            >
                                steppe.
                            </Typography>
                            <Typography
                                fontFamily={thinFont.style.fontFamily}
                                width="80%"
                                fontWeight="10"
                                color="#ffffff"
                                align="justify"
                                mt={5}
                                fontSize={24}
                            >
                                By identifying strengths and defining existing
                                weakness, we{" "}
                                <span style={{ color: "#4FCF00" }}>
                                    empower
                                </span>{" "}
                                your organization.
                            </Typography>
                            <Button
                                variant="outlined"
                                sx={{
                                    borderWidth: 4,
                                    borderColor: "#4FCF00",
                                    borderRadius: "50px",
                                    color: "white",
                                    fontFamily: thinFont.style.fontFamily,
                                    textTransform: "lowercase",
                                    px: "30px",
                                    mt: "30px",
                                    mb: 0,
                                }}
                            >
                                learn more
                            </Button>
                        </Grid>
                        <Grid
                            xs={12}
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "flex-end",
                                alignItems: "flex-end",
                            }}
                            sm={12}
                            md={7.2}
                        >
                            <Image
                                src={Nature}
                                alt="nature"
                                width={imageHeight * 1.084}
                                quality={100}
                                height={imageHeight}
                            />
                        </Grid>
                    </Grid>
                </SwiperSlide>
                <SwiperSlide>
                    <Box
                        sx={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                        }}
                    >
                        <Typography
                            pl="5vw"
                            pt={15}
                            fontFamily={Font.style.fontFamily}
                            fontSize={28}
                            color="#4FCF00"
                        >
                            Services
                        </Typography>
                        <Grid pt={5} container>
                            {services.map((item, index) => (
                                <Grid
                                    xs={12}
                                    xl={2.4}
                                    lg={3}
                                    md={4}
                                    sm={6}
                                    display="flex"
                                    alignItems="flex-start"
                                    flexDirection="column"
                                    pl="5vw"
                                    pt="2px"
                                    key={item.text}
                                >
                                    <div
                                        style={{
                                            width: 220,
                                            height: 304,
                                            marginTop: 30,
                                            backgroundRepeat: "no-repeat",
                                            backgroundImage: `url(${item.image.src})`,
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: 225,
                                                // marginLeft: "5px",
                                                marginBottom: "2px",
                                                height: 304,
                                                display: "flex",
                                                justifyContent: "flex-end",
                                                alignItems: "flex-end",
                                                borderRadius: 36,
                                                background:
                                                    "linear-gradient(0deg,  rgba(79,207,0, 0.24), rgba(79,207,0, 0.01))",
                                            }}
                                        >
                                            <Typography
                                                fontSize={20}
                                                textAlign="end"
                                                width="80%"
                                                p={2}
                                                fontFamily={
                                                    myFont.style.fontFamily
                                                }
                                                color={"white"}
                                            >
                                                {item.text}
                                            </Typography>
                                        </div>
                                    </div>
                                    <Button
                                        variant="outlined"
                                        sx={{
                                            borderWidth: 4,
                                            borderColor: "#4FCF00",
                                            borderRadius: "50px",
                                            color: "white",
                                            fontFamily:
                                                thinFont.style.fontFamily,
                                            textTransform: "lowercase",
                                            px: "30px",
                                            mt: "30px",
                                        }}
                                    >
                                        read more
                                    </Button>
                                </Grid>
                            ))}
                        </Grid>
                        <Typography
                            pl="5vw"
                            pt={15}
                            fontFamily={Font.style.fontFamily}
                            fontSize={28}
                            color="#4FCF00"
                        >
                            Collaborators
                        </Typography>
                        <div className="logo-container">
                            {colabs.map((image, index) => (
                                <div
                                    key={index}
                                    className="relative"
                                    style={{ width: 230, height: 40 }}
                                >
                                    <Image
                                        alt="colab"
                                        layout={"fill"}
                                        objectFit={"contain"}
                                        quality={100}
                                        src={image}
                                    />
                                </div>
                            ))}
                        </div>
                    </Box>
                </SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
        </>
    );

    // return (
    //     <div>
    //         <Grid sx={{ padding: 0 }} container>
    //             <Grid xs={12} sm={12} md={4.8}>
    //                 <Box
    //                     sx={{
    //                         justifyContent: "flex-end",
    //                         flexGrow: 1,
    //                         height: "100%",
    //                         display: "flex",
    //                         flexDirection: "column",
    //                         zIndex: 10,
    //                         // position: "relative",
    //                         // display: "flex",
    //                         // flexDirection: "column",
    //                         alignItems: "flex-start",
    //                         // height: imageHeight * 0.921,
    //                     }}
    //                     pt="10vh"
    //                     pl="8vw"
    //                 >
    //                     <Typography
    //                         lineHeight={0.9}
    //                         sx={styles.responsiveText}
    //                         fontFamily={myFont.style.fontFamily}
    //                         color="#4FCF00"
    //                     >
    //                         Gateway
    //                     </Typography>
    //                     <Typography
    //                         lineHeight={0.9}
    //                         sx={styles.responsiveText}
    //                         fontFamily={myFont.style.fontFamily}
    //                         color="white"
    //                     >
    //                         to the
    //                     </Typography>
    //                     <Typography
    //                         lineHeight={0.9}
    //                         sx={styles.responsiveText}
    //                         fontFamily={myFont.style.fontFamily}
    //                         color="white"
    //                     >
    //                         steppe.
    //                     </Typography>
    //                     <Typography
    //                         mt={10}
    //                         fontFamily={thinFont.style.fontFamily}
    //                         width="80%"
    //                         fontWeight="10"
    //                         color="#ffffff"
    //                         align="justify"
    //                         fontSize={28}
    //                     >
    //                         By identifying strengths and defining existing
    //                         weakness, we{" "}
    //                         <span style={{ color: "#4FCF00" }}>empower</span>{" "}
    //                         your organization.
    //                     </Typography>
    //                     <Button
    //                         variant="outlined"
    //                         sx={{
    //                             borderWidth: 4,
    //                             borderColor: "#4FCF00",
    //                             borderRadius: "50px",
    //                             color: "white",
    //                             fontFamily: thinFont.style.fontFamily,
    //                             textTransform: "lowercase",
    //                             px: "30px",
    //                             mt: "30px",
    //                             mb: "10px",
    //                         }}
    //                     >
    //                         learn more
    //                     </Button>
    //                 </Box>
    //             </Grid>
    //             <Grid xs={12} sm={12} md={7.2}>
    //                 <Image
    //                     src={Nature}
    //                     alt="nature"
    //                     width={imageHeight}
    //                     quality={100}
    //                     height={imageHeight * 0.921}
    //                 />
    //             </Grid>
    //         </Grid>
    //         <Typography
    //             pl="8vw"
    //             pt={10}
    //             fontFamily={Font.style.fontFamily}
    //             fontSize={28}
    //             color="#4FCF00"
    //         >
    //             Services
    //         </Typography>
    //         <Grid
    //             // justifyContent="space-between"
    //             // direction="row"
    //             px="8vw"
    //             pt={5}
    //             container
    //         >
    //             {services.map((item, index) => (
    //                 <Grid
    //                     xs={12}
    //                     xl={2.4}
    //                     lg={3}
    //                     md={4}
    //                     sm={6}
    //                     display="flex"
    //                     alignItems="flex-end"
    //                     flexDirection="column"
    //                     pt="2px"
    //                     key={item.text}
    //                 >
    //                     <div
    //                         style={{
    //                             width: 220,
    //                             height: 304,
    //                             marginTop: 30,
    //                             backgroundRepeat: "no-repeat",
    //                             backgroundImage: `url(${item.image.src})`,
    //                         }}
    //                     >
    //                         <div
    //                             style={{
    //                                 width: 225,
    //                                 // marginLeft: "5px",
    //                                 marginBottom: "2px",
    //                                 height: 304,
    //                                 display: "flex",
    //                                 justifyContent: "flex-end",
    //                                 alignItems: "flex-end",
    //                                 borderRadius: 36,
    //                                 background:
    //                                     "linear-gradient(0deg,  rgba(79,207,0, 0.24), rgba(79,207,0, 0.01))",
    //                             }}
    //                         >
    //                             <Typography
    //                                 fontSize={20}
    //                                 textAlign="end"
    //                                 width="80%"
    //                                 p={2}
    //                                 fontFamily={myFont.style.fontFamily}
    //                                 color={"white"}
    //                             >
    //                                 {item.text}
    //                             </Typography>
    //                         </div>
    //                     </div>
    //                     <Button
    //                         variant="outlined"
    //                         sx={{
    //                             borderWidth: 4,
    //                             borderColor: "#4FCF00",
    //                             borderRadius: "50px",
    //                             color: "white",
    //                             fontFamily: thinFont.style.fontFamily,
    //                             textTransform: "lowercase",
    //                             px: "30px",
    //                             mt: "30px",
    //                         }}
    //                     >
    //                         read more
    //                     </Button>
    //                 </Grid>
    //             ))}
    //         </Grid>
    //         <Typography
    //             pl="8vw"
    //             pt={10}
    //             fontFamily={Font.style.fontFamily}
    //             fontSize={28}
    //             color="#4FCF00"
    //         >
    //             Collaborators
    //         </Typography>
    //         <Grid container pl={10} mt={10}>
    //             {colabs.map((image, index) => (
    //                 <Grid xs={1.33} display="flex" key={index}>
    //                     <div
    //                         className="relative"
    //                         style={{ width: 130, height: 40 }}
    //                     >
    //                         <Image
    //                             alt="colab"
    //                             layout={"fill"}
    //                             objectFit={"contain"}
    //                             quality={100}
    //                             src={image}
    //                         />
    //                     </div>
    //                 </Grid>
    //             ))}
    //         </Grid>
    //         <div
    //             className="mt-10"
    //             style={{ background: "white", paddingBottom: "100px" }}
    //         >
    //             <Typography
    //                 pl="8vw"
    //                 pt={10}
    //                 fontFamily={Font.style.fontFamily}
    //                 fontSize={28}
    //                 color="#4FCF00"
    //             >
    //                 Team
    //             </Typography>
    //             <Grid pl="5vw" container>
    //                 <Grid container xs={12} sm={12} md={9}>
    //                     {team.map((item) => (
    //                         <Grid
    //                             xs={8}
    //                             sm={4}
    //                             md={3.3}
    //                             lg={2.5}
    //                             my={10}
    //                             xl={2.5}
    //                             mt={5}
    //                             key={item.first_name}
    //                         >
    //                             <div
    //                                 style={{
    //                                     // width: 217,
    //                                     // height: 223,
    //                                     display: "flex",
    //                                     alignItems: "center",
    //                                     flexDirection: "column",
    //                                     // backgroundRepeat: "no-repeat",
    //                                     // backgroundPosition: "center",
    //                                     // backgroundImage: `url(${border.src})`,
    //                                     // backgroundColor: "skyblue",
    //                                 }}
    //                             >
    //                                 <Image
    //                                     src={item.image}
    //                                     width={217}
    //                                     height={223}
    //                                     quality={100}
    //                                     alt="aa"
    //                                 />
    //                                 <Typography
    //                                     fontFamily={myFont.style.fontFamily}
    //                                     fontSize={16}
    //                                     color="#000000"
    //                                 >
    //                                     {item.first_name}{" "}
    //                                     <span
    //                                         style={{
    //                                             fontFamily:
    //                                                 thinFont.style.fontFamily,
    //                                         }}
    //                                     >
    //                                         {item.last_name}
    //                                     </span>
    //                                 </Typography>
    //                                 <Typography
    //                                     fontFamily={myFont.style.fontFamily}
    //                                     color="#504F4F"
    //                                 >
    //                                     {item.role}
    //                                 </Typography>
    //                             </div>
    //                         </Grid>
    //                     ))}
    //                 </Grid>
    //                 <Grid
    //                     sx={{
    //                         // backgroundColor: "skyblue",
    //                         display: "flex",
    //                         flex: 1,
    //                         flexGrow: 1,
    //                     }}
    //                     xs={12}
    //                     sm={12}
    //                     md={3}
    //                 >
    //                     <Image
    //                         src={require("../../../public/talent.png")}
    //                         alt="talent"
    //                         width={213}
    //                         height={784}
    //                     />
    //                 </Grid>
    //             </Grid>
    //         </div>
    //         <div
    //             style={{
    //                 width: "100vw",
    //                 height: "100vh",
    //                 backgroundSize: "cover",
    //                 display: "flex",
    //                 paddingLeft: "8vw",
    //                 paddingBottom: "6vh",
    //                 flexDirection: "column",
    //                 justifyContent: "flex-end",
    //                 backgroundRepeat: "no-repeat",
    //                 backgroundPosition: "center",
    //                 backgroundImage: `url(${withUs.src})`,
    //             }}
    //         >
    //             <Typography
    //                 sx={styles.responsiveText2}
    //                 fontFamily={myFont.style.fontFamily}
    //                 color="white"
    //                 lineHeight={1}
    //             >
    //                 Enable your <br />
    //                 <span style={{ color: "#4FCF00" }}>success</span> <br />
    //                 with us!
    //             </Typography>
    //             <Typography
    //                 fontSize={20}
    //                 fontFamily={myFont.style.fontFamily}
    //                 color="white"
    //             >
    //                 Need consulting? Reach out to us.
    //             </Typography>
    //         </div>
    //         <Grid container>
    //             <Grid container pt={10} pl="8vw" xl={7} xs={12}>
    //                 <Grid mt={5} container xs={12}>
    //                     <Grid container xs={3}>
    //                         <TextField
    //                             className={classes.root}
    //                             inputProps={{
    //                                 sx: {
    //                                     color: "white",
    //                                 },
    //                             }}
    //                             InputLabelProps={{
    //                                 sx: {
    //                                     color: "#A39C9C",
    //                                 },
    //                             }}
    //                             label="First name*"
    //                         />
    //                     </Grid>
    //                     <Grid xs={3}>
    //                         <TextField
    //                             className={classes.root}
    //                             inputProps={{
    //                                 sx: {
    //                                     color: "white",
    //                                 },
    //                             }}
    //                             InputLabelProps={{
    //                                 sx: {
    //                                     color: "#A39C9C",
    //                                 },
    //                             }}
    //                             id="outlined-basic"
    //                             label="Last name*"
    //                             variant="outlined"
    //                         />
    //                     </Grid>
    //                     <Grid xs={3}>
    //                         <TextField
    //                             id="outlined-basic"
    //                             label="Your email*"
    //                             variant="outlined"
    //                             className={classes.root}
    //                             inputProps={{
    //                                 sx: {
    //                                     color: "white",
    //                                 },
    //                             }}
    //                             InputLabelProps={{
    //                                 sx: {
    //                                     color: "#A39C9C",
    //                                 },
    //                             }}
    //                         />
    //                     </Grid>
    //                     <Grid xs={3}>
    //                         <TextField
    //                             id="outlined-basic"
    //                             label="Your phone number*"
    //                             variant="outlined"
    //                             className={classes.root}
    //                             inputProps={{
    //                                 sx: {
    //                                     color: "white",
    //                                 },
    //                             }}
    //                             InputLabelProps={{
    //                                 sx: {
    //                                     color: "#A39C9C",
    //                                 },
    //                             }}
    //                         />
    //                     </Grid>
    //                 </Grid>
    //                 <Grid mt={5} xs={12}>
    //                     <TextField
    //                         fullWidth
    //                         id="outlined-basic"
    //                         label="Subject*"
    //                         variant="outlined"
    //                         className={classes.root}
    //                         inputProps={{
    //                             sx: {
    //                                 color: "white",
    //                             },
    //                         }}
    //                         InputLabelProps={{
    //                             sx: {
    //                                 color: "#A39C9C",
    //                             },
    //                         }}
    //                     />
    //                 </Grid>
    //                 <Grid mt={5} xs={12}>
    //                     <TextField
    //                         multiline
    //                         maxRows={6}
    //                         minRows={4}
    //                         fullWidth
    //                         id="outlined-basic"
    //                         label="Message*"
    //                         variant="outlined"
    //                         className={classes.root}
    //                         inputProps={{
    //                             sx: {
    //                                 color: "white",
    //                             },
    //                         }}
    //                         InputLabelProps={{
    //                             sx: {
    //                                 color: "#A39C9C",
    //                             },
    //                         }}
    //                     />
    //                 </Grid>
    //                 <Grid>
    //                     <Button
    //                         sx={{
    //                             borderWidth: 1,
    //                             borderColor: "#4FCF00",
    //                             borderRadius: "10px",
    //                             color: "white",
    //                             fontFamily: thinFont.style.fontFamily,
    //                             textTransform: "lowercase",
    //                             px: "30px",
    //                             mt: "30px",
    //                             mb: 0,
    //                         }}
    //                         variant="outlined"
    //                     >
    //                         Submit
    //                     </Button>
    //                     <Typography
    //                         fontSize={14}
    //                         color="white"
    //                         my={5}
    //                         mt={4}
    //                         fontFamily={thinFont.style.fontFamily}
    //                     >
    //                         *Required field
    //                     </Typography>
    //                 </Grid>
    //             </Grid>
    //             <Grid xs={0} lg={5} xl={5}></Grid>
    //         </Grid>
    //         <Footer />
    //     </div>
    // );
}
