import React, { useState } from 'react';
import './Navbar.css';
import underline from '../../assets/nav_underline.svg';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (section) => {
    setMenu(section);
    setIsMenuOpen(false); // Close mobile menu after link click
  };

  return (
    <div className='navbar'>
      <h1>Sakshi</h1>

      {/* Hamburger icon for mobile */}
      <img
        src={menu_open}
        onClick={() => setIsMenuOpen(true)}
        alt="open menu"
        className='nav-mob-open'
      />

      {/* Navigation menu */}
      <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
        {/* Close icon inside menu */}
        <img
          src={menu_close}
          onClick={() => setIsMenuOpen(false)}
          alt="close menu"
          className="nav-mob-close"
        />

        <li>
          <a className='anchor-link' href="#home" onClick={() => handleLinkClick("home")}>
            Home
          </a>
          {menu === "home" && <img src={underline} alt="underline" />}
        </li>

        <li>
          <a className='anchor-link' href="#about" onClick={() => handleLinkClick("about")}>
            About Me
          </a>
          {menu === "about" && <img src={underline} alt="underline" />}
        </li>

        <li>
          <a className='anchor-link' href="#projects" onClick={() => handleLinkClick("projects")}>
            Projects
          </a>
          {menu === "projects" && <img src={underline} alt="underline" />}
        </li>

        <li>
          <a className='anchor-link' href="#contact" onClick={() => handleLinkClick("contact")}>
            Contact
          </a>
          {menu === "contact" && <img src={underline} alt="underline" />}
        </li>
      </ul>

      {/* Connect Button (desktop only) */}
      <div className='nav-connect'>
        <a className='anchor-link' href="#contact">Connect with Me</a>
      </div>
    </div>
  );
};

export default Navbar;