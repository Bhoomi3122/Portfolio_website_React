import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';
import Logo from '../Images/image.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div id="navbar-container">
        <img src={Logo} alt="logo" id="logo" />
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </div>

        <ul id="navbar-links" className={isOpen ? "open" : ""}>
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link></li>
          <li><Link to="/accomplishments" onClick={() => setIsOpen(false)}>Accomplishments</Link></li>
          <li><Link to="/resume" onClick={() => setIsOpen(false)}>Resume</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact me</Link></li>
        </ul>
      </div>

      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setIsOpen(false)}>✖</button>
        <ul>
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link></li>
          <li><Link to="/accomplishments" onClick={() => setIsOpen(false)}>Accomplishments</Link></li>
          <li><Link to="/resume" onClick={() => setIsOpen(false)}>Resume</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact me</Link></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
