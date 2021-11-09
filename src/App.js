import logo from './logo.svg';
import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Navbar from './Navbar';
import Terms from './Terms';
import iii from './iii'
import Profile from './Profile';
import Firestore from './Components/Firestore';



function App() {
  return (
    
      <Router>
        <Navbar />
        
        <main>
        <Switch>
        <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/terms">
            <Terms />
          </Route>
         
       
        </Switch>
        </main>
     
    </Router>
      
    
  );
}

export default App;
