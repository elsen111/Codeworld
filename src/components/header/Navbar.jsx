import React from 'react';
import { NavLink } from "react-router-dom";
import LinkButton from './LinkButton';
import './Navbar.css';

export default function Navbar({ isOpen, className }) {
  return (
    <nav className={`Navbar ${isOpen ? 'open' : ''}`}>
      <NavLink to='/about'>
        <LinkButton content="Haqqımızda" />
      </NavLink>

      <NavLink to='/departments'>
        <LinkButton content="İxtisaslar" />
      </NavLink>

      <NavLink to='/scholarships'>
        <LinkButton content="Təqaüdlər" />
      </NavLink>

      <NavLink to='/contact'>
        <LinkButton content="Əlaqə" />
      </NavLink>
      

        {/* <LinkButton content="İxtisaslar" />
        <LinkButton content="Təqaüdlər" />
        <LinkButton content="Əlaqə" /> */}
    </nav>
  );
}
