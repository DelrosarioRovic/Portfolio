import { color } from "framer-motion";
import React, { useState } from "react";

import { BsArrowUpCircleFill } from "react-icons/bs";

function ProjectAnimate({
  id,
  projectUrl,
  projectImg,
  projectTitle,
  projectDcrp,
  projectLang
}) {
  const [ifHoverProject, setIfHoverProject] = useState(false);

  const isHover = () => setIfHoverProject(!ifHoverProject);

  return (
    <div data-aos="zoom-in"
      className="shadow-md shadow-[#06092e41] duration-500 p-2 rounded-md"
      onMouseEnter={isHover}
      onMouseLeave={isHover}
    >
      <a href={projectUrl} className="flex flex-col gap-10">
        <div
          className={`relative z-10 before:absolute before:inset-0 before:bg-blue-500 
        before:w-full before:h-4/5 before:rounded-md before:m-auto before:-z-10 before:duration-300
        ${ifHoverProject && "before:scale-90"} `}
        >
          <img src={projectImg} alt="Graphiscore" />
        </div>
        <div className="flex flex-col">
          <h2 className="text-2xl">{projectTitle}</h2>
          <p className="text-sm">{projectDcrp.substring(0, 100)}
          {projectDcrp.length > 100 ? "..." : ""}
          </p>
        </div>
        <div className="flex flex-row gap-4">
          <ul className="flex flex-row flex-wrap gap-x-2">
            {projectLang.map((language, index) => {
              return (
                <li
                  className={`text-sm relative duration-300 
                  after:absolute after:h-[2px]
                  after:w-0 after:bottom-0
                  after:duration-500 after:right-0
                  ${
                    ifHoverProject && "after:bg-blue-500 after:w-full after:left-0"
                  }`}
                  key={index}
                >
                  {language}
                </li>
              );
            })}
          </ul>
          <a href="">
            <BsArrowUpCircleFill
              size={30}
              style={{ color: ifHoverProject ? "#3B82F6" : "#fff" }}
              className={`duration-300 ${ifHoverProject ? "rotate-90" : ""}`}
            />
          </a>
        </div>
      </a>
    </div>
  );
}

export default ProjectAnimate;
