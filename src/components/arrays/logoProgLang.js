import Js from"../../image/javascript.png";
import React from"../../image/react.png";
import Node from "../../image/node.png";

const logoProgLang = [
    {
      wrapperClassName: "progLang h-20 w-20 absolute  top-0 left-0 flex justify-center items-center",
      yValues:[0, -20, 0, 20, 0],
      delay: 1.1,
      src:Js,
      alt: "JS Logo",
      lang:"Javascript",
      childCLassName:"relative h-10 w-10 after:w-20 after:h-20 after:bg-yellow-500 after:bg-opacity-50 after:absolute after:-top-5 after:-left-5 hover:after:scale-125 active:after:scale-75 after:duration-300 after:rounded-full"
    },
    {
      wrapperClassName: "w-20 h-20 absolute top-10 right-0 flex justify-center items-center",
      yValues:[0, 10, 0, -15, 0],
      delay: 1.7,
      src:React,
      alt: "React Logo",
      lang:"React",
      childCLassName:"relative h-10 w-10 after:w-20 after:h-20 after:bg-blue-500 after:bg-opacity-40 after:absolute after:-top-5 after:-left-5 hover:after:scale-125 active:after:scale-75 after:duration-300 after:rounded-full"
    },
    {
      wrapperClassName: "w-20 h-20 absolute bottom-0 left-0 flex justify-center items-center",
      yValues:[0, -10, 0, 10, 0],
      delay: 2.3,
      src:Node,
      alt: "Node.js Logo",
      lang:"Node Js",
      childCLassName:"relative h-10 w-10 after:w-20 after:h-20 after:bg-green-500 after:bg-opacity-40 after:absolute after:-top-5 after:-left-5 hover:after:scale-125 active:after:scale-75 after:duration-300 after:rounded-full"
    },
  ];

export default logoProgLang;