import React, { useContext, useState, useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';

import { FirebaseContext } from './Firebase';

const User = () => {
  const firebase = useContext(FirebaseContext);
  let history = useHistory();
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? setAuthUser( authUser )
        : setAuthUser( null );
    });
  });

    const signOut = () => {
      firebase.doSignOut();
      history.push("/wylogowano")
    }

  const NavigationAuth = () => (

    <nav className="user_nav">
    <ul>
      <li>Cześć {authUser.email}</li>
      <li><NavLink to="/oddaj-rzeczy">Oddaj Rzeczy</NavLink></li>
      <li onClick={signOut}>Wyloguj się</li>
    </ul>
  </nav>

  );

  const NavigationNonAuth = () => (

    <nav className="user_nav">
      <ul>
        <li><NavLink to="/logowanie">Zaloguj</NavLink></li>
        <li><NavLink to="/rejestracja">Załóż Konto</NavLink></li>
      </ul>
    </nav>

  );

  return (
    <>
    {authUser ? <NavigationAuth /> : <NavigationNonAuth />}
    </>
  );


}

export default User;

