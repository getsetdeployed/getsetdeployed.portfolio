import React from "react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import AnimatedTitle from "../animations/AnimatedTitle";

const team = [
  {
    avatar: "/profilepic/mayank.png",
    name: "Mayank Kumar Gupta",
    title: "Backend Innovation Lead & Web Services Manager",
    desc: "An experienced professional specializing in backend development and managing web services. I build strong, scalable solutions that ensure smooth performance and security for web services",
    linkedin: "https://www.linkedin.com/in/mayankkumargupta1/",
    github: "https://github.com/mayankkumargupta1",
  },
  {
    avatar: "/profilepic/snehasish.png",
    name: "Snehasish Mandal",
    title: "UI/UX Designer & Frontend Innovation Lead",
    desc: "A creative professional based in India, focusing on designing user-friendly interfaces and developing frontend solutions. I blend functionality with beautiful design to create engaging digital experiences.",
    linkedin: "https://www.linkedin.com/in/snehasish-mandal-/",
    twitter: "https://x.com/bewithsnehasish",
    github: "https://github.com/bewithsnehasish",
  },
  {
    avatar: "/profilepic/Rajat.png",
    name: "Rajat Singh Tomar",
    title: "Product Quality Lead & Client Relations Manager",
    desc: "A seasoned professional specializing in Web development, manage product quality & client relations. I ensure the delivery of high-performance, secure, and user-centric solutions while maintaining a strong focus on product excellence and customer satisfaction.",
    linkedin: "https://www.linkedin.com/in/rajat-singh-tomar-65727a185/",
    github: "https://github.com/rajat290",
  },
];

const Team = () => {
  return (
    <section id="about" className="py-14 bg-[#0E1016] text-white">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-3xl">
          <AnimatedTitle
            text={"MEET OUR TALENTED TEAM"}
            className={
              "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
            }
            wordSpace={"mr-[14px]"}
            charSpace={"mr-[0.001em]"}
          />

          <p className="text-gray-300 mt-3">
            Our team consists of skilled developers and creative designers who
            are passionate about building innovative solutions. Together, we
            deliver high-quality products that exceed expectations.
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
                    {item.twitter && (
                      <Link
                        href={item.twitter}
                        className="duration-150 hover:text-gray-500"
                        target="_blank"
                      >
                        <FaTwitter className="w-5 h-5" />
                      </Link>
                    )}
                    {item.github && (
                      <Link
                        href={item.github}
                        className="duration-150 hover:text-gray-500"
                        target="_blank"
                      >
                        <FaGithub className="w-5 h-5" />
                      </Link>
                    )}
                    {item.linkedin && (
                      <Link
                        href={item.linkedin}
                        className="duration-150 hover:text-gray-500"
                        target="_blank"
                      >
                        <FaLinkedin className="w-5 h-5" />
                      </Link>
                    )}
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
