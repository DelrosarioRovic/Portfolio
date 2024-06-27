import React from "react";
import {
  useAnimatedLetters,
  AnimatedLetters,
} from "../../animation/AnimatedLetter";
import "../body.css";
import Html from "../../../image/html.png";
import Css from "../../../image/css.png";
import Bt from "../../../image/bootstrap.png";
import Tailwind from "../../../image/tailwind.png";
import Js from "../../../image/javascript.png";
import ReactP from "../../../image/react.png";
import Node from "../../../image/node.png";
import Mongo from "../../../image/mongo.png";
import Github from "../../../image/github.png";
import Typescript from "../../../image/typescript.png";
import Shopify from "../../../image/shopify.png";
import Remix from "../../../image/remix.png";
import Jest from "../../../image/jest.svg";
import Redux from "../../../image/redux.png";
import Next from "../../../image/next.svg";
import ReactNative from "../../../image/react-native.png";
import figma from "../../../image/figma.png";

const technologies = [
  { image: Html, label: "HTML" },
  { image: Css, label: "CSS" },
  { image: Bt, label: "Bootstrap" },
  { image: Js, label: "JavaScript" },
  { image: Tailwind, label: "Tailwind" },
  { image: ReactP, label: "React" },
  { image: Node, label: "Node.js" },
  { image: Mongo, label: "MongoDB" },
  { image: Github, label: "GitHub" },
  { image: Typescript, label: "TypeScript" },
  { image: Next, label: "Next.js" },
  { image: Redux, label: "Redux" },
  { image: Jest, label: "Jest" },
  { image: Remix, label: "Remix" },
  { image: Shopify, label: "Shopify" },
  { image: ReactNative, label: "React-native" },
  { image: figma, label: "Figma"},
];

function Skills() {
  const { letterClass, isHovering, handleMouseEnter, handleMouseLeave } =
    useAnimatedLetters();
  const skills = ["S", "k", "i", "l", "l", "s"];

  return (
    <div
      id="skills"
      className="flex flex-col max-w-7xl h-full mx-auto py-20 px-8"
    >
      <div data-aos="fade-right" className="mb-10">
        <h1 className="font-semibold text-3xl text-white opacity-90 relative inline-block">
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
      <div className="flex flex-col gap-10">
        <h3 data-aos="fade-right" className="text-white opacity-90">
          //This is the TECHNOLOGY I've worked with 🧑‍💻
        </h3>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 text-white text-opacity-90">
          {technologies.map((tech, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              className="shadow-md shadow-[#06092e41] hover:!scale-110 duration-500"
            >
              <img src={tech.image} alt={tech.label} className="w-20 mx-auto" />
              <p>{tech.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
