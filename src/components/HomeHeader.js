import React from 'react';
import { NavLink } from 'react-router-dom';
import Navigation from './Navigation';
import User from './User';

import imageDecoration from '../assets/Decoration.svg';

const HomeHeader = () => {

  return (
    <>
    <div className="navigation_wrapper">
      <User />
      <Navigation />
    </div>
    <div className="main_section_right">
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
    </>
  );
}

export default HomeHeader;
