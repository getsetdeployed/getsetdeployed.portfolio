"use client";

import NavBar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Tools from "./sections/Tools";
import Team from "./sections/Team";
import Contact from "./sections/Contact";
import Work from "./sections/Work";
import PreLoader from "@/components/other/PreLoader";

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
