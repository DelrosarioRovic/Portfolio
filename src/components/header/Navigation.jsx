import React, { useState } from "react";
import Hamburger from "../animation/Hamburger"
import NavItem from "../animation/NavItem";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="relative items-center flex">
      <Hamburger isOpen={isOpen} toggleMenu={toggleMenu} />
      <ul
        className={`flex justify-center gap-x-8 max-md:gap-x-5 max-sm:gap-y-10 max-sm:bg-slate-700 max-sm:fixed max-sm:flex-col max-sm:h-screen max-sm:top-0 max-sm:items-center max-sm:w-4/6 max-sm:z-20   ${
          isOpen ? "right-0" : "-right-full"
        }`}
      >
        <NavItem letter="Home" />
        <NavItem letter="About" />
        <NavItem letter="Skills" />
        <NavItem letter="Projects" />
        <NavItem letter="Contact" />
      </ul>
    </div>
  );
}

export default Navigation;
