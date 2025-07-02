import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import '../Navbar.css';
import { FiLock } from 'react-icons/fi';

const Navbar = () => {
  // State to track whether user has scrolled
  const [scrolled, setScrolled] = useState(false);

  // Effect to handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      // If user scrolls more than 10px, set scrolled to true, otherwise false
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Add event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // The empty array ensures this effect runs only once on mount

  return (
    // Conditionally apply the 'scrolled' class
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="/" className="logo">
          Nadhir.dev
        </a>
        
        <div className="navbar-right">
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/skills">Skills</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/experience">Experience</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>

          <button className="secure-lock" aria-label="Secure Connection">
            <FiLock size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;