import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import './index.css';

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          Portfolio
        </motion.h1>
      </div>

      <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-menu' : ''}`}>
        {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <a href={`#${item.toLowerCase()}`} onClick={() => setMobileMenuOpen(false)}>
              {item}
            </a>
          </motion.li>
        ))}
      </ul>

      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
}

export default Navbar;
