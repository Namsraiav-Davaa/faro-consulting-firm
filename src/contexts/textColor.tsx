"use client";
import { createContext, useState } from "react";

type objectType = {
    color: string;
    setColor: (e: string) => void;
};

export const ColorContext = createContext<objectType>({} as objectType);

export function ColorContextProvider({ children }: { children: any }) {
    const [color, setColor] = useState("white");

    return (
        <ColorContext.Provider value={{ color, setColor }}>
            {children}
        </ColorContext.Provider>
    );
}
