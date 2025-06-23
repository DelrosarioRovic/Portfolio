import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from "react-icons/ai";
import { IoLogoDiscord } from "react-icons/io5";
import { FaSquareUpwork } from "react-icons/fa6";

function Footer() {
  return (
    <div className="flex flex-col max-w-7xl items-center justify-center text-white opacity-90 h-full mx-auto py-2 px-8 mt-10">
      <div className="flex flex-row gap-x-3 justify-center">
        <a href="https://github.com/DelrosarioRovic">
          <AiFillGithub size={20} color="white" />
        </a>
        <a href="https://www.linkedin.com/in/rovic-del-rosario-a04542244/">
          <AiFillLinkedin size={20} color="white" />
        </a>
        <a href="https://web.facebook.com/profile.php?id=100009115651018">
          <AiFillFacebook size={20} color="white" />
        </a>
        <a href="https://discord.com/channels/@me/725912639879774208">
          <IoLogoDiscord size={20} color="white" />
        </a>
        <a href="https://www.upwork.com/freelancers/~01365352d78355d485?viewMode=1">
          <FaSquareUpwork size={20} color="white" />
        </a>
      </div>
      <a href="https://github.com/DelrosarioRovic/Portfolio" className="opacity-70 hover:opacity-100">GitHub Source Code</a>
      <ul className="flex flex-row gap-x-3">
        <li className="font-light opacity-70">2023 © Rovic</li>
        <li className="font-light opacity-70 border-gray-400 border-l pl-3">All Rights Reserved.</li>
      </ul>
    </div>
  );
}

export default Footer;
