// src/components/Experience.jsx

import React, { useState, useEffect, useRef } from 'react';
import '../ExperienceSection.css';
import CountUp from 'react-countup';
import { 
  Flame, 
  GitCommit, 
  Rocket, 
  Trophy,
  BrainCircuit, 
  GitBranch, 
  Target,
  Code
} from 'lucide-react';

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

const statsData = [
  { icon: Flame, value: "1", label: "Years of Experience", color: "#FF6B35" },
  { icon: GitBranch, value: "22", label: "GitHub Repositories", color: "#00D4FF" },
  { icon: GitCommit, value: "360+", label: "GitHub Contributions", color: "#f472b6" },
  { icon: Rocket, value: "4", label: "Launched Projects", color: "#9D4EDD" },
  { icon: Trophy, value: "4", label: "Participated Hackathons", color: "#FFD60A" },
  { icon: Target, value: "7", label: "Total Certifications", color: "#3CE5AB" }
];

const experienceData = [
  {
    icon: <Code />,
    role: "Frontend Web Developer Intern",
    company: "HydroTribe",
    tenure: "Internship",
    color: "#3CE5AB",
    description: "Gained hands-on experience with CSS & HTML5, hosted sites using GitHub Pages, and collaborated with the UI/UX team to meet company design and functionality requirements."
  },
  {
    icon: <BrainCircuit />,
    role: "Machine Learning Intern",
    company: "SkillDzire",
    tenure: "Internship",
    color: "#60a5fa",
    description: "Learned Python and key libraries, applying techniques like linear regression and YOLO for practical projects. Built a strong foundation in ML to solve real-world problems."
  }
];

const StatsGrid = ({ isVisible }) => {
  return (
    <div className={`stats-container ${isVisible ? 'visible' : ''}`}>
      <div className="stats-grid">
        {statsData.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div
              key={index}
              className="stat-card"
              style={{ animationDelay: `${index * 0.1}s`, '--stat-color': stat.color }}
            >
              <div className="stat-icon">
                <IconComponent size={28} style={{ color: stat.color }} />
              </div>
              <div className="stat-content">
                <div className="stat-value">
                  {/* UPDATED: Added enableScrollSpy to trigger the count animation on scroll */}
                  <CountUp 
                    end={parseInt(stat.value)} 
                    duration={2.5} 
                    suffix={stat.value.includes('+') ? '+' : ''}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Experience = () => {
  const [sectionRef, isVisible] = useInView({ threshold: 0.1, triggerOnce: true });
  
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const handleMouseMove = (e) => {
      const { left, top } = section.getBoundingClientRect();
      section.style.setProperty('--mouse-x', `${e.clientX - left}px`);
      section.style.setProperty('--mouse-y', `${e.clientY - top}px`);
    };
    section.addEventListener('mousemove', handleMouseMove);
    return () => section.removeEventListener('mousemove', handleMouseMove);
  }, [sectionRef]);

  return (
    <section 
      ref={sectionRef} 
      className={`experience-section ${isVisible ? 'is-visible' : ''}`} 
      id="experience"
    >
      <div className="animated-top-border" />
      <div className="experience-container">
        <div className="timeline-header">
          <h2>Career Journey</h2>
        </div>
        <StatsGrid isVisible={isVisible} />
        <div className="timeline-container">
          <div className="timeline">
            {experienceData.map((exp, index) => (
              <div key={index} className="timeline-item" style={{'--animation-delay': `${0.4 + index * 0.2}s`, '--hover-color': exp.color}}>
                <div className="timeline-icon">{exp.icon}</div>
                <div className="timeline-content">
                  <div className="content-header">
                    <h3>{exp.role}</h3>
                    <span className="company-tenure" style={{ backgroundColor: exp.color + '1a', color: exp.color }}>
                      {exp.company} • {exp.tenure}
                    </span>
                  </div>
                  <p>{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
