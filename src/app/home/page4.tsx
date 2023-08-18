import { Typography } from "@mui/material";
import withUs from "../../../public/withUs.png";
import localFont from "next/font/local";
import { AnimatedText } from "component/components/animatedText";

const myFont = localFont({ src: "../../styles/fonts/SharpSansBold.otf" });

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
        textAlign: "start",
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

export function Page4({ isActive }: { isActive: boolean }) {
    return (
        <div
            style={{
                width: "100vw",
                height: "100vh",
                backgroundSize: "cover",
                display: "flex",
                paddingLeft: "5vw",
                paddingBottom: "6vh",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-end",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundImage: `url(${withUs.src})`,
            }}
        >
            <AnimatedText
                sx={styles.responsiveText2}
                fontFamily={myFont.style.fontFamily}
                color="white"
                lineHeight={1}
                isActive={isActive}
            >
                Enable your <br />
                <span style={{ color: "#4FCF00" }}>success</span> <br />
                with us!
            </AnimatedText>
            <AnimatedText
                fontSize={20}
                isActive={isActive}
                fontFamily={myFont.style.fontFamily}
                color="white"
            >
                Need consulting? Reach out to us.
            </AnimatedText>
        </div>
    );
}
