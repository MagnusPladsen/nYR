import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Nav from './Components/Nav';
import Home from './Components/Home';
import SearchPage from './Components/SearchPage';

function App() {
  return (
    <Router>
        <Nav/>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
