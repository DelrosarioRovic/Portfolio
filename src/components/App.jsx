import React from "react";
import Header from "./header/Header";
import Home from "./body/home/home";
import AboutMe from "./body/about-me/about";
import Skills from "./body/skills/skills";
function App() {
  return (
    <div className="first-line:home bg-slate-800 overflow-hidden">
      <div className="html-Tags max-w-7xl mx-auto relative">
        <Header />
        <Home />
        <AboutMe />
        <Skills />
      </div>
    </div>
  );
}

export default App;
