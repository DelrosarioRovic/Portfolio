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
          //This is the TECNOLOGY I've work with 🧑‍💻
        </h3>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 text-white text-opacity-90">
          <div
            data-aos="zoom-in"
            className="shadow-md shadow-[#06092e41] hover:!scale-110 duration-500"
          >
            <img src={Html} alt="html" className="w-20 mx-auto" />
            <p>HTML</p>
          </div>
          <div
            data-aos="zoom-in"
            className="shadow-md shadow-[#06092e41] hover:!scale-110 duration-500"
          >
            <img src={Css} alt="css" className="w-20 mx-auto" />
            <p>CSS</p>
          </div>
          <div
            data-aos="zoom-in"
            className="shadow-md shadow-[#06092e41] hover:!scale-110 duration-500"
          >
            <img src={Bt} alt="css" className="w-20 mx-auto" />
            <p>BOOTSTRAP</p>
          </div>
          <div
            data-aos="zoom-in"
            className="shadow-md shadow-[#06092e41] hover:!scale-110 duration-500"
          >
            <img src={Js} alt="css" className="w-20 mx-auto" />
            <p>JAVASCRIPT</p>
          </div>
          <div
            data-aos="zoom-in"
            className="shadow-md shadow-[#06092e41] hover:!scale-110 duration-500"
          >
            <img src={Tailwind} alt="html" className="w-20 mx-auto" />
            <p>TAILWIND</p>
          </div>
          <div
            data-aos="zoom-in"
            className="shadow-md shadow-[#06092e41] hover:!scale-110 duration-500"
          >
            <img src={ReactP} alt="css" className="w-20 mx-auto" />
            <p>REACT</p>
          </div>
          <div
            data-aos="zoom-in"
            className="shadow-md shadow-[#06092e41] hover:!scale-110 duration-500"
          >
            <img src={Node} alt="css" className="w-20 mx-auto" />
            <p>NODE JS</p>
          </div>
          <div
            data-aos="zoom-in"
            className="shadow-md shadow-[#06092e41] hover:!scale-110 duration-500"
          >
            <img src={Mongo} alt="html" className="w-20 mx-auto" />
            <p>MONGO DB</p>
          </div>
          <div
            data-aos="zoom-in"
            className="shadow-md shadow-[#06092e41] hover:!scale-110 duration-500"
          >
            <img src={Github} alt="css" className="w-20 mx-auto" />
            <p>GITHUB</p>
          </div>
          <div
            data-aos="zoom-in"
            className="shadow-md shadow-[#06092e41] hover:!scale-110 duration-500"
          >
            <img src={Typescript} alt="css" className="w-20 mx-auto" />
            <p>Typescript</p>
          </div>
          <div
            data-aos="zoom-in"
            className="shadow-md shadow-[#06092e41] hover:!scale-110 duration-500"
          >
            <img src={Next} alt="css" className="w-20 mx-auto" />
            <p>Next.Js</p>
          </div>
          <div
            data-aos="zoom-in"
            className="shadow-md shadow-[#06092e41] hover:!scale-110 duration-500"
          >
            <img src={Redux} alt="css" className="w-20 mx-auto" />
            <p>Redux</p>
          </div>
          <div
            data-aos="zoom-in"
            className="shadow-md shadow-[#06092e41] hover:!scale-110 duration-500"
          >
            <img src={Jest} alt="css" className="w-20 mx-auto" />
            <p>Jest</p>
          </div>
          <div
            data-aos="zoom-in"
            className="shadow-md shadow-[#06092e41] hover:!scale-110 duration-500"
          >
            <img src={Remix} alt="css" className="w-20 mx-auto" />
            <p>Remix</p>
          </div>
          <div
            data-aos="zoom-in"
            className="shadow-md shadow-[#06092e41] hover:!scale-110 duration-500"
          >
            <img src={Shopify} alt="css" className="w-20 mx-auto" />
            <p>Shopify</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
