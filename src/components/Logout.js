import React from "react";
import { NavLink } from "react-router-dom";
import imageDecoration from '../assets/Decoration.svg';


const Logout = () => {

  return (
    <>
    <section id="logout">
      <div className="logout_wrapper">
          <p>Wylogowanie nastąpiło pomyślnie</p>
          <img alt="decoration" src={imageDecoration} />
          <ul>
            <li><NavLink to="/">Główna</NavLink></li>
          </ul>
        </div>
    </section>
    </>
  );
};

export default Logout;
