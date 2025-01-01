import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";
import {
  SiGit,
  SiGithub,
  SiPostgresql,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiDjango,
  SiArchlinux,
  SiPython,
  SiShadcnui,
  SiHtml5,
  SiCss3,
  SiNginx,
  SiGunicorn,
  SiRedis,
  SiDocker,
  SiFigma,
  SiFastapi,
  SiJquery,
  SiTailwindcss,
} from "react-icons/si";
import AnimatedTools from "../animations/AnimatedTools";
import IconCloud from "@/components/ui/icon-cloud";

const Tools = () => {
  const iconSlugs = [
    "archlinux",
    "typescript",
    "gunicorn",
    "fastapi",
    "tailwindcss",
    "jquery",
    "python",
    "django",
    "redis",
    "shadcnui",
    "javascript",
    "react",
    "html5",
    "css3",
    "nodedotjs",
    "nextdotjs",
    "prisma",
    "postgresql",
    "nginx",
    "docker",
    "git",
    "github",
    "visualstudiocode",
    "figma",
  ];

  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
      id="tools"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <AnimatedTitle
          text={"TOOLS & TECHNOLOGIES WE USE "}
          className={
            "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />

        <div className="mx-auto w-[100%] lg:max-w-[1200px] justify-center flex flex-col lg:flex-row">
          {/* Left side - Tools Lists */}
          <div className="lg:w-1/2">
            <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16">
              <AnimatedBody delay={0.2} text="Frontend" />
              <div>
                <AnimatedTools
                  className="grid grid-cols-5 gap-4"
                  delay={0.2}
                  stepSize={0.1}
                  iconSize={50}
                >
                  <SiNextdotjs size={50} />
                  <SiJavascript size={50} />
                  <SiTypescript size={50} />
                  <SiTailwindcss size={50} />
                  <SiReact size={50} />
                  <SiHtml5 size={50} />
                  <SiCss3 size={50} />
                  <SiJquery size={50} />
                  <SiDjango size={50} />
                </AnimatedTools>
              </div>
            </div>
            <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16">
              <AnimatedBody delay={0.3} text="Backend" />
              <div>
                <AnimatedTools
                  className="grid grid-cols-5 gap-4"
                  delay={0.3}
                  stepSize={0.1}
                  iconSize={50}
                >
                  <SiDjango size={50} />
                  <SiPython size={50} />
                  <SiNextdotjs size={50} />
                  <SiNginx size={50} />
                  <SiGunicorn size={50} />
                  <SiRedis size={50} />
                  <SiPostgresql size={50} />
                  <SiFastapi size={50} />
                </AnimatedTools>
              </div>
            </div>
            <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16">
              <AnimatedBody delay={0.4} text="Other" />
              <div>
                <AnimatedTools
                  className="grid grid-cols-5 gap-4"
                  delay={0.4}
                  stepSize={0.1}
                  iconSize={50}
                >
                  <SiArchlinux size={50} />
                  <SiDocker size={50} />
                  <SiShadcnui size={50} />
                  <SiGithub size={50} />
                  <SiGit size={50} />
                  <SiFigma size={50} />
                </AnimatedTools>
              </div>
            </div>
          </div>

          {/* Right side - Interactive Icon Cloud */}
          <div className="lg:w-1/2 h-[600px] mt-10 pt-10 gap-16 lg:mt-0">
            <IconCloud iconSlugs={iconSlugs} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
