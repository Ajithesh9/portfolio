// components/Skills.jsx

import React, { useState, useEffect, useRef } from 'react';
import '../Skills.css';

// --- YOUR UNCHANGED IMPORTS ---
import htmlLogo from '../assets/skills/HTML5.svg';
import cssLogo from '../assets/skills/CSS3.svg';
import jsLogo from '../assets/skills/JavaScript.svg';
import reactLogo from '../assets/skills/React.svg';
import nodeLogo from '../assets/skills/Node.js.svg';
import tailwindLogo from '../assets/skills/Tailwind_CSS.svg';
import NPM from '../assets/skills/NPM.svg';
import figmaLogo from '../assets/skills/Figma.svg';
import postmanLogo from '../assets/skills/Postman.svg';
import MongoDB from '../assets/skills/MongoDB.svg';
import Google_Cloud from '../assets/skills/Google_Cloud.svg';
import gitLogo from '../assets/skills/Git.svg';
import githubLogo from '../assets/skills/GitHub.svg';
import pythonLogo from '../assets/skills/Python.svg';
import javaLogo from '../assets/skills/Java.svg';
import viteLogo from '../assets/skills/VITE.js.svg';

// --- YOUR UNCHANGED SKILLS DATA ARRAY ---
const skillsData = [
  { imgSrc: htmlLogo,    name: 'HTML5' },
  { imgSrc: cssLogo,     name: 'CSS3' },
  { imgSrc: jsLogo,      name: 'JavaScript' },
  { imgSrc: reactLogo,   name: 'React' },
  { imgSrc: nodeLogo,    name: 'Node.js' },
  { imgSrc: tailwindLogo,name: 'Tailwind CSS' },
  { imgSrc: NPM,         name: 'NPM' },
  { imgSrc: figmaLogo,   name: 'Figma' },
  { imgSrc: postmanLogo, name: 'Postman' },
  { imgSrc: MongoDB,     name: 'MongoDB' },
  { imgSrc: Google_Cloud,name: 'Google Cloud' },
  { imgSrc: gitLogo,     name: 'Git' },
  { imgSrc: githubLogo,  name: 'GitHub' },
  { imgSrc: pythonLogo,  name: 'Python' },
  { imgSrc: javaLogo,    name: 'Java' },
  { imgSrc: viteLogo,    name: 'Vite.js' },
];

// --- YOUR UNCHANGED PRIMARY SKILLS DATA ARRAY ---
const primarySkillsData = [
  { name: 'Responsive Web Design', color: '#60a5fa33' },
  { name: 'Cloud Computing', color: '#34d39933' },
  { name: 'DevOps', color: '#f59e0b33' },
  { name: 'Python & Java Programming', color: '#a78bfa33' },
  { name: 'UI/UX Design', color: '#f472b633' },
  { name: 'Photoshop', color: '#38bdf833' },
];


// --- NEW: A small, reusable hook to detect when an element is visible ---
const useInView = (options) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.unobserve(entry.target);
      }
    }, options);
    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current); };
  }, [ref, options]);
  return [ref, isInView];
};

const Skills = () => {
  // --- NEW: Use our hook to get a ref and a visibility boolean for the animation ---
  const [primarySkillsRef, primarySkillsAreVisible] = useInView({ threshold: 0.1 });

  // The old `useState` for hoverColor is no longer needed for our CSS-based approach.

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
         <div className="skills-parallax-background"></div>
        {/* --- MODIFIED: Added ref and conditional class for the animation --- */}
        <div 
          ref={primarySkillsRef}
          className={`primary-skills-container ${primarySkillsAreVisible ? 'is-visible' : ''}`}
        >
          {/* The old onMouseLeave and background div are removed for our cleaner approach */}
          <h3>These are my primary skills:</h3>
          <ul className="primary-skills-list">
            {primarySkillsData.map((skill) => (
              <li 
                key={skill.name} 
                className="primary-skill-item"
                style={{ '--skill-color': skill.color }}
              >
                {skill.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="skills-header">
          <h2>Technologies I'm Using</h2>
          <p>A look at the primary tools and technologies in my day-to-day development.</p>
        </div>
        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <div className="skill-card" key={index}>
              <img src={skill.imgSrc} alt={`${skill.name} logo`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;