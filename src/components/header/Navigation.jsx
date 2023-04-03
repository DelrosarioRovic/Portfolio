import React, { useState } from "react";
import Hamburger from "../animation/Hamburger";
import NavItem from "../animation/NavItem";
import "./header.css";

function Navigation() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleMenu = () => setIsNavOpen((prevState) => !prevState);

  const clickNavItem = () => {
    setIsNavOpen(false);
  }

  const navItems = [
    { href: "home", label: "Home"},
    { href: "about", label: "About" },
    { href: "skills", label: "Skills" },
    { href: "projects", label: "Projects" },
    { href: "contact", label: "Contact" },
  ];
  

  return (
    <div className="relative items-center flex">
      <Hamburger isOpen={isNavOpen} toggleMenu={toggleMenu} />
      <ul
        className={`flex justify-center gap-x-8 max-md:gap-x-5 max-sm:gap-y-10 max-sm:bg-slate-700 max-sm:fixed max-sm:flex-col max-sm:h-screen max-sm:top-0 max-sm:items-center max-sm:w-4/6 max-sm:z-20 ${
          isNavOpen ? "right-0" : "-right-full"
        }`}
      >
        {navItems.map((item) => (
          <NavItem
            key={item.label}
            href={item.href}
            activeScroll="active-on-scroll"
            label={item.label}
            onClick={clickNavItem}
          />
        ))}
      </ul>
    </div>
  );
}

export default Navigation;
