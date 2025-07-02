import React from 'react';
import '../Hero.css';
import Navbar from './Navbar.jsx'; // Importing the Navbar component
import profilePic from '../assets/photo.jpg'; // Adjust the path to your profile picture

// Importing icons from react-icons library
import { FiMail, FiEye, FiGithub, FiLinkedin } from 'react-icons/fi';
import { FaXTwitter } from 'react-icons/fa6';

const Hero = () => {
  return (
    <div className="hero-container">
      {/* This div creates the subtle background glow effect */}
      <div className="background-glow"></div>

      {/* The Navbar component is now used here */}
      <Navbar />

      {/* Main Hero Content */}
      <main className="hero-content">
        <img src={profilePic} alt="Nadhir" className="profile-pic" />
        <h1 className="hero-title">
          Hey, I'm Ajithesh✨
          <br />
          <span className="subtitle">A Web Developer</span>
        </h1>
        <p className="hero-description">
          A fullstack developer with solid foundations in design,
          passionate about crafting seamless user experiences I thrive at the intersection
          of creativity and functionality.
        </p>

        {/* Action Buttons and Social Links */}
        <div className="hero-actions">
          <a href="#contact" className="cta-button primary">
            <FiMail /> Contact Me
          </a>
          <a href="#projects" className="cta-button secondary">
            <FiEye /> View Projects
          </a>
          <div className="divider"></div>
          <div className="social-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FiGithub size={22} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FiLinkedin size={22} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaXTwitter size={22} />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
