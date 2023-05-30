import React from "react";
import {
  useAnimatedLetters,
  AnimatedLetters,
} from "../../animation/AnimatedLetter";
import MessageForm from "./messageForm";
import "animate.css";
import "../body.css";
import "./contact.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import { MdLocationOn } from "react-icons/md";

function Contact() {
  const { letterClass, isHovering, handleMouseEnter, handleMouseLeave } =
    useAnimatedLetters();
  const contact = ["C", "O", "N", "T", "A", "C", "T", " ", "M", "E"];
  return (
    <div
      id="contact"
      className="max-w-7xl mx-auto py-20 px-8 h-full relative
    "
    >
      <div data-aos="fade-right" className="mb-10">
        <h1 className="font-semibold text-3xl text-white opacity-90 relative inline-block">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={contact}
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
          //Get In Touch 👋📄💼
        </h3>
        <div className="flex flex-row gap-3 max-sm:gap-y-10 justify-evenly max-sm:flex-col">
          <div className="text-white opacity-90 font-light text-sm">
            <div data-aos="zoom-in" className="flex flex-row gap-2 items-center shadow-md shadow-[#06092e41] duration-500 p-2 rounded-md">
              <p
                className="text-sm duration-300 
                  rounded-full bg-gray-700 bg-opacity-50 p-5"
              >
                <BsFillTelephoneFill size={20} />
              </p>
              <span>+639152667298</span>
            </div>
            <div data-aos="zoom-in" className="flex flex-row gap-2 items-center shadow-md shadow-[#06092e41] duration-500 p-2 rounded-md">
              <p
                className="text-sm duration-300 
                  rounded-full bg-gray-700 bg-opacity-50 p-5"
              >
                <CgMail size={20} />
              </p>
              <span>rovicdelrosario01@gmail.com</span>
            </div>
            <div data-aos="zoom-in" className="flex flex-row gap-2 items-center shadow-md shadow-[#06092e41] duration-500 p-2 rounded-md">
              <p
                className="text-sm duration-300 
                  rounded-full bg-gray-700 bg-opacity-50 p-5"
              >
                <MdLocationOn size={20} />
              </p>
              <span>Nueva Ecija, Philippines</span>
            </div>
          </div>
          <span
            className="block relative w-0.5 max-sm:w-full max-sm:h-0.5
          after:h-full after:w-full after:absolute after:bg-white after:opacity-90 after:top-0 
          "
          ></span>
          <MessageForm />
        </div>
      </div>
    </div>
  );
}

export default Contact;
