import { ResponsiveAppBar } from "component/components/navBar";
import "./globals.css";
import { Inter } from "next/font/google";
import { ColorContextProvider } from "component/contexts/textColor";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Faro Consulting Firm",
    description: "Generated by faro",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <ColorContextProvider>
                <body className={inter.className}>
                    <ResponsiveAppBar />
                    {children}
                </body>
            </ColorContextProvider>
        </html>
    );
}
