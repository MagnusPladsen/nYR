import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Nav from './Components/Nav';
import Home from './Components/Home';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
        <Nav/>
        <Home/>
    </Router>
  );
}

export default App;
