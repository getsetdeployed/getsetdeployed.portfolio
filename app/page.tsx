"use client";

import NavBar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Tools from "./sections/Tools";
import Team from "./sections/Team";
import Work from "./sections/Work";
import PreLoader from "@/components/other/PreLoader";
import Contact from "./sections/Contact";
import { useEffect, useState } from "react";
import { useEventListener } from "usehooks-ts";
import useBlobity from "@/components/blobity/useBlobity";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
    setIsMobile(window.innerWidth < 768);
  }, []); // Empty dependency array ensures this runs only once

  // Update `isMobile` on window resize
  useEventListener("resize", () => {
    setIsMobile(window.innerWidth < 768);
  });

  useBlobity({
    licenseKey: "opensource",
    focusableElementsOffsetX: 4,
    focusableElementsOffsetY: 4,
    color: "#ffffff",
    dotColor: "#ffffff",
    invert: true,
    focusableElements:
      "[data-blobity], a:not([data-no-blobity]), h4:not([data-no-blobity]), li:not([data-no-blobity]), button:not([data-no-blobity]), [data-blobity-tooltip]",
    font: "'Inter', sans-serif",
    fontSize: 16,
    fontWeight: 900,
    opacity: 1.0,
    fontColor: "#ffffff",
    zIndex: 35,
    size: 50,
    radius: 5,
    magnetic: false,
  });

  return (
    <>
      <PreLoader />
      <NavBar />
      <main className="overflow-hidden bg-[#0E1016]">
        <Hero />
        <Team />
        <Tools />
        <Work />
        <Contact />
      </main>
    </>
  );
}
