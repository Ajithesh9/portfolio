import React from 'react';
import '../Navbar.css';

// Importing the Lock icon from react-icons
import { FiLock } from 'react-icons/fi';

const Navbar = () => {
  return (
    // The main nav element is now fixed and handles the background
    <nav className="navbar">
      {/* Inner container to constrain content width and handle layout */}
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