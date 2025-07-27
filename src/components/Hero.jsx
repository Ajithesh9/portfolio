import React, { useState, useEffect } from 'react';
import '../Hero.css';
import Navbar from './Navbar.jsx';

// Icons from react-icons
import { FiDownload, FiEye, FiGithub, FiLinkedin } from 'react-icons/fi';
import { SiGooglecloud } from 'react-icons/si';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="hero" className={`hero-container ${isLoaded ? 'is-loaded' : ''}`}>
      <Navbar />

      <main className="hero-content">
        {/* Now referencing the static asset in public/assets */}
        <img
          src="\assets\skills\photo.jpg"
          alt="Ajithesh"
          className="profile-pic"
        />

        <h1 className="hero-title">
          <div className="hero-line">
            <span>Hey, I’m Ajithesh ✨</span>
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

        <div className="hero-actions">
          <a
            href="https://drive.google.com/file/d/1_WQIP-0Y6Xyk6ZJji0AoIO8X-T94-zDU/view?usp=sharing"
            className="cta-button primary" target="_blank"
          >
            <FiDownload /> Download Resume
          </a>
          <a href="#projects" className="cta-button secondary">
            <FiEye /> View Projects
          </a>
          <div className="divider" />
          <div className="social-links">
            <a
              href="https://github.com/Ajithesh9"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FiGithub size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/pedagandham-ajithesh/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={22} />
            </a>
            <a
              href="https://www.cloudskillsboost.google/public_profiles/cc200caf-80b0-41cb-a549-fc9b361c1dec"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GCP"
            >
              <SiGooglecloud size={22} />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
