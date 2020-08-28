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
import WidgetShow from './WidgetShow'
import ForNewPatients from './ForNewPatients'
import GeneralDentistry from './GeneralDentistry'
import Blog from './Blog'

function App() {
  const procedures = [
    "Deep Cleaning",
    "Oral Surgery",
    "Root Canal",
    "Crown",
    "Implants",
    "Fillings"
  ]

  return (
    <Router>
    <div className="App">
      <nav>
        <Link to="/"><button>Home</button></Link>{'      '}
        <Link to="/procedures"><button>Procedures</button></Link>{'      '}
        <Link to="fornewpatients"><button>For New Patients</button></Link>
        <Link to="/contact"><button>Contact Us</button></Link>
        <Link to="/generaldentistry"><button>General Dentistry</button></Link>
        <Link to="/blog"><button>Blog</button></Link>
      </nav>
      <Route exact path="/" component={Home} />
      <Route path="/procedures" render={()=><Procedures procedures={procedures}/>}/>
      <Route path="/contact" component={Contact} />
      <Route path="/widgets/:id" render={(props) => <WidgetShow procedures={procedures} {...props}/>}/>
      <Route path="/fornewpatients" component={ForNewPatients} />
      <Route path="/generaldentistry" component={GeneralDentistry} />
      <Route path="/blog" component={Blog} />
      {/* <Home />
      <Procedures />
      <Contact /> */}
    </div>
    </Router>
  );
}

export default App;
