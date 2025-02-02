import React from "react";
import ProjectCard from "./ProjectCard";
import { projects, ProjectProps } from "./projectDetails";
import AnimatedTitle from "@/app/animations/AnimatedTitle";

const ProjectGrid = () => {
  return (
    <>
      <div className="mb-10 flex gap-16 text-[#e4ded7] md:mb-16 lg:mb-20">
        <div className="max-w-6xl text-left">
          {" "}
          {/* Ensure the container is left-aligned */}
          <AnimatedTitle
            text="CHECK OUT SOME OF OUR PROJECTS!"
            className="mb-16 text-left text-5xl font-bold tracking-tight text-[#e4ded7] sm:text-6xl lg:text-7xl"
            wordSpace="mr-[14px]"
            charSpace="mr-[0.001em]"
          />
        </div>
      </div>

      <div className="grid w-[90%] grid-cols-1 grid-rows-2 gap-y-10 gap-x-6 lg:max-w-[1200px] lg:grid-cols-1">
        {projects.map((project: ProjectProps) => (
          <ProjectCard
            id={project.id}
            key={project.id}
            name={project.name}
            description={project.description}
            technologies={project.technologies}
            techNames={project.techNames}
            techLinks={project.techLinks}
            demo={project.demo}
            image={project.image}
            available={project.available}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectGrid;
