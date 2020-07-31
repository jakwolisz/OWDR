import React, { useState } from 'react';
import Navigation from './Navigation/Navigation';
import User from './Navigation/User';

import imageDecoration from '../assets/Decoration.svg';
import imageIks from '../assets/iks.svg';
import imageHamburger from '../assets/hamburger_menu.svg';

const GiveHeader = () => {

  const [isActive, setActive] = useState(false);

  const visibilityChange = () => {
       setActive(!isActive)
  };

  return (
    <>
      <section id="give_header">
      <nav className="desktop_menu">
          <User />
          <Navigation />
          <img className={isActive ? "hamburgerButton hidden" : "hamburgerButton"} src={imageHamburger} onClick={visibilityChange} />
      </nav>
      <nav className={!isActive ? "mobile_menu hidden": "mobile_menu"}>
          <User />
          <Navigation />
          <img className={!isActive ? "iksButton hidden" : "iksButton"} src={imageIks} onClick={visibilityChange} />
      </nav>
      <div className={isActive ? "main_section hidden" : "main_section"}>
          <div className="content">
            <p>Oddaj rzeczy, których już nie chcesz</p>
            <p>POTRZEBUJĄCYM</p>
            <img alt="decoration" src={imageDecoration} />
            <p>Wystarczą 4 proste kroki:</p>
              <ul>
                <li><span>1</span><p>Wybierz rzeczy</p></li>
                <li><span>2</span><p>Spakuj je w worki</p></li>
                <li><span>3</span><p>Wybierz fundację</p></li>
                <li><span>4</span><p>Zamów kuriera</p></li>
              </ul>
          </div>
      </div>
      </section>
    </>
  );
}

export default GiveHeader;
