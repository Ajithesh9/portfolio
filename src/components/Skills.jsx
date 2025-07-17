import React, { useState, useEffect, useRef } from 'react';
import '../Skills.css';

// Icon imports from lucide-react
import { 
  Smartphone, 
  Cloud, 
  Settings, 
  Code, 
  Palette, 
  Camera 
} from 'lucide-react';

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
  { imgSrc: htmlLogo, name: 'HTML5', borderColor: '#E34F26' },
  { imgSrc: cssLogo, name: 'CSS3', borderColor: '#1572B6' },
  { imgSrc: jsLogo, name: 'JavaScript', borderColor: '#F7DF1E' },
  { imgSrc: reactLogo, name: 'React', borderColor: '#61DAFB' },
  { imgSrc: nodeLogo, name: 'Node.js', borderColor: '#339933' },
  { imgSrc: tailwindLogo, name: 'Tailwind', borderColor: '#06B6D4' },
  { imgSrc: NPM, name: 'NPM', borderColor: '#CB3837' },
  { imgSrc: figmaLogo, name: 'Figma', borderColor: '#F24E1E' },
  { imgSrc: postmanLogo, name: 'Postman', borderColor: '#FF6C37' },
  { imgSrc: MongoDB, name: 'MongoDB', borderColor: '#47A248' },
  { imgSrc: Google_Cloud, name: 'GCP', borderColor: '#4285F4' },
  { imgSrc: gitLogo, name: 'Git', borderColor: '#F05032' },
  { imgSrc: githubLogo, name: 'GitHub', borderColor: '#e6e6e6' },
  { imgSrc: pythonLogo, name: 'Python', borderColor: '#3776AB' },
  { imgSrc: javaLogo, name: 'Java', borderColor: '#ED8B00' },
  { imgSrc: viteLogo, name: 'Vite.js', borderColor: '#646CFF' },
];

const primarySkillsData = [
  {
    title: 'Responsive Web Design',
    description: 'Creating adaptive layouts that work seamlessly across all devices and screen sizes',
    borderColor: '#00D4FF',
    icon: Smartphone
  },
  {
    title: 'Cloud Computing',
    description: 'Deploying and managing scalable applications on cloud platforms',
    borderColor: '#FF6B35',
    icon: Cloud
  },
  {
    title: 'DevOps',
    description: 'Streamlining development workflows and automated deployment processes',
    borderColor: '#9D4EDD',
    icon: Settings
  },
  {
    title: 'Python & Java',
    description: 'Data Structures & Algorithms, Problem Solving with enterprise grade languages',
    borderColor: '#FFD60A',
    icon: Code
  },
  {
    title: 'UI/UX Design',
    description: 'Crafting intuitive and visually appealing user experiences',
    borderColor: '#FF006E',
    icon: Palette
  },
  {
    title: 'Photoshop',
    description: 'Professional image editing and digital design creation',
    borderColor: '#06FFA5',
    icon: Camera
  },
];

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedBorder, setAnimatedBorder] = useState(false);
  const [visibleCards, setVisibleCards] = useState(new Set());
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (!animatedBorder) {
            setAnimatedBorder(true);
          }
        }
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, [animatedBorder]);

  useEffect(() => {
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleCards(prev => new Set(prev).add(index));
          }
        });
      },
      { threshold: 0.3 }
    );

    const cards = document.querySelectorAll('.skill-card');
    cards.forEach((card) => cardObserver.observe(card));

    return () => cardObserver.disconnect();
  }, []);

  return (
    <section className="skills-section" id="skills" ref={skillsRef}>
      {/* Animated background particles */}
      <div className="bg-particles">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Animated border */}
      <div className={`animated-border ${animatedBorder ? 'animate' : ''}`} />

      <div className="skills-container">
        {/* Skills Header */}
        <div className={`skills-header ${isVisible ? 'visible' : ''}`}>
          <h2>Skills & Expertise</h2>
          <p>
            A comprehensive overview of my technical skills and areas of expertise
          </p>
        </div>

        {/* Primary Skills Section */}
        <div className={`primary-skills-container ${isVisible ? 'visible' : ''}`}>
          <div className="primary-skills-grid">
            {primarySkillsData.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div
                  key={index}
                  className="primary-skill-card"
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    '--border-color': skill.borderColor
                  }}
                >
                  <div className="card-content">
                    <h4>{skill.title}</h4>
                    <p>{skill.description}</p>
                  </div>
                  <div className="skill-icon">
                    <IconComponent size={24} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Technology Stack */}
        <div className={`tech-stack-container ${isVisible ? 'visible' : ''}`}>
          <div className="tech-stack-header">
            <h3>Technology Stack</h3>
            <p>Tools and technologies I work with regularly</p>
          </div>
          <div className="skills-grid">
            {skillsData.map((skill, index) => (
              <div 
                className={`skill-card ${visibleCards.has(index) ? 'visible' : ''}`}
                key={index}
                data-index={index}
                style={{ 
                  animationDelay: `${index * 0.05}s`,
                  '--border-color': skill.borderColor
                }}
              >
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