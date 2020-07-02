import React from 'react';
import { NavLink } from 'react-router-dom';

const User = () => {

  return (
    <>
    <nav className="user_nav">
      <ul>
        <li><NavLink to="/logowanie">Zaloguj</NavLink></li>
        <li><NavLink to="/rejestracja">Załóż Konto</NavLink></li>
      </ul>
    </nav>
    </>
  );
}

export default User;

