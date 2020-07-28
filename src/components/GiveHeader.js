import React from 'react';
import Navigation from './Navigation';
import User from './User';

import imageDecoration from '../assets/Decoration.svg';

const GiveHeader = () => {

  return (
    <>
    <div className="desktop_menu">
      <User />
      <Navigation />
    </div>
    <div className="main_section_right">
        <div className="content">
          <p>Oddaj rzeczy, których już nie chcesz</p>
          <p>POTRZEBUJĄCYM</p>
          <img alt="decoration" src={imageDecoration} />
          <p>Wystarczą 4 proste kroki:</p>
          <div className="buttons_container">
            <button>1. Wybierz rzeczy</button>
            <button>2. Spakuj je w worki</button>
            <button>3. Wybierz fundację</button>
            <button>4. Zamów kuriera</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default GiveHeader;
