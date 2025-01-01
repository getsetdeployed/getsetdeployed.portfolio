import React from "react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import AnimatedTitle from "../animations/AnimatedTitle";

const team = [
  {
    avatar: "/profilepic/snehasish.png",
    name: "Snehasish Mandal",
    title: "Chief Experience Architect & Frontend Innovation Lead",
    desc: "A trailblazing professional based in India, specializing in digital experience design and frontend development. I create immersive, intuitive user interfaces with a holistic approach that blends functionality and aesthetic brilliance.",
    linkedin: "https://www.linkedin.com/in/snehasish-mandal-/",
    twitter: "https://x.com/bewithsnehasish",
    github: "https://github.com/bewithsnehasish",
  },
  {
    avatar: "/profilepic/mayank.png",
    name: "Mayank Gupta",
    title: "Backend Innovation Architect & Web Services Director",
    desc: "A seasoned professional specializing in backend development and Web services management. I architect robust, scalable solutions that drive business success, ensuring seamless integration and optimal performance for reliable and secure web services.",
    linkedin: "https://www.linkedin.com/in/mayankkumargupta1/",
    github: "https://github.com/mayankkumargupta1",
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
                    style={{ objectFit: "cover" }}
                    fill
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
                      target="_blank"
                    >
                      <FaTwitter className="w-5 h-5" />
                    </Link>
                    <Link
                      href={item.github}
                      className="duration-150 hover:text-gray-500"
                      target="_blank"
                    >
                      <FaGithub className="w-5 h-5" />
                    </Link>
                    <Link
                      href={item.linkedin}
                      className="duration-150 hover:text-gray-500"
                      target="_blank"
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
