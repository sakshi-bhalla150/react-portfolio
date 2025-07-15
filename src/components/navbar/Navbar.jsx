import React, { useState } from 'react';
import './Navbar.css';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (section) => {
    setMenu(section);
    setIsMenuOpen(false); // close menu after link click
  };

  return (
    <div className='navbar'>
      <h1>Sakshi</h1>

      {/* Hamburger icon */}
      <img
        src={menu_open}
        onClick={() => setIsMenuOpen(true)}
        alt="open menu"
        className='nav-mob-open'
      />

      {/* Nav menu */}
      <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
        {/* Cross icon */}
        <img
          src={menu_close}
          onClick={() => setIsMenuOpen(false)}
          alt="close menu"
          className="nav-mob-close"
        />

        <li>
          <AnchorLink className='anchor-link' href='#home'>
            <p onClick={() => handleLinkClick("home")}>Home</p>
          </AnchorLink>
          {menu === "home" && <img src={underline} alt="" />}
        </li>

        <li>
          <AnchorLink className='anchor-link' offset={50} href='#about'>
            <p onClick={() => handleLinkClick("about")}>About Me</p>
          </AnchorLink>
          {menu === "about" && <img src={underline} alt="" />}
        </li>

        <li>
          <AnchorLink className='anchor-link' offset={50} href='#projects'>
            <p onClick={() => handleLinkClick("projects")}>Projects</p>
          </AnchorLink>
          {menu === "projects" && <img src={underline} alt="" />}
        </li>

        <li>
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            <p onClick={() => handleLinkClick("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" && <img src={underline} alt="" />}
        </li>
      </ul>

      {/* Connect button (visible on desktop only) */}
      <div className='nav-connect'>
        <AnchorLink className='anchor-link' offset={50} href='#contact'>
          Connect with Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;