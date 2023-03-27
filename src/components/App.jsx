import React from "react";
import Header from "./header/Header"
import Home from "./body/home/home";
import AboutMe from "./body/about-me/about";
function App() {
  return (
    <div className="home bg-slate-800">
          <Header />
          <Home />
          <AboutMe />
    </div>

  )
}

export default App;
