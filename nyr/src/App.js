import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Nav from './Components/Nav';
import Home from './Components/Home';

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
