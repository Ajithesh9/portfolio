import React, { useState, useEffect } from 'react';
import '../Navbar.css';
// Import the new icons we need for the mobile menu
import { FiLock, FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  // NEW: State to manage the open/closed state of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // NEW: Toggles the menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // NEW: Closes the menu (used when a link is clicked)
  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="/" className="logo">Ajithesh</a>
        {/* No structural changes here, just added a class conditionally */}
        <div className="navbar-right">
          {/* Add 'open' class when menu is toggled on mobile */}
          <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            {/* Added onClick to close the menu after navigation */}
            <li><a href="/" onClick={closeMenu}>Home</a></li>
            <li><a href="/skills" onClick={closeMenu}>Skills</a></li>
            <li><a href="/projects" onClick={closeMenu}>Projects</a></li>
            <li><a href="/experience" onClick={closeMenu}>Experience</a></li>
            <li><a href="/contact" onClick={closeMenu}>Contact</a></li>
          </ul>

          <button className="secure-lock" aria-label="Secure Connection">
            <FiLock size={20} />
          </button>

          {/* NEW: Hamburger menu button, will be hidden on desktop by CSS */}
          <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;