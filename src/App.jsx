import React, { useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import Lenis from 'lenis';
import 'lenis/dist/lenis.css'; // Import Lenis base styles

export default function App() {
    useEffect(() => {
        // Initialize Lenis
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Optional: Custom easing function
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
        });

        // Create the animation loop
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Cleanup on unmount
        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <>
            <main>
                {/* 1. Hero Section */}
                <Hero />

                {/* 2. Skills Section */}
                {/* We use the <Skills /> component here. It is responsible for creating its own <section> with the 'skills-section' class. */}
                <Skills />

                {/* 3. Projects Section */}
                <Projects />

                {/* 4. Experience Section */}
                <Experience />

                {/* 5. Contact Section */}
                <Contact />
            </main>
        </>
    );
}