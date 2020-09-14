import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import CountryDetails from './components/CountryDetails/CountryDetails';


function App() {
 
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/countryDetails/:countryName">
            <CountryDetails />
          </Route> 
        </Switch>
      </div>
    </Router>
  );
}

export default App;
