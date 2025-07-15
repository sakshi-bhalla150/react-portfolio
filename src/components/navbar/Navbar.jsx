import React, { useState, useEffect } from 'react';
import './Navbar.css';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-theme");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const handleLinkClick = (section) => {
    setMenu(section);
    setIsMenuOpen(false);
  };

  return (
    <div className='navbar'>
      <h1>Sakshi</h1>

      {/* Theme toggle */}
      <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)} title="Toggle Theme">
        {darkMode ? (
          // SUN SVG (for dark mode, to switch to light)
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
               strokeWidth={1.5} stroke="currentColor" width="24" height="24">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
          </svg>
        ) : (
          // MOON SVG (for light mode, to switch to dark)
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
               strokeWidth={1.5} stroke="currentColor" width="24" height="24">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75
              0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21
              12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
          </svg>
        )}
      </button>

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

        {["home", "about", "projects", "contact"].map((item) => (
          <li key={item}>
            <AnchorLink
              className='anchor-link'
              offset={50}
              href={`#${item}`}
            >
              <p onClick={() => handleLinkClick(item)}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </p>
            </AnchorLink>
            {menu === item && <img src={underline} alt="" />}
          </li>
        ))}
      </ul>

      {/* Connect button */}
      <div className='nav-connect'>
        <AnchorLink className='anchor-link' offset={50} href='#contact'>
          Connect with Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;