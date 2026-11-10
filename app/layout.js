import { Gloock, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

// Three fonts, three jobs:
// Gloock: a sharp, high-contrast serif for big headings (the "logo" voice).
// IBM Plex Sans: plain, easy text.
// IBM Plex Mono: small labels and measurements, like notes on a design sheet.
const display = Gloock({ subsets: ["latin"], weight: "400", variable: "--font-display" });
const sans = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "600"], variable: "--font-sans" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono" });

export const metadata = {
  title: "Danish Munawar · Full stack developer",
  description:
    "Logo designer turned full stack developer. Small, working web apps built in Next.js and React. Espoo, Finland.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
