import React from "react";
import Header from "./header/Header";
import Home from "./body/home/home";
import AboutMe from "./body/about-me/about";
import Skills from "./body/skills/skills";
import Projects from "./body/projects/projects";
import Contact from  "./body/contact/contact"
import ParticlesAnimation from "./animation/ParticlesBG";

function App() {
  return (
    <div className="first-line:home bg-slate-800 overflow-hidden">
       <ParticlesAnimation />
      <div className="html-Tags max-w-7xl mx-auto relative">
        <Header />
        <Home />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
