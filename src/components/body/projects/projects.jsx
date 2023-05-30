import React from "react";
import {
  useAnimatedLetters,
  AnimatedLetters,
} from "../../animation/AnimatedLetter";
import "animate.css";
import ProjectAnimate from "./projectAnimate.jsx";
import projectArray from "./projectArray.js";

function Projects() {
  const { letterClass, isHovering, handleMouseEnter, handleMouseLeave } =
    useAnimatedLetters();
  const projects = ["M", "Y", " ", "P", "R", "O", "J", "E", "C", "T", "S"];

  return (
    <div id="projects" className="max-w-7xl mx-auto py-20 px-8 h-full">
      <div data-aos="fade-right" className="mb-10">
        <h1 className="font-semibold text-3xl text-white opacity-90 relative inline-block">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={projects}
            idx={5}
            isHovering={isHovering}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
          <div data-aos="fade-right" className="h-0.5 bg-blue-500"></div>
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-5 py-8 text-white text-opacity-90">
        {projectArray.map((project, index) => {
          return (
            <ProjectAnimate
              key={index}
              id={index}
              projectColor={project.projectColor}
              projectUrl={project.projectUrl}
              projectImg={project.projectImg}
              projectTitle={project.projectTitle}
              projectDcrp={project.projectDcrp}
              projectLang={project.projectLang}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
