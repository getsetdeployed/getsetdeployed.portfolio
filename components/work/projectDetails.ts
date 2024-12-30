import {
  SiDjango,
  SiHtml5,
  SiJavascript,
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
      "Paddlelift Private Limited, established in 2020, is a premier recruitment and HR solutions provider, connecting global businesses with top talent through innovative and personalized services.",
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
      "https://nextjs.org/",
      "https://tailwindcss.com/",
      "https://www.djangoproject.com/",
      "https://www.postgresql.org/",
    ],
    demo: "https://www.eldoraui.site/",
    image: "/projects/paddlelift.png",
    available: true,
  },
  {
    id: 1,
    name: "Manavta Nursery",
    description:
      "Devloped a Marketplace for selling and buying products of Nursery.",
    technologies: [SiDjango, SiReact, SiTypescript, SiTailwindcss],
    techNames: ["Django", "React Js", "Typescript", "Tailwind CSS"],
    techLinks: [
      "https://www.djangoproject.com/",
      "https://reactjs.org/",
      "https://www.typescriptlang.org/",
      "https://tailwindcss.com/",
    ],
    demo: "https://manavtanursery.org/",
    image: "/projects/manavta.png",
    available: true,
  },
  {
    id: 2,
    name: "Emerging India",
    description:
      "It is a Website for NGO which is working for the betterment of the society.",
    technologies: [
      SiDjango,
      SiPostgresql,
      SiHtml5,
      SiTailwindcss,
      SiJavascript,
    ],
    techNames: ["Django", "PostgreSQL", "HTML", "Tailwind CSS", "JavaScript"],
    techLinks: [
      "https://www.djangoproject.com/",
      "https://www.postgresql.org/",
      "https://developer.mozilla.org/en-US/docs/Web/HTML",
      "https://tailwindcss.com/",
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    ],
    demo: "https://emergingindia.org",
    image: "/projects/emerging.png",
    available: true,
  },
];
