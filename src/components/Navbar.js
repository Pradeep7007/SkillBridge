import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assests/logo.png';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavigate = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-logo-name" onClick={() => handleNavigate('/')}>
        <img src={logo} alt="SkillBridge Logo" className="nav-logo" />
        <span className="nav-name">SkillBridge</span>
      </div>

      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <span className="nav-link" onClick={() => handleNavigate('/')}>Home</span>
        <span className="nav-link" onClick={() => handleNavigate('/courses')}>Course</span>
        <span className="nav-link" onClick={() => handleNavigate('/about')}>About</span>
        <span className="nav-link" onClick={() => handleNavigate('/price')}>Price</span>
      </div>

      <div className="nav-toggle" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? 'change' : ''}`}></div>
        <div className={`bar ${isOpen ? 'change' : ''}`}></div>
        <div className={`bar ${isOpen ? 'change' : ''}`}></div>
      </div>
    </nav>
  );
};

export default Navbar;
