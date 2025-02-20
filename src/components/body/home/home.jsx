import React from "react";
import { useAnimatedLetters, AnimatedLetters } from "../../animation/AnimatedLetter";
import TypeAnimation from "../../animation/TypeAnimation";
import ProfilePictureUpDown from "./ProfilePictureUpDown";
import "./home.css";
import "../body.css";
import "animate.css";

function Home() {
  const { letterClass, isHovering, handleMouseEnter, handleMouseLeave } = useAnimatedLetters();
  const nameArray = [" ", "R", "o", "v", "i", "c"];
  const HiArray = ["H", "i", "👋", ","];
  const IM = ["I", "'", "m"];
  const JobArr = [
    "W",
    "e",
    "b",
    " ",
    "D",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
  ];

  return (
    <div id="home" className="relative mt-[14vh] max-w-7xl h-full mx-auto flex justify-between max-md:justify-center gap-3 items-center my-5 py-20 max-md:pb-0 px-8 max-md:gap-8 max-md:flex-wrap">
        <div className="p-6 max-sm:p-3 flex flex-col items-start gap-4">
          <h1 className="font-extrabold text-5xl max-lg:text-4xl max-sm:text-4xl mb-10 leading-snug text-white opacity-90 relative">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={HiArray}
              idx={5}
              isHovering={isHovering}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={IM}
              idx={8}
              isHovering={isHovering}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={11}
              isHovering={isHovering}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={JobArr}
              idx={17}
              isHovering={isHovering}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          </h1>
          <TypeAnimation />
          <a
            href={import.meta.env.VITE_REACT_RESUME}
            className="btn-home border border-blue-500 px-3 py-2 rounded-sm text-blue-500 opacity-90
            hover:bg-blue-500 hover:text-white duration-300 active:scale-90"
          >
            Resume
          </a>
        </div>
        <ProfilePictureUpDown />
      </div>
  );
}

export default Home;
