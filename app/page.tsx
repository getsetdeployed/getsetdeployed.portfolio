"use client";

import NavBar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Tools from "./sections/Tools";
import Team from "./sections/Team";
import Work from "./sections/Work";
import PreLoader from "@/components/other/PreLoader";
import Contact from "./sections/Contact";

export default function Home() {
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
