import "./globals.css";

import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import Script from "next/script";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Warp DAO – Multichain Liquidity & Governance Layer",
  description:
    "Warp DAO: Coordinate liquidity, emissions & execution across AVAX, Hedera, Flare & SGB. A unified multichain governance-directed protocol layer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/warp.png" />
        {/* og image */}
        <meta property="og:image" content="/images/warp.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Warp DAO: Coordinate liquidity, emissions & execution across AVAX, Hedera, Flare & SGB. A unified multichain governance-directed protocol layer."
        />
      </head>
      <body className={`${spaceGrotesk.variable} font-sans`}>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YJBRGN40NF"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);} 
            gtag('js', new Date());
            gtag('config', 'G-YJBRGN40NF');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
