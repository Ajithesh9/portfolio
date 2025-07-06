import React, { useState, useEffect, useRef } from 'react';
import '../Projects.css'
import { 
  Layers, 
  Monitor, 
  GraduationCap, 
  User, 
  FileText, 
  Cloud,
  ExternalLink,
  Github,
  Zap
} from 'lucide-react';

const projectsData = [
  {
    id: 1,
    title: 'The Productivity Hub',
    description: 'A comprehensive productivity platform that combines task management, time tracking, and collaboration tools to boost team efficiency.',
    category: 'Web Application',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    icon: Layers,
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    accentColor: '#667eea',
    features: ['Task Management', 'Time Tracking', 'Team Collaboration', 'Analytics Dashboard'],
    status: 'Completed'
  },
  {
    id: 2,
    title: 'CineStream Local',
    description: 'A local network streaming platform built with Python that allows seamless movie and video streaming within your home network.',
    category: 'Desktop Application',
    technologies: ['Python', 'Flask', 'HTML/CSS', 'JavaScript'],
    icon: Monitor,
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    accentColor: '#f093fb',
    features: ['Local Network Streaming', 'Multi-device Support', 'Media Library', 'Auto-discovery'],
    status: 'Completed'
  },
  {
    id: 3,
    title: 'Aditya CA Academy Portal',
    description: 'A modern website for Aditya CA Academy featuring student rankings, course information, and administrative tools.',
    category: 'Website',
    technologies: ['React', 'CSS3', 'JavaScript', 'API Integration'],
    icon: GraduationCap,
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    accentColor: '#4facfe',
    features: ['Student Rankings', 'Course Catalog', 'Admin Dashboard', 'Responsive Design'],
    status: 'Live'
  },
  {
    id: 4,
    title: 'Personal Portfolio',
    description: 'A sleek and modern portfolio website showcasing my skills, projects, and professional journey with interactive animations.',
    category: 'Portfolio',
    technologies: ['React', 'CSS3', 'JavaScript', 'Lucide Icons'],
    icon: User,
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    accentColor: '#fa709a',
    features: ['Interactive Animations', 'Responsive Design', 'Modern UI', 'Performance Optimized'],
    status: 'Live'
  },
  {
    id: 5,
    title: 'PDF Lingua Converter',
    description: 'An intelligent PDF translation tool that converts documents into multiple languages while preserving formatting and layout.',
    category: 'Utility Tool',
    technologies: ['Python', 'ML/AI', 'Translation APIs', 'PDF Processing'],
    icon: FileText,
    gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    accentColor: '#a8edea',
    features: ['Multi-language Support', 'Format Preservation', 'Batch Processing', 'AI-powered Translation'],
    status: 'Open Source'
  },
  {
    id: 6,
    title: 'Weather Forecast App',
    description: 'A beautiful weather application that provides real-time weather information and forecasts for any location worldwide.',
    category: 'Mobile App',
    technologies: ['JavaScript', 'Weather API', 'CSS3', 'Geolocation'],
    icon: Cloud,
    gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
    accentColor: '#ffecd2',
    features: ['Real-time Weather', 'Location Search', 'Weather Forecasts', 'Interactive Maps'],
    status: 'Completed'
  }
];

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState(new Set());
  const sectionRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const cardObs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const idx = parseInt(entry.target.dataset.index, 10);
          setVisibleCards(prev => new Set(prev).add(idx));
        }
      });
    }, { threshold: 0.2 });
    document.querySelectorAll('.project-card').forEach(card => cardObs.observe(card));
    return () => cardObs.disconnect();
  }, []);

  const getStatusColor = status => {
    switch (status) {
      case 'Live': return '#10B981';
      case 'Completed': return '#3B82F6';
      case 'Open Source': return '#8B5CF6';
      default: return '#6B7280';
    }
  };

  return (
    <section className="projects-section" ref={sectionRef} id="projects">
      <div className="bg-grid">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="grid-line" style={{ '--i': i }} />
        ))}
      </div>
      <div className="floating-elements">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="floating-element"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="projects-container">
        <header className={`projects-header ${isVisible ? 'visible' : ''}`}>
          <h2>Featured Projects</h2>
          <p>Discover my latest work and creative solutions that showcase innovation and technical excellence.</p>
        </header>

        <div className={`projects-grid ${isVisible ? 'visible' : ''}`}>
          {projectsData.map((project, idx) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                className={`project-card ${visibleCards.has(idx) ? 'visible' : ''}`}
                data-index={idx}
                style={{ '--accent-color': project.accentColor }}
              >
                <div className="project-card-inner">
                  <div className="hover-overlay" style={{ background: project.gradient }} />

                  <div className="project-header">
                    <div className="project-icon" style={{ background: project.gradient }}>
                      <Icon size={24} />
                    </div>
                    <div className="project-status">
                      <span
                        className="status-dot"
                        style={{ backgroundColor: getStatusColor(project.status) }}
                      />
                      {project.status}
                    </div>
                  </div>

                  <div className="project-content">
                    <h3>{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="project-category">
                      <span>{project.category}</span>
                    </div>
                    <div className="tech-stack">
                      {project.technologies.map((t, i) => (
                        <span key={i} className="tech-tag">{t}</span>
                      ))}
                    </div>
                    <div className="project-features">
                      <h4>Key Features:</h4>
                      <ul>
                        {project.features.map((f, i) => (
                          <li key={i}><Zap size={12}/> {f}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="project-actions">
                    <button className="action-btn link">
                      <ExternalLink size={16}/> View Project
                    </button>
                    <button className="action-btn github">
                      <Github size={16}/> GitHub
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
