import type {Metadata} from "next";
import {Jost} from "next/font/google";
import "./globals.css";

const jost = Jost({
    variable: "--font-jost",
    subsets: ["latin"],
})

export const metadata: Metadata = {
    title: "eStore - Next.js E-commerce Starter",
    description: "developed by Loonar Labs",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${jost.variable} ${jost.variable} antialiased`}
        >
        {children}
        </body>
        </html>
    );
}
