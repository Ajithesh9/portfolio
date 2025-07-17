// src/components/Hero.jsx

import React, { useState, useEffect } from 'react';
import '../Hero.css';
import Navbar from './Navbar.jsx';
import profilePic from '../assets/photo.jpg';

// Importing icons from react-icons library
import { FiMail, FiEye, FiGithub, FiLinkedin } from 'react-icons/fi';
import { SiGooglecloud } from "react-icons/si";


const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations after the component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    // --- MODIFIED: Added id="hero" and conditional class for animations ---
    <div id="hero" className={`hero-container ${isLoaded ? 'is-loaded' : ''}`}>
      
      {/* The new background will be applied via CSS */ }

      <Navbar />

      <main className="hero-content">
        <img src={profilePic} alt="Ajithesh" className="profile-pic" />
        
        {/* --- MODIFIED: h1 is wrapped for the new text reveal animation --- */}
        <h1 className="hero-title">
          <div className="hero-line">
            <span>Hey, I'm Ajithesh ✨</span>
          </div>
          <div className="hero-line">
            <span className="subtitle">A Software Developer</span>
          </div>
        </h1>
        
        <p className="hero-description">
          A fullstack developer with solid foundations in design,
          passionate about crafting seamless user experiences. I thrive at the intersection
          of creativity and functionality.
        </p>

        {/* Action Buttons and Social Links (Unchanged) */}
        <div className="hero-actions">
          <a href="mailto:ajithesh1418@gmail.com" className="cta-button primary">
            <FiMail /> Contact Me
          </a>
          <a href="#projects" className="cta-button secondary">
            <FiEye /> View Projects
          </a>
          <div className="divider"></div>
          <div className="social-links">
            <a href="https://github.com/Ajithesh9" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FiGithub size={22} />
            </a>
            <a href="https://www.linkedin.com/in/pedagandham-ajithesh/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FiLinkedin size={22} />
            </a>
            <a href="https://www.cloudskillsboost.google/public_profiles/cc200caf-80b0-41cb-a549-fc9b361c1dec" target="_blank" rel="noopener noreferrer" aria-label="GCP">
              <SiGooglecloud size={22} />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;