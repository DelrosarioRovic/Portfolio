import { color } from "framer-motion";
import React, { useState } from "react";

import { BsArrowUpCircleFill } from "react-icons/bs";

function ProjectAnimate({
  id,
  projectColor,
  projectUrl,
  projectImg,
  projectTitle,
  projectDcrp,
  projectLang,
}) {
  const [ifHoverProject, setIfHoverProject] = useState(false);

  const isHover = () => setIfHoverProject(!ifHoverProject);

  return (
    <div
      data-aos="zoom-in"
      className="shadow-md shadow-[#06092e41] duration-500 p-2 rounded-md"
      onMouseEnter={isHover}
      onMouseLeave={isHover}
    >
      <a href={projectUrl} className="flex flex-col gap-10">
        <div
          className={`relative z-10 before:absolute before:inset-0 ${projectColor}
        before:w-full before:h-4/5 before:rounded-md before:m-auto before:-z-10 before:duration-300
        ${ifHoverProject && "before:scale-90"} `}
        >
          <img src={projectImg} alt="Graphiscore" />
        </div>
        <div className="flex flex-col">
          <h2 className="text-2xl">{projectTitle}</h2>
          <p className="text-sm opacity-70">
            {projectDcrp.substring(0, 100)}
            {projectDcrp.length > 100 ? "..." : ""}
          </p>
        </div>
        <div className="flex flex-row gap-4 justify-between">
          <ul className="flex flex-row flex-wrap gap-x-2 gap-y-1">
            {projectLang.map((language, index) => {
              return (
                <li
                  className={`text-sm duration-300 
                  rounded-2xl bg-gray-700 bg-opacity-50 py-1 px-2
                  ${ifHoverProject && "!bg-blue-500"}`}
                  key={index}
                >
                  {language}
                </li>
              );
            })}
          </ul>
          <p>
            <BsArrowUpCircleFill
              size={30}
              style={{ color: ifHoverProject ? "#3B82F6" : "#fff" }}
              className={`duration-300 ${ifHoverProject ? "rotate-90" : ""}`}
            />
          </p>
        </div>
      </a>
    </div>
  );
}

export default ProjectAnimate;
