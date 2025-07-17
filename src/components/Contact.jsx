// src/components/Contact.jsx

import React, { useEffect, useRef, useState } from 'react';
import '../Contact.css';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

// A simple, reliable hook to detect when an element is in view
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

const Contact = () => {
  const [sectionRef, isVisible] = useInView({ threshold: 0.2, triggerOnce: true });
  
  // --- ACTION: Replace with your actual links ---
  const githubUrl = "https://github.com/ajithesh9";
  const linkedinUrl = "https://www.linkedin.com/in/pedagandham-ajithesh/";
  const email = "mailto:ajithesh1418@gmail.com";

  // Enhanced marquee content with more variety
  const marqueeItems = [
    "Let's build something amazing together",
    "Coded & Crafted with",
    "Open to new opportunities",
    "Creative developer & designer",
    "Let's build something amazing together",
    "Coded & Crafted with",
    "Open to new opportunities",
    "Creative developer & designer"
  ];

  return (
    <section 
      ref={sectionRef} 
      className={`contact-final-section ${isVisible ? 'is-visible' : ''}`} 
      id="contact"
    >
      {/* Clean Grid Pattern Background */}
      <div className="grid-background"></div>

      {/* Enhanced Marquee as Top Border */}
      <div className="marquee-top-border">
        <div className="marquee-content-final">
          {/* First set of content */}
          {marqueeItems.map((item, index) => (
            <React.Fragment key={index}>
              <span className="marquee-item">
                {item === "Coded & Crafted with" ? (
                  <>
                    {item} <Heart size={16} fill="#ef4444" color="#ef4444" /> by Ajithesh
                  </>
                ) : (
                  item
                )}
              </span>
              <span className="separator-final">•</span>
            </React.Fragment>
          ))}
          {/* Second set for seamless infinite scroll */}
          {marqueeItems.map((item, index) => (
            <React.Fragment key={`duplicate-${index}`}>
              <span className="marquee-item">
                {item === "Coded & Crafted with" ? (
                  <>
                    {item} <Heart size={16} fill="#ef4444" color="#ef4444" /> by Ajithesh
                  </>
                ) : (
                  item
                )}
              </span>
              <span className="separator-final">•</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="contact-final-container">
        <div className="contact-left-content">
          <h2 className="contact-final-heading">
            Let's Build<br/>
            Together<span className="contact-final-dot">.</span>
          </h2>
          <p className="contact-final-subheading">
            I'm currently available for freelance work and open to discussing new projects.
          </p>
        </div>
        
        <div className="contact-final-buttons">
          <a href={email} className="contact-final-button">
            <Mail size={18} />
            <span>Say Hello</span>
          </a>
          
          <div className="contact-social-links">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="contact-final-card">
              <Github size={20} />
              <span>GitHub</span>
            </a>
            
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="contact-final-card">
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;