import { Box, Button, Grid } from "@mui/material";
import Image from "next/image";
import colab1 from "../../../public/colab1.png";
import colab2 from "../../../public/colab2.png";
import colab3 from "../../../public/colab3.png";
import colab5 from "../../../public/colab4.png";
import colab4 from "../../../public/colab5.png";
import colab6 from "../../../public/colab6.png";
import colab7 from "../../../public/colab7.png";
import colab8 from "../../../public/colab8.png";
import colab9 from "../../../public/colab9.png";
import Img1 from "../../../public/service1.png";
import Img2 from "../../../public/service2.png";
import Img3 from "../../../public/service3.png";
import Img4 from "../../../public/service4.png";
import Img5 from "../../../public/service5.png";
import localFont from "next/font/local";
import { AnimatedText } from "component/components/animatedText";

const thinFont = localFont({ src: "../../styles/fonts/SharpSansLight.otf" });
const Font = localFont({ src: "../../styles/fonts/SharpSansSemibold.otf" });
const myFont = localFont({ src: "../../styles/fonts/SharpSansBold.otf" });

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

export function Page2({ isActive }: { isActive: boolean }) {

    console.log("isActive :>> ", isActive);

    return (
        <Box
            sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
            }}
        >
            <AnimatedText
                pl="5vw"
                pt={15}
                fontFamily={Font.style.fontFamily}
                fontSize={28}
                color="#4FCF00"
                isActive={isActive}
            >
                Services
            </AnimatedText>
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
                                <AnimatedText
                                    fontSize={20}
                                    textAlign="end"
                                    width="80%"
                                    p={2}
                                    fontFamily={myFont.style.fontFamily}
                                    color={"white"}
                                    isActive={isActive}
                                >
                                    {item.text}
                                </AnimatedText>
                            </div>
                        </div>
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
                            }}
                        >
                            read more
                        </Button>
                    </Grid>
                ))}
            </Grid>
            <AnimatedText
                pl="5vw"
                pt={15}
                fontFamily={Font.style.fontFamily}
                fontSize={28}
                color="#4FCF00"
                isActive={isActive}
            >
                Collaborators
            </AnimatedText>
            <div className="logos">
                <div className="logo-slide">
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
                <div className="logo-slide">
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
            </div>
        </Box>
    );
}
