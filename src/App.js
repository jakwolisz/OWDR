import React from 'react';
import {HashRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Register from "./components/Register";

function App() {
  return (
  <>
    <HashRouter>
      <Switch>
         <Route exact path="/" render={ () => <Home/> }/>
         <Route path="/logowanie" render={ () => <Login/> }/>
         <Route path="/rejestracja" render={ () => <Register/> }/>
         <Route path="/wylogowano" render={ () => <Logout/> }/>
      </Switch>
    </HashRouter>
  </>
  );
}

export default App;
