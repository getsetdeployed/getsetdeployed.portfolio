import {
  SiDjango,
  SiNextdotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiWebgl,
} from "react-icons/si";
import { IconType } from "react-icons";

export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: IconType[];
  techNames: string[];
  techLinks: string[];
  demo: string;
  image: string;
  available: boolean;
};

export const projects = [
  {
    id: 0,
    name: "PaddleLift",
    description:
      "open-source animated components built with React, Typescript, Tailwind CSS, and Framer Motion. 100% open-source, and customizable.",
    technologies: [
      SiTypescript,
      SiNextdotjs,
      SiTailwindcss,
      SiDjango,
      SiPostgresql,
    ],
    techNames: [
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Django",
      "PostgreSQL",
    ],
    techLinks: [
      "https://www.typescriptlang.org/",
      "https://reactjs.org/",
      "https://nextjs.org/",
      "https://tailwindcss.com/",
      "https://www.framer.com/motion/",
    ],
    demo: "https://www.eldoraui.site/",
    image: "/projects/eldoraui.png",
    available: true,
  },
  {
    id: 1,
    name: "VR MALL",
    description: "Developed an virtual mall by using Three.js and Typescript..",
    technologies: [SiWebgl, SiTypescript, SiReact],
    techNames: ["WebGL", "Typescript", "React"],
    techLinks: [
      "https://get.webgl.org/",
      "https://www.typescriptlang.org/",
      "https://reactjs.org/",
    ],
    demo: "https://vrmalldemo.netlify.app/",
    image: "/projects/vrmall.png",
    available: true,
  },
];
