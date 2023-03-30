import React, { useState } from "react";
import {
  useAnimatedLetters,
  AnimatedLetters,
} from "../../animation/AnimatedLetter";
import "./about.css";
import "../body.css";
function AboutMe() {
  const { letterClass, isHovering, handleMouseEnter, handleMouseLeave } =
    useAnimatedLetters();
  const aboutUs = ["A", "b", "o", "u", "t", " ", "U", "s"];

  return (
    <div id="about" className="max-w-7xl h-full mx-auto py-20 px-8 relative">
      <div data-aos="fade-right" className="mb-10">
        <h1 className="font-semibold text-4xl text-white opacity-90 relative inline-block">
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
          <div data-aos="fade-left">
            <p className="relative">
              Hi, I'm [Your Name], a [Your Profession] with a passion for [Your
              Mission or Purpose]. Although I'm new to this field, I'm excited
              to learn and grow in order to achieve [What You Aim to Achieve].
            </p>
          </div>
          <div data-aos="fade-left">
            <p className="relative">
              I have gained some experience working on [Name of
              Project/Projects], where I was able to [Your
              Accomplishments/Contributions]. I'm eager to continue expanding my
              skills in [Your Skills] and to take on new challenges.
            </p>
          </div>
          <div data-aos="fade-left">
            <p className="relative">
              When I'm not working, I enjoy [Your Hobbies or Interests]. Thanks
              for visiting my website. I'm eager to connect with you and to
              explore how I can contribute to your project or organization.
            </p>
          </div>
        </div>

        <div
          data-aos="fade-right"
          className="max-w-xs flex justify-center rounded-xl bg-blue-600 bg-opacity-70 overflow-hidden"
        >
          <img
            className="brightness-110 contrast-125 object-cover object-center w-full h-full"
            src="https://media.discordapp.net/attachments/1045233952148947046/1084737602701250590/IMG_20230313_151939.png?width=436&height=413"
            alt="me"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
