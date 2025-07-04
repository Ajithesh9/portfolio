// App.jsx (Corrected and Final Version)

import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import GlobalBackground from "./components/GlobalBackground.jsx";

export default function App() {
	return (<> {
			/* This renders the global parallax background and sits behind everything. Perfect. */
		}

		<GlobalBackground /> <Navbar /> {
			/* A single <main> tag to wrap all page content is best practice. */
		}

		<main> {
			/* 1. Hero Section (Renders only once) */
		}

		<Hero /> {
			/* 2. Skills Section (Renders only once) */
		}

			{
			/* We use the <Skills /> component here. It is responsible for creating its own <section> with the 'skills-section' class. */
		}

		<Skills /> {
			/* 3. Projects Section (Renders only once, with its required wrapper) */
		}

		<section className="section projects" > <div className="container" > <Projects /> </div> </section> {
			/* 4. Experience Section (Renders only once, with its required wrapper) */
		}

		<section className="section experience" > <div className="container" > <Experience /> </div> </section> {
			/* 5. Contact Section (Renders only once, with its required wrapper) */
		}

		<section className="section contact" > <div className="container" > <Contact /> </div> </section> </main> </>);
}