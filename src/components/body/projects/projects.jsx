import React from "react";
import Github from "../../../image/github.png";
import {
  useAnimatedLetters,
  AnimatedLetters,
} from "../../animation/AnimatedLetter";
import "animate.css";

function Projects() {
  const { letterClass, isHovering, handleMouseEnter, handleMouseLeave } =
    useAnimatedLetters();
  const projects = ["M", "Y", " ", "P", "R", "O", "J", "E", "C", "T", "S"];

  return (
    <div
      id="projects"
      className="flex flex-col max-w-7xl h-full mx-auto py-20 px-8"
    >
      <div data-aos="fade-right" className="mb-10">
        <h1 className="font-semibold text-4xl text-white opacity-90 relative inline-block">
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
      
    </div>
  );
}

export default Projects;
