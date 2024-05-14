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
              Hi, I'm <span className="text-blue-500">Rovic</span>, a <span>Web Developer</span> with a
              passion for creating fully functional websites. Although I'm new
              to this field, I'm excited to learn and grow in order to achieve
              my goals.
            </p>
          </div>
          <div data-aos="fade-right">
            <p className="relative">
              My long-term goal
              is to become a full-stack web developer and contribute to the
              creation of innovative and user-friendly websites. In the short
              term, I aim to gain more experience by working on challenging
              projects and collaborating with other developers. I believe that
              continuous learning and improvement are key to becoming a
              successful web developer.
            </p>
          </div>
          <div data-aos="fade-right">
            <p className="relative">
              I have gained some experience working on projects while I was
              studying, which you can see <Link to="projects" className="text-blue-500 underline">here</Link>. Through
              these projects, I was able to learn more about web development.
              I'm eager to continue expanding my skills in programming and take
              on new challenges.
            </p>
          </div>
          <div data-aos="fade-right">
            <p className="relative">
              Thanks for visiting my website. I'm eager to connect with you and
              explore how I can contribute to your organization.
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
