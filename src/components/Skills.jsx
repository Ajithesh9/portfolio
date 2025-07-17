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

// **No SVG imports**—we’ll use <img src="/assets/skills/…"> instead
const skillsData = [
  { file: 'html5',    name: 'HTML5',      borderColor: '#E34F26' },
  { file: 'css3',     name: 'CSS3',       borderColor: '#1572B6' },
  { file: 'javascript', name: 'JavaScript', borderColor: '#F7DF1E' },
  { file: 'react',    name: 'React',      borderColor: '#61DAFB' },
  { file: 'node.js',  name: 'Node.js',    borderColor: '#339933' },
  { file: 'tailwind_css', name: 'Tailwind', borderColor: '#06B6D4' },
  { file: 'npm',      name: 'NPM',        borderColor: '#CB3837' },
  { file: 'figma',    name: 'Figma',      borderColor: '#F24E1E' },
  { file: 'postman',  name: 'Postman',    borderColor: '#FF6C37' },
  { file: 'mongodb',  name: 'MongoDB',    borderColor: '#47A248' },
  { file: 'google_cloud', name: 'GCP',    borderColor: '#4285F4' },
  { file: 'git',      name: 'Git',        borderColor: '#F05032' },
  { file: 'github',   name: 'GitHub',     borderColor: '#e6e6e6' },
  { file: 'python',   name: 'Python',     borderColor: '#3776AB' },
  { file: 'java',     name: 'Java',       borderColor: '#ED8B00' },
  { file: 'vite.js',  name: 'Vite.js',    borderColor: '#646CFF' },
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
          if (!animatedBorder) setAnimatedBorder(true);
        }
      },
      { threshold: 0.1 }
    );
    if (skillsRef.current) observer.observe(skillsRef.current);
    return () => observer.disconnect();
  }, [animatedBorder]);

  useEffect(() => {
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = parseInt(entry.target.dataset.index, 10);
            setVisibleCards((prev) => new Set(prev).add(idx));
          }
        });
      },
      { threshold: 0.3 }
    );
    document.querySelectorAll('.skill-card')
      .forEach((card) => cardObserver.observe(card));
    return () => cardObserver.disconnect();
  }, []);

  return (
    <section className="skills-section" id="skills" ref={skillsRef}>
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

      <div className={`animated-border ${animatedBorder ? 'animate' : ''}`} />

      <div className="skills-container">
        <div className={`skills-header ${isVisible ? 'visible' : ''}`}>
          <h2>Skills & Expertise</h2>
          <p>A comprehensive overview of my technical skills and areas of expertise</p>
        </div>

        <div className={`primary-skills-container ${isVisible ? 'visible' : ''}`}>
          <div className="primary-skills-grid">
            {primarySkillsData.map((skill, idx) => {
              const Icon = skill.icon;
              return (
                <div
                  key={idx}
                  className="primary-skill-card"
                  style={{
                    animationDelay: `${idx * 0.1}s`,
                    '--border-color': skill.borderColor
                  }}
                >
                  <div className="card-content">
                    <h4>{skill.title}</h4>
                    <p>{skill.description}</p>
                  </div>
                  <div className="skill-icon">
                    <Icon size={24} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className={`tech-stack-container ${isVisible ? 'visible' : ''}`}>
          <div className="tech-stack-header">
            <h3>Technology Stack</h3>
            <p>Tools and technologies I work with regularly</p>
          </div>
          <div className="skills-grid">
            {skillsData.map((skill, idx) => (
              <div
                key={idx}
                className={`skill-card ${visibleCards.has(idx) ? 'visible' : ''}`}
                data-index={idx}
                style={{
                  animationDelay: `${idx * 0.05}s`,
                  '--border-color': skill.borderColor
                }}
              >
                <img
                  src={`/assets/skills/${skill.file}.svg`}
                  alt={`${skill.name} logo`}
                />
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
