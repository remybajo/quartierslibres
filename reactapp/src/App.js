import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";





//import PageProfil from "./pageprofil";

import Accueil from "./accueil";
import Validation from "./validation";
import Landing from "./landing";
//import Cookies from 'js-cookie';


function App(props) {
  return (
   
      <Router>
        <Switch>
          <Route component={Landing} path="/landing" exact />
          <Route component={Accueil} path="/" exact />
          <Route component={Validation} path="/validation/:id" exact />
        </Switch>
      </Router>
  
  );
}

export default App;