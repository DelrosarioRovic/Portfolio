import React from "react";
import { Link } from "react-scroll";
import rovicImg from "../../../image/rovic.png";
import {
  useAnimatedLetters,
  AnimatedLetters,
} from "../../animation/AnimatedLetter";
import "../body.css";
function AboutMe() {
  const { letterClass, isHovering, handleMouseEnter, handleMouseLeave } =
    useAnimatedLetters();
  const aboutUs = ["A", "b", "o", "u", "t"];

  return (
    <div id="about" className="max-w-7xl h-full mx-auto py-20 px-8 relative">
      <div data-aos="fade-right" className="mb-10">
        <h1 className="font-semibold text-3xl text-white opacity-90 relative inline-block">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={aboutUs}
            idx={5}
            isHovering={isHovering}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
          <div data-aos="fade-right" className="h-0.5 bg-blue-500"></div>
        </h1>
      </div>

      <div className="flex flex-col gap-3 md:flex-row justify-between items-center">
        <div className="flex flex-col gap-5 text-white opacity-90 md:w-4/6">
          <div data-aos="fade-right">
          <p className="relative">
              Hi, I'm <span className="text-blue-500">Rovic</span>, a <span>Passionate Web Developer </span> 
              with 2 years of professional experience in front-end development and growing expertise in back-end and mobile app development.
            </p>
          </div>
          <div data-aos="fade-right">
            <p className="relative">
              Over the past two years, I’ve worked full-time as a front-end developer while also gaining strong back-end skills. I’ve contributed to various full-stack projects and recently served as the main developer for a mobile application at my current company.
            </p>
          </div>
          <div data-aos="fade-right">
            <p className="relative">
              I'm currently expanding my knowledge in mobile development, with a focus on React Native and Flutter. I'm excited by the challenge of building seamless, cross-platform experiences that users love.
            </p>
          </div>
          <div data-aos="fade-right">
            <p className="relative">
              Outside of work, I take on freelance projects as a front-end and full-stack developer to continue sharpening my skills and gain broader experience in real-world applications.
            </p>
          </div>
        </div>

        <div
          data-aos="fade-left"
          className="max-w-xs flex justify-center rounded-xl bg-blue-600 bg-opacity-70 overflow-hidden"
        >
          <img
            className="brightness-110 contrast-125 object-cover object-center w-full h-full"
            src={rovicImg}
            alt="me"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
