// src/components/Navbar.jsx

import React, { useState, useEffect } from 'react';
import '../Navbar.css';

// Importing icons from their correct libraries
import { TerminalSquare } from 'lucide-react';
import { FiLock, FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // --- NEW LOGIC for SCROLL UP/DOWN ---
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Make the navbar visible if at the very top OR scrolling up
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsNavbarVisible(true);
      } else {
        setIsNavbarVisible(false);
      }
      
      // Update the last scroll position
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]); // Re-run the effect when lastScrollY changes

  const toggleMenu = () => {
    // When opening the mobile menu, ensure the navbar is visible
    if (!isMenuOpen) {
      setIsNavbarVisible(true);
    }
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => setIsMenuOpen(false);

  return (
    // The 'is-visible' class is now controlled by the new scroll direction logic
    // We also add a class to prevent hiding when the mobile menu is open
    <nav className={`navbar ${isNavbarVisible || isMenuOpen ? 'is-visible' : ''}`}>
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