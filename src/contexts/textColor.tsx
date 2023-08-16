"use client";
import { createContext, useState } from "react";

export const ColorContext = createContext(null);

export function ColorContextProvider({ children }: { children: any }) {
    const [color, setColor] = useState("white");

    return (
        <ColorContext.Provider value={{ color, setColor }}>
            {children}
        </ColorContext.Provider>
    );
}
