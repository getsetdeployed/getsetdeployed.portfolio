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
      icon: <IconHome className="text-white" strokeWidth={1.5} size={40} />,
    },
    {
      title: "ABOUT",
      href: "#about",
      icon: <IconUser className="text-white" strokeWidth={1.5} size={40} />,
    },
    {
      title: "WORK",
      href: "#work",
      icon: (
        <IconBriefcase className="text-white" strokeWidth={1.5} size={40} />
      ),
    },
    {
      title: "CONTACT",
      href: "#contact",
      icon: <IconMail className="text-white" strokeWidth={1.5} size={40} />,
    },
  ];

  return (
    <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 w-auto min-w-[400px] max-w-[500px]">
      <FloatingDock items={navItems} />
    </nav>
  );
};

export default NavBar;
