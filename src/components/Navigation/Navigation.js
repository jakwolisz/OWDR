import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';

const Navigation = () => {

  return (
    <>
    <nav className="header_nav">
      <ul>
        <li><NavLink to="/">Start</NavLink></li>
        <li><Link spy={true} smooth={true} offset={0} duration={500} to="simple_steps">O co chodzi?</Link></li>
        <li><Link spy={true} smooth={true} offset={0} duration={500} to="about_us">O nas</Link></li>
        <li><Link spy={true} smooth={true} offset={0} duration={500} to="help">Fundacja i organizacje</Link></li>
        <li><Link spy={true} smooth={true} offset={0} duration={500} to="contact">Kontakt</Link></li>
      </ul>
    </nav>
    </>
  );
}

export default Navigation;



