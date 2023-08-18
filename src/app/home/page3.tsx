import { Grid, Typography } from "@mui/material";
import localFont from "next/font/local";
import Image from "next/image";
import "./styles.css";
import { AnimatedText } from "component/components/animatedText";
import { useEffect, useState } from "react";
const Font = localFont({ src: "../../styles/fonts/SharpSansSemibold.otf" });
const myFont = localFont({ src: "../../styles/fonts/SharpSansBold.otf" });
const thinFont = localFont({ src: "../../styles/fonts/SharpSansLight.otf" });

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

export function Page3({ isActive }: { isActive: boolean }) {
    const [shouldAnimate, setShouldAnimate] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShouldAnimate(isActive === undefined ? true : isActive); // Trigger animation after the component is mounted
        }, 500);
    }, [isActive]);

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
            }}
            className="bg"
        >
            <AnimatedText
                textAlign="start"
                pl="5vw"
                pt={20}
                fontFamily={Font.style.fontFamily}
                fontSize={28}
                color="#4FCF00"
                isActive={isActive}
            >
                Team
            </AnimatedText>
            <Grid pl="5vw" container>
                <Grid container xs={12} sm={12} md={9}>
                    {team.map((item) => (
                        <Grid
                            display="flex"
                            xs={8}
                            sm={4}
                            md={3.3}
                            lg={2.5}
                            my={10}
                            xl={2.5}
                            mt={2}
                            key={item.first_name}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    flexDirection: "column",
                                }}
                            >
                                <Image
                                    src={item.image}
                                    width={217}
                                    height={223}
                                    quality={100}
                                    alt="aa"
                                />
                                <AnimatedText
                                    fontFamily={myFont.style.fontFamily}
                                    fontSize={16}
                                    isActive={isActive}
                                    color="#000000"
                                >
                                    {item.first_name}{" "}
                                    <span
                                        style={{
                                            fontFamily:
                                                thinFont.style.fontFamily,
                                        }}
                                    >
                                        {item.last_name}
                                    </span>
                                </AnimatedText>
                                <AnimatedText
                                    isActive={isActive}
                                    fontFamily={myFont.style.fontFamily}
                                    color="#504F4F"
                                >
                                    {item.role}
                                </AnimatedText>
                            </div>
                        </Grid>
                    ))}
                </Grid>
                <Grid
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                    }}
                    xs={12}
                    sm={12}
                    md={3}
                >
                    <Image
                        src={require("../../../public/talent1.png")}
                        alt="talent"
                        className={`${"talent-1"} ${
                            shouldAnimate ? "animate" : "back"
                        } talent-1`}
                        // className="talent-1"
                    />
                    <Image
                        src={require("../../../public/talent2.png")}
                        className={`${"talent-2"} ${
                            shouldAnimate ? "animate" : "back"
                        } talent-2`}
                        alt="talent"
                    />
                </Grid>
            </Grid>
        </div>
    );
}
