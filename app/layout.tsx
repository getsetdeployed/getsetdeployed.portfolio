import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";

import { Inter } from "next/font/google";

const syne = Inter({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://getsetdeploy.com/"),
  title: "GetSetDeployed",
  description:
    "We are a group of developers that helps you in growing up your business. We are here to help you in growing up your business.",
  generator: "Next.js",
  applicationName: "GetSetDeployed",
  keywords: [
    "Portfolio Webdeveloper",
    "React",
    "developer",
    "frontend",
    "nextjs",
    "react",
    "frontend developer",
    "frontend engineer",
    "creative",
    "creative developer",
    "creative engineer",
    "tech",
    "software",
    "software developer",
    "portfolio",
    "frontend developer portfolio",
    "software developer portfolio",
    "frontend engineer portfolio",
  ],
  twitter: {
    card: "summary_large_image",
    title: "GetSetDeployed",
    description:
      "We are a group of developers that helps you in growing up your business. We are here to help you in growing up your business.",
    creator: "@bewithsnehasish",
    creatorId: "0000000000",
  },
  category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} scroll-smooth scrollbar-none scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
        {children}
      </body>
    </html>
  );
}
