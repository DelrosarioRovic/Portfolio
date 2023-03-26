import React from "react";
import { motion } from "framer-motion";
import FlashingSymbol from "../animation/FlashingSymbol";
import NavItem from "../animation/NavItem";
import Navigation from "./Navigation"
function Header() {
  return (
    <nav className="flex justify-between px-8 py-4 text-white items-center max-w-7xl mx-auto">
      <h1 className="font-extralight text-3xl">
        <a href="#">
          <FlashingSymbol letter="<" />
          <span className="text-blue-500 font-bold"> R </span>
          <FlashingSymbol letter=">" />
        </a>
      </h1>
        <Navigation />
    </nav>
  );
}

export default Header;
