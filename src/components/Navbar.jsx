// src/components/Navbar.jsx

import React, { useState, useEffect } from 'react';
import '../Navbar.css';

// Importing icons from their correct libraries
import { TerminalSquare } from 'lucide-react';
import { FiLock, FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // --- NEW, SIMPLE, AND RELIABLE LOGIC ---
  // We track if the user is at the very top of the page.
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // If user has scrolled more than 100px, they are no longer at the top.
      if (window.scrollY > 100) {
        setIsAtTop(false);
      } else {
        setIsAtTop(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // This runs only once.

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    // The 'is-visible' class is now simply controlled by the 'isAtTop' state.
    <nav className={`navbar ${isAtTop ? 'is-visible' : ''}`}>
      <div className="navbar-container">
        <a href="/" className="logo">
          <TerminalSquare size={28} className="logo-icon" />
          <span>Ajithesh</span>
        </a>
        
        <div className="navbar-right">
          <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <li><a href="#" onClick={closeMenu}>Home</a></li>
            <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
            <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
            <li><a href="#experience" onClick={closeMenu}>Experience</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          </ul>
          <button className="secure-lock" aria-label="Secure Connection">
            <FiLock size={20} />
          </button>
          <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;