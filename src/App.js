import React from 'react';
import {HashRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Register from "./components/Register";
import GiveThings from "./components/GiveThings";
import NotFound from "./components/NotFound";

function App() {

  return (
  <>
    <HashRouter>
      <Switch>
         <Route exact path="/" component={Home}/>
         <Route path="/logowanie" component={Login}/> 
         <Route path="/rejestracja" component={Register}/>
         <Route path="/wylogowano" component={Logout}/>
         <Route path="/oddaj-rzeczy" component={GiveThings}/>
         <Route component={NotFound} />
      </Switch>
    </HashRouter>
  </>
  );
}

export default App;
