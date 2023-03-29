import Js from"../../image/javascript.png";
import React from"../../image/react.png";
import Node from "../../image/node.png";

const logoProgLang = [
    {
      wrapperClassName: "progLang w-20 h-20 absolute top-0 left-0 p-5 bg-yellow-500 bg-opacity-40 rounded-full",
      yValues:[0, -20, 0, 20, 0],
      delay: 1.1,
      src:Js,
      alt: "JS Logo",
      lang:"Javascript"
    },
    {
      wrapperClassName: "w-20 h-20 absolute top-10 right-0 p-5 bg-blue-500 bg-opacity-40 rounded-full",
      yValues:[0, 10, 0, -15, 0],
      delay: 1.7,
      src:React,
      alt: "React Logo",
      lang:"React"
    },
    {
      wrapperClassName: "w-20 h-20 absolute bottom-0 left-0 p-5 bg-green-500 bg-opacity-30 rounded-full",
      yValues:[0, -10, 0, 10, 0],
      delay: 2.3,
      src:Node,
      alt: "Node.js Logo",
      lang:"Node Js"
    },
  ];

export default logoProgLang;