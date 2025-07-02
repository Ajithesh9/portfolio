import React from 'react';
import '../Navbar.css';

// Importing the moon icon from react-icons
import { FiMoon } from 'react-icons/fi';

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="/" className="logo">
        Nadhir.dev
      </a>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      <button className="theme-toggle" aria-label="Toggle theme">
        <FiMoon size={20} />
      </button>
    </nav>
  );
};

export default Navbar;
