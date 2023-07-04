"use client";
import { ResponsiveAppBar } from "component/components/navBar";
import Head from "next/head";
import "../styles/fonts.css";
import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material";
import localFont from "next/font/local";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AboutPage } from "./About";
import { SerVicesPage } from "./Services";
import { MediaPage } from "./Media";
import { ContactPage } from "./Contact";
import { CareersPage } from "./Careers";
import { Footer } from "./footer";

const myFont = localFont({ src: "../styles/fonts/SharpSans.otf" });

export default function Home() {
    const theme = createTheme({
        typography: {
            fontFamily: myFont.style.fontFamily,
            fontSize: 12,
        },
    });

    return (
        <BrowserRouter>
            <div>
                <Head>
                    <link
                        href="https://fonts.cdnfonts.com/css/sharp-sans"
                        rel="stylesheet"
                    />
                </Head>
                <ThemeProvider theme={theme}>
                    <ResponsiveAppBar />
                    <Routes>
                        <Route path="/" element={<AboutPage />} />
                        <Route path="/About us" element={<AboutPage />} />
                        <Route path="/Services" element={<SerVicesPage />} />
                        <Route path="/Media" element={<MediaPage />} />
                        <Route path="/Careers" element={<CareersPage />} />
                        <Route path="/Contact" element={<ContactPage />} />
                    </Routes>
                </ThemeProvider>
            </div>
            <Footer />
        </BrowserRouter>
    );
}
