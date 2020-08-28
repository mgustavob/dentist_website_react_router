import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Home from './Home'
import Contact from './Contact'
import Procedures from './Procedures'


function App() {
  return (
    <Router>
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route path="/procedures" component={Procedures} />
      <Route path="/contact" component={Contact} />
      {/* <Home />
      <Procedures />
      <Contact /> */}
    </div>
    </Router>
  );
}

export default App;
