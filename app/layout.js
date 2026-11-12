import { Gloock, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import { siteUrl } from "../lib/content";
import "./globals.css";

// Three fonts, three jobs:
// Gloock: a sharp, high-contrast serif for big headings (the "logo" voice).
// IBM Plex Sans: plain, easy text.
// IBM Plex Mono: small labels and measurements, like notes on a design sheet.
const display = Gloock({ subsets: ["latin"], weight: "400", variable: "--font-display" });
const sans = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "600"], variable: "--font-sans" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono" });

const title = "Danish Munawar · Full Stack Developer with a Design Background · Espoo, Finland";
const description =
  "Full stack developer with a design background in Espoo, Finland, looking for a permanent role. I build web apps with React, Next.js and TypeScript, plus websites, Shopify stores and WordPress sites.";

// Everything Google and social sites (LinkedIn, WhatsApp, Slack) read about the page.
export const metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/" }, // tells Google which address is the "real" one
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Danish Munawar",
    title,
    description,
    locale: "en_US",
  },
  twitter: { card: "summary_large_image", title, description },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
