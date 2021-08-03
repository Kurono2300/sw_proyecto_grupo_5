import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import loginPage from './components/public/Login';
import signInPage from './components/public/Signin'

import LogWarning from './components/public/Warning';

import Menu from './components/public/Menu';


import './App.css';

import backgroundImage2 from './pattern2.png'; // Opcion 2

import NavBar from './components/layout/NavBar';
import Dashboard from './components/layout/Dashboard';
//import SearchBar from './components/search/SearchBar'; // La search bar sigue en desarrollo
import Pokemon from './components/pokemon/Pokemon';

class App extends Component {
  render() {
    if(localStorage.getItem('isLogged')){    
      return (
      <Router>
        <div className="App" style={{ background: `url(${backgroundImage2})` }}>
          <NavBar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Dashboard}></Route>
              <Route exact path="/pokemon/:pokemonIndex" component={Pokemon}></Route>
            </Switch>
          </div>
        </div>
      </Router>
    );}

    if(!localStorage.getItem('isLogged')){
      return (
        <Router>
          <div className="App" style={{ background: `url(${backgroundImage2})` }}>
            <NavBar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={LogWarning}></Route>
                <Route exact path="/login" component={loginPage}></Route>
                <Route exact path="/signin" component={signInPage}></Route>
              </Switch>
              <div className="seleccion"><Menu></Menu></div>
            </div>
          </div>
        </Router>
      );
    }
  }
}

export default App;
