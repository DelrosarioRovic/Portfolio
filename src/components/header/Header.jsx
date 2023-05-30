import React from "react";
import FlashingSymbol from "../animation/FlashingSymbol";
import Navigation from "./Navigation";
import { Link } from "react-scroll";
import "animate.css";
import "./header.css";
function Header() {
  return (
    <nav className="items-center max-w-full mx-auto fixed top-0 left-2/4 -translate-x-2/4 bg-slate-800 shadow-md shadow-[#06092e41] w-full z-50">
      <div className="flex justify-between max-w-7xl mx-auto px-8 py-4 text-white ">
        <h1 className="font-extralight text-3xl">
          <Link to="home">
            <FlashingSymbol letter="<" />
            <span className="text-blue-500 font-bold"> R </span>
            <FlashingSymbol letter=">" />
          </Link>
        </h1>
        <Navigation />
      </div>
    </nav>
  );
}

export default Header;
