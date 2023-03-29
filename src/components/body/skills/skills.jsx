import React from "react";
import {
  useAnimatedLetters,
  AnimatedLetters,
} from "../../animation/AnimatedLetter";
import "../body.css";
function Skills() {
  const { letterClass, isHovering, handleMouseEnter, handleMouseLeave } = useAnimatedLetters();
  const skills = ["S", "k", "i", "l", "l", "s"];

  return (
    <div className="section-about max-w-7xl h-full mx-auto py-20 px-8">
      <div data-aos="fade-right" className="h1-html mb-10">
        <h1 className="font-semibold text-4xl text-white opacity-90 relative inline-block">
        <AnimatedLetters
            letterClass={letterClass}
            strArray={skills}
            idx={5}
            isHovering={isHovering}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
          <div data-aos="fade-right" className="h-0.5 bg-blue-500"></div>
        </h1>        
      </div>
      <div>
        <div>

        </div>
        <div>
            
        </div>
      </div>
    </div>
  );
}

export default Skills;
