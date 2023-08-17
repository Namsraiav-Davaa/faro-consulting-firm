import { Box, Button, Grid, Typography } from "@mui/material";
import localFont from "next/font/local";
import Image from "next/image";
import Mountain from "../../../public/nature.png";

const myFont = localFont({ src: "../../styles/fonts/SharpSansBold.otf" });
const thinFont = localFont({ src: "../../styles/fonts/SharpSansLight.otf" });

const styles = {
    responsiveText: {
        fontSize: "7rem",
        "@media (max-width: 1500px)": {
            fontSize: "6rem",
        },
        "@media (max-width: 1200px)": {
            fontSize: "5rem",
        },
        "@media (max-width: 800px)": {
            fontSize: "3rem",
        },
        "@media (max-width: 600px)": {
            fontSize: "3rem",
        },
        "@media (max-width: 400px)": {
            fontSize: "4rem",
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

export function Page1() {
    return (
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
                    By identifying strengths and defining existing weakness, we{" "}
                    <span style={{ color: "#4FCF00" }}>empower</span> your
                    organization.
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
                    overflow: "visible",
                    alignItems: "flex-end",
                }}
                sm={12}
                md={7.2}
            >
                <Image
                    className="nature-image"
                    src={Mountain}
                    alt="nature"
                    quality={100}
                />
            </Grid>
        </Grid>
    );
}
