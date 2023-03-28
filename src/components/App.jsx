import React from "react";
import Header from "./header/Header"
import Home from "./body/home/home";
import AboutMe from "./body/about-me/about";
import Skills from "./body/skills/skills";
function App() {
  return (
    <div className="html-Tags first-line:home bg-slate-800 overflow-hidden">
          <Header />
          <Home />
          <AboutMe />
          <Skills />
    </div>

  )
}

export default App;
