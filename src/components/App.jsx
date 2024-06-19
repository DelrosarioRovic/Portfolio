import React from "react";
import Header from "./header/Header";
import Footer from "./footer/footer";
import Home from "./body/home/home";
import AboutMe from "./body/about-me/about";
import Skills from "./body/skills/skills";
import Projects from "./body/projects/projects";
import Contact from "./body/contact/contact";
import ParticlesAnimation from "./animation/ParticlesBG";
import Experience from "./body/experience/experience";

function App() {
  return (
    <div className="first-line:home bg-slate-800 overflow-hidden">
      <ParticlesAnimation />
      <Header />
      <div className="html-Tags max-w-7xl mx-auto relative">
        <Home />
        <AboutMe />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
