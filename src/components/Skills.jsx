// components/Skills.jsx

import React from 'react';
import '../Skills.css';

// --- IMAGE IMPORTS ---
import htmlLogo from '../assets/skills/HTML5.svg';
import cssLogo from '../assets/skills/CSS3.svg';
import jsLogo from '../assets/skills/JavaScript.svg';
import reactLogo from '../assets/skills/React.svg';           // renamed alias
import nodeLogo from '../assets/skills/Node.js.svg';
import tailwindLogo from '../assets/skills/Tailwind_CSS.svg';
import NPM from '../assets/skills/NPM.svg';
import figmaLogo from '../assets/skills/Figma.svg';
import postmanLogo from '../assets/skills/Postman.svg';
import MongoDB from '../assets/skills/MongoDB.svg';
import Google_Cloud from '../assets/skills/Google_Cloud.svg';
import gitLogo from '../assets/skills/Git.svg';
import githubLogo from '../assets/skills/GitHub.svg';
import pythonLogo from '../assets/skills/Python.svg';   // also better alias
import javaLogo from '../assets/skills/Java.svg';
import viteLogo from '../assets/skills/VITE.js.svg';

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

const Skills = () => (
  <section className="skills-section" id="skills">
    <div className="skills-container">
      <div className="skills-header">
        <h2>Technologies I'm Using</h2>
        <p>A look at the primary tools and technologies in my day-to-day development.</p>
      </div>
      <div className="skills-grid">
        {skillsData.map((skill, idx) => (
          <div className="skill-card" key={idx}>
            <img src={skill.imgSrc} alt={`${skill.name} logo`} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
