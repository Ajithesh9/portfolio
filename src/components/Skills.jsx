// components/Skills.jsx

import React, { useState } from 'react';
import '../Skills.css';

// Technology logos imports
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

// Skills data array
const skillsData = [
  { imgSrc: htmlLogo, name: 'HTML5' },
  { imgSrc: cssLogo, name: 'CSS3' },
  { imgSrc: jsLogo, name: 'JavaScript' },
  { imgSrc: reactLogo, name: 'React' },
  { imgSrc: nodeLogo, name: 'Node.js' },
  { imgSrc: tailwindLogo, name: 'Tailwind CSS' },
  { imgSrc: NPM, name: 'NPM' },
  { imgSrc: figmaLogo, name: 'Figma' },
  { imgSrc: postmanLogo, name: 'Postman' },
  { imgSrc: MongoDB, name: 'MongoDB' },
  { imgSrc: Google_Cloud, name: 'Google Cloud' },
  { imgSrc: gitLogo, name: 'Git' },
  { imgSrc: githubLogo, name: 'GitHub' },
  { imgSrc: pythonLogo, name: 'Python' },
  { imgSrc: javaLogo, name: 'Java' },
  { imgSrc: viteLogo, name: 'Vite.js' },
];

// Primary skills with descriptions (removed icons)
const primarySkillsData = [
  {
    title: 'Frontend Development',
    description: 'Building responsive and interactive user interfaces with modern frameworks',
    category: 'development'
  },
  {
    title: 'Backend Development',
    description: 'Creating robust server-side applications and APIs',
    category: 'development'
  },
  {
    title: 'Cloud Computing',
    description: 'Deploying and managing applications on cloud platforms',
    category: 'cloud'
  },
  {
    title: 'UI/UX Design',
    description: 'Crafting intuitive and visually appealing user experiences',
    category: 'design'
  },
  {
    title: 'DevOps & Tools',
    description: 'Streamlining development workflows and deployment processes',
    category: 'tools'
  },
  {
    title: 'Problem Solving',
    description: 'Analytical thinking and creative solutions for complex challenges',
    category: 'soft'
  },
];

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(null);

  const handleSkillClick = (index) => {
    setActiveSkill(activeSkill === index ? null : index);
  };

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        {/* Skills Header */}
        <div className="skills-header">
          <h2>Skills & Expertise</h2>
          <p>
            A comprehensive overview of my technical skills and areas of expertise
          </p>
        </div>

        {/* Primary Skills Section */}
        <div className="primary-skills-container">
          <h3>Core Competencies</h3>
          <div className="primary-skills-grid">
            {primarySkillsData.map((skill, index) => (
              <div
                key={index}
                className={`primary-skill-card ${
                  activeSkill === index ? 'active' : ''
                }`}
                onClick={() => handleSkillClick(index)}
              >
                <h4>{skill.title}</h4>
                <p>{skill.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="tech-stack-container">
          <div className="tech-stack-header">
            <h3>Technology Stack</h3>
            <p>Tools and technologies I work with regularly</p>
          </div>
          <div className="skills-grid">
            {skillsData.map((skill, index) => (
              <div className="skill-card" key={index}>
                <img src={skill.imgSrc} alt={`${skill.name} logo`} />
                <h5>{skill.name}</h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;