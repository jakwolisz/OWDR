import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import User from './Navigation/User';

import imageDecoration from '../assets/Decoration.svg';
import imageIks from '../assets/iks.svg';
import imageHamburger from '../assets/hamburger_menu.svg';

const HomeHeader = () => {

  const [isActive, setActive] = useState(false);

  const visibilityChange = () => {
       setActive(!isActive)
  };

  return (
    <>
     <section id="header">
      <nav className="desktop_menu">
          <User />
          <Navigation />
          <img alt="hamburger" className={isActive ? "hamburgerButton hidden" : "hamburgerButton"} src={imageHamburger} onClick={visibilityChange} />
      </nav>
      <nav className={!isActive ? "mobile_menu hidden": "mobile_menu"}>
          <User />
          <Navigation />
          <img alt="iks" className={!isActive ? "iksButton hidden" : "iksButton"} src={imageIks} onClick={visibilityChange} />
      </nav>
      <div className={isActive ? "main_section hidden" : "main_section"}>
          <div className="content">
            <p>Zacznij Pomagać!</p>
            <p>Oddaj niechciane rzeczy w zaufane ręce</p>
            <img alt="decoration" src={imageDecoration} />
            <div className="buttons_container">
              <button><NavLink to="/logowanie">ODDAJ RZECZY</NavLink></button>
              <button><NavLink to="/logowanie">ZORGANIZUJ ZBIÓRKĘ</NavLink></button>
            </div>
          </div>
      </div>
    </section>
    </>
  );
}

export default HomeHeader;
