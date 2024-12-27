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
  title: "Portfolio template - Eldora UI",
  description:
    "Eldora UI is a portfolio template built with React, Typescript, Tailwind CSS, and Framer Motion. 100% open-source, and customizable.",
  generator: "Next.js",
  applicationName: "Portfolio template",
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
  colorScheme: "dark",
  twitter: {
    card: "summary_large_image",
    title: "Portfolio template - Eldora UI",
    description:
      "Portfolio template - Eldora UI is a portfolio template built with React, Typescript, Tailwind CSS, and Framer Motion. 100% open-source, and customizable.",
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
