import { Grid, Typography } from "@mui/material";
import localFont from "next/font/local";
import Image from "next/image";
import "./styles.css";
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

export function Page3() {
    return (
        <div className="bg">
            <Typography
                pl="8vw"
                pt={10}
                fontFamily={Font.style.fontFamily}
                fontSize={28}
                color="#4FCF00"
            >
                Team
            </Typography>
            <Grid pl="5vw" container>
                <Grid container xs={12} sm={12} md={9}>
                    {team.map((item) => (
                        <Grid
                            xs={8}
                            sm={4}
                            md={3.3}
                            lg={2.5}
                            my={10}
                            xl={2.5}
                            mt={5}
                            key={item.first_name}
                        >
                            <div
                                style={{
                                    // width: 217,
                                    // height: 223,
                                    display: "flex",
                                    alignItems: "center",
                                    flexDirection: "column",
                                    // backgroundRepeat: "no-repeat",
                                    // backgroundPosition: "center",
                                    // backgroundImage: `url(${border.src})`,
                                    // backgroundColor: "skyblue",
                                }}
                            >
                                <Image
                                    src={item.image}
                                    width={217}
                                    height={223}
                                    quality={100}
                                    alt="aa"
                                />
                                <Typography
                                    fontFamily={myFont.style.fontFamily}
                                    fontSize={16}
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
                                </Typography>
                                <Typography
                                    fontFamily={myFont.style.fontFamily}
                                    color="#504F4F"
                                >
                                    {item.role}
                                </Typography>
                            </div>
                        </Grid>
                    ))}
                </Grid>
                <Grid
                    sx={{
                        // backgroundColor: "skyblue",
                        display: "flex",
                        flex: 1,
                        flexGrow: 1,
                    }}
                    xs={12}
                    sm={12}
                    md={3}
                >
                    <Image
                        src={require("../../../public/talent.png")}
                        alt="talent"
                        width={213}
                        height={784}
                    />
                </Grid>
            </Grid>
        </div>
    );
}
