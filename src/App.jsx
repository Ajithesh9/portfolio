import React from "react";
import Navbar   from "./components/Navbar.jsx";
import Hero     from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import Skills   from "./components/Skills.jsx";
import Contact  from "./components/Contact.jsx";

export default function App() {
  return (
    <>
      <Hero />
      <section className="section skills">
        <div className="container">
          <Skills />
        </div>
      </section>
      <section className="section projects">
        <div className="container">
          <Projects />
        </div>
      </section>
      
      <section className="section experience">
        <div className="container">
          <Experience />
        </div>
      </section>
      <section className="section contact">
        <div className="container">
          <Contact />
        </div>
      </section>
    </>
  );
}
