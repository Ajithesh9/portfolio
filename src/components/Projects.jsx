import React, { useState, useEffect, useRef } from 'react';
import '../Projects.css';
import {
  Layers, Monitor, GraduationCap, User, FileText, Cloud,
  Link, Github, Zap, Shield
} from 'lucide-react';

const projectsData = [
  {
    id: 1,
    title: 'Watcher - SaaS',
    description: 'A beautifully designed SaaS platform with secure JWT login and seamless Stripe integration. Customers receive instant product access after payment, while admins manage sales and orders via a dedicated dashboard.',
    category: 'Web Application',
    technologies: ['MERN Stack', 'Stripe', 'Tailwind', 'JWT'],
    icon: Shield,
    gradient: 'linear-gradient(135deg, #F43F5E 0%, #BE123C 100%)',
    accentColor: '#F43F5E',
    features: ['Stripe Integration', 'JWT Authentication', 'Admin Dashboard', 'Instant Product Access'],
    status: 'Live',
    liveLink: 'https://one-store-89.vercel.app/',
    sourceLink: 'https://github.com/ajithesh9/one-store'
  },
  {
    id: 2,
    title: 'The Productivity Hub',
    description: 'A comprehensive platform that combines task management, time tracking, and collaboration tools to boost team efficiency.',
    category: 'Web Application',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Firebase'],
    icon: Layers,
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    accentColor: '#667eea',
    features: ['Task Management', 'Time Tracking', 'Team Collaboration', 'Analytics Dashboard'],
    status: 'Completed',
    liveLink: 'https://the-productivity-hub.netlify.app/',
    sourceLink: 'https://github.com/Ajithesh9/productivity-hub'
  },
  {
    id: 3,
    title: 'CineStream Local',
    description: 'A local network streaming platform built with Python that allows seamless movie and video streaming within your home network.',
    category: 'Desktop Application',
    technologies: ['Python', 'Flask', 'HTML/CSS', 'JavaScript'],
    icon: Monitor,
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    accentColor: '#f093fb',
    features: ['Local Network Streaming', 'Multi-device Support', 'Media Library', 'Auto-discovery'],
    status: 'Completed',
    liveLink: null,
    sourceLink: 'https://github.com/amruthaamujuri/Smart-PDF-to-Telugu-Audio-Converter'
  },
  {
    id: 4,
    title: 'Aditya CA Portal',
    description: 'A modern website for Aditya CA Academy featuring student rankings, course information, and administrative tools.',
    category: 'Website',
    technologies: ['React', 'CSS3', 'JavaScript', 'API Integration'],
    icon: GraduationCap,
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00C2CC 100%)',
    accentColor: '#4facfe',
    features: ['Student Rankings', 'Course Catalog', 'Admin Dashboard', 'Responsive Design'],
    status: 'Live',
    liveLink: 'https://aditya-ca-academy.netlify.app/',
    sourceLink: ''
  },
  {
    id: 5,
    title: 'PDF Lingua Converter',
    description: 'An intelligent PDF translation tool that converts documents into multiple languages while preserving formatting and layout.',
    category: 'Utility Tool',
    technologies: ['Python', 'ML/AI', 'Translation APIs', 'PDF Processing'],
    icon: FileText,
    gradient: 'linear-gradient(135deg, #86F0C2 0%, #7A3D53 100%)',
    accentColor: '#a8edea',
    features: ['Multi-language Support', 'Format Preservation', 'Batch Processing', 'AI-powered Translation'],
    status: 'Open Source',
    liveLink: null,
    sourceLink: 'https://github.com/amruthaamujuri/Smart-PDF-to-Telugu-Audio-Converter'
  },
  {
    id: 6,
    title: 'Weather Forecast App',
    description: 'A beautiful weather application that provides real-time weather information and forecasts for any location worldwide.',
    category: 'Web Application',
    technologies: ['JavaScript', 'Weather API', 'CSS3', 'Geolocation'],
    icon: Cloud,
    gradient: 'linear-gradient(135deg, #E0C28D 0%, #D99A89 100%)',
    accentColor: '#FAD087',
    features: ['Real-time Weather', 'Location Search', 'Weather Forecasts', 'Interactive Maps'],
    status: 'Completed',
    liveLink: '',
    sourceLink: 'https://github.com/Ajithesh9/Weather-application'
  },
];

const useInView = (options) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, options);
    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current) };
  }, [ref, options]);
  return [ref, isVisible];
};

const categories = ['All', ...new Set(projectsData.map(p => p.category))];

const Projects = () => {
  const [sectionRef, isVisible] = useInView({ threshold: 0.1, triggerOnce: true });
  const [activeFilter, setActiveFilter] = useState('All');

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

  const getStatusColor = (status) => {
    switch (status) {
      case 'Live': return '#10B981';
      case 'Completed': return '#3B82F6';
      case 'Open Source': return '#8B5CF6';
      default: return '#6B7280';
    }
  };

  const filteredProjects = projectsData.filter(project =>
    activeFilter === 'All' || project.category === activeFilter
  );

  return (
    <section className={`projects-section ${isVisible ? 'is-visible' : ''}`} ref={sectionRef} id="projects">
      <div className="animated-border" />
      <div className="projects-container">
        <header className="projects-header">
          <h2>Featured Projects</h2>
          <p>Discover my latest work and creative solutions that showcase innovation and technical excellence.</p>
        </header>

        <div className="filter-container">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, idx) => {
            const IconComponent = project.icon;
            return (
              <div key={project.id} className="project-card" style={{ '--accent-color': project.accentColor, animationDelay: `${idx * 0.1}s` }}>
                <div className="project-card-inner">
                  <div className="hover-overlay" style={{ background: project.gradient }} />
                  <div className="project-header-card">
                    <div className="project-icon" style={{ background: project.gradient }}>
                      <IconComponent size={24} />
                    </div>
                    <div className="project-status">
                      <span className="status-dot" style={{ backgroundColor: getStatusColor(project.status) }} />
                      {project.status}
                    </div>
                  </div>
                  <div className="project-content">
                    <h3>{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="project-category"><span>{project.category}</span></div>
                    <div className="tech-stack">{project.technologies.map((t, i) => (<span key={i} className="tech-tag">{t}</span>))}</div>
                    <div className="project-features">
                      <h4>Key Features:</h4>
                      <ul>{project.features.map((f, i) => (<li key={i}><Zap size={12} /> {f}</li>))}</ul>
                    </div>
                  </div>
                  <div className="project-actions">
                    {project.liveLink && <a href={project.liveLink} className="icon-link" aria-label="View Project" target="_blank" rel="noopener noreferrer"><Link size={20} /></a>}
                    {project.sourceLink && <a href={project.sourceLink} className="icon-link" aria-label="View Source Code" target="_blank" rel="noopener noreferrer"><Github size={20} /></a>}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
