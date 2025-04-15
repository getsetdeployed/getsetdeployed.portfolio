"use client";
import React from "react";
import {
  IconHome,
  IconUser,
  IconBriefcase,
  IconMail,
} from "@tabler/icons-react";
import FloatingDock from "@/components/ui/floating-dock";

const NavBar = () => {
  const navItems = [
    {
      title: "HOME",
      href: "#home",
      icon: <IconHome strokeWidth={1.5} size={32} />,
    },
    {
      title: "ABOUT",
      href: "#about",
      icon: <IconUser strokeWidth={1.5} size={32} />,
    },
    {
      title: "WORK",
      href: "#work",
      icon: <IconBriefcase strokeWidth={1.5} size={32} />,
    },
    {
      title: "CONTACT",
      href: "#contact",
      icon: <IconMail strokeWidth={1.5} size={32} />,
    },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href.split("#")[1];
    window.scrollTo({
      top: document.getElementById(href)?.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 w-auto min-w-[400px] max-w-[500px]">
      <FloatingDock items={navItems} />
    </nav>
  );
};

export default NavBar;
