import React, { useState } from 'react';
import Navbar from './Navbar';
import './Header.css';
import menuBar from '../../assets/icons/menu-bar.svg';
import closeIcon from '../../assets/icons/close.svg'; // optional close icon
import Logo from '../logo/Logo.jsx';
import LinkButton from './LinkButton.jsx';
import logo from '../../assets/icons/logo_blue.svg';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header className={`Header ${menuOpen ? 'menu-open' : ''}`}>
      <div className="header-wrapper">
        <Logo logoUrl={logo} />

        {/* Navbar (hidden on small screens by default) */}
        <Navbar isOpen={menuOpen} />

        {/* Sign-up button */}
        <LinkButton content="Qeydiyyat" className={`sign-up-btn ${menuOpen ? 'visible' : ''}`} />

        {/* Hamburger icon */}
        <div className="menu-bar" onClick={toggleMenu}>
          <img src={menuOpen ? closeIcon : menuBar} alt="menu" />
        </div>
      </div>
    </header>
  );
}
