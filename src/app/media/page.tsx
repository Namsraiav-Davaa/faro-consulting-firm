"use client";

import { Box, Typography } from "@mui/material";
import React from "react";
import localFont from "next/font/local";

const myFont = localFont({ src: "../../styles/fonts/SharpSansBold.otf" });
export default function MediaPage() {
    return (
        <Box
            display="flex"
            alignItems="center"
            height="100vh"
            justifyContent="center"
        >
            <Typography
                fontSize={66}
                color={"#ffffff"}
                fontFamily={myFont.style.fontFamily}
                textAlign="center"
            >
                Coming <span style={{ color: "#4FCF00" }}>soon</span>
            </Typography>
        </Box>
    );
}
