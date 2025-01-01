import React from "react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import AnimatedTitle from "../animations/AnimatedTitle";

const team = [
  {
    avatar: "/profilepic/snehasish.png",
    name: "Martiana dialan",
    title: "Frontend Devloper | Product designer",
    desc: "Frontend Designer & Developer with 5 years of professional experience based in London, UK. We passionatly create beautiful and functional user experiences.",
    linkedin: "javascript:void(0)",
    twitter: "javascript:void(0)",
    github: "javascript:void(0)",
  },
  {
    avatar: "",
    name: "Micheal colorand",
    title: "Software engineer",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry's standard dummy",
    linkedin: "javascript:void(0)",
    twitter: "javascript:void(0)",
    github: "javascript:void(0)",
  },
];

const Team = () => {
  return (
    <section id="about" className="py-14 bg-[#0E1016] text-white">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-3xl">
          <AnimatedTitle
            text={"MEET OUR TALENT TEAM"}
            className={
              "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
            }
            wordSpace={"mr-[14px]"}
            charSpace={"mr-[0.001em]"}
          />

          <p className="text-gray-300 mt-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy.
          </p>
        </div>
        <div className="mt-12">
          <ul className="grid gap-8 lg:grid-cols-2">
            {team.map((item, idx) => (
              <li
                key={idx}
                className="gap-8 sm:flex bg-[#1A1E27] p-6 rounded-xl shadow-md"
              >
                <div className="w-full h-60 relative">
                  <Image
                    src={item.avatar}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl"
                    alt={item.name}
                  />
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-6">
                  <h4 className="text-lg text-white font-semibold">
                    {item.name}
                  </h4>
                  <p className="text-indigo-400">{item.title}</p>
                  <p className="text-gray-300 mt-2">{item.desc}</p>
                  <div className="mt-3 flex gap-4 text-gray-400">
                    <Link
                      href={item.twitter}
                      className="duration-150 hover:text-gray-500"
                    >
                      <FaTwitter className="w-5 h-5" />
                    </Link>
                    <Link
                      href={item.github}
                      className="duration-150 hover:text-gray-500"
                    >
                      <FaGithub className="w-5 h-5" />
                    </Link>
                    <Link
                      href={item.linkedin}
                      className="duration-150 hover:text-gray-500"
                    >
                      <FaLinkedin className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Team;
