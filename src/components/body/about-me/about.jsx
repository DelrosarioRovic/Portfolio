import React, { useState } from "react";

function AboutMe() {
  return (
    <div className="max-w-7xl h-full mx-auto py-20 px-8">
      <div data-aos="fade-right" className="text-center">
        <h1 className="font-semibold text-4xl text-white opacity-90">
          About Me
        </h1>
      </div>
      <div className="flex flex-col gap-3 md:flex-row justify-between items-center max-sm:px-1">
        <div className="p-5 text-white opacity-90 md:w-4/6">
          <div data-aos="fade-right">
            <p className="mb-5">
              Hi, I'm [Your Name], a [Your Profession] with a passion for [Your
              Mission or Purpose]. Although I'm new to this field, I'm excited
              to learn and grow in order to achieve [What You Aim to Achieve].
            </p>
          </div>
          <div data-aos="fade-right">
            <p className="mb-5">
              I have gained some experience working on [Name of
              Project/Projects], where I was able to [Your
              Accomplishments/Contributions]. I'm eager to continue expanding my
              skills in [Your Skills] and to take on new challenges.
            </p>
          </div>
          <div data-aos="fade-right">
            <p className="mb-5">
              When I'm not working, I enjoy [Your Hobbies or Interests]. Thanks
              for visiting my website. I'm eager to connect with you and to
              explore how I can contribute to your project or organization.
            </p>
          </div>
        </div>

        <div
          data-aos="fade-left"
          className="w-2/5 max-md:w-3/4 flex justify-center rounded-full bg-blue-600 bg-opacity-70 overflow-hidden"
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
