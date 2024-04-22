import React, { useState } from "react";
import { Link } from "react-scroll";

const NavItem = ({ label, href, onClick, activeScroll }) => {
  
  return (
    <li className="p-0">
      <Link
        to={href}
        activeClass={activeScroll}
        className='cursor-pointer file:bg-opacity-90 hover:text-blue-500 font-medium tracking-wide text-sm relative
        after:absolute after:h-[2px]
        after:w-0 after:bottom-0
        after:duration-500 after:right-0
        hover:after:bg-blue-500
        hover:after:w-full hover:after:left-0'
        onClick={onClick}
        spy={true}
        offset={-100}
      >
        {label}
      </Link>
    </li>
  );
};

export default NavItem;
