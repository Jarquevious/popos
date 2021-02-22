import { HashRouter as Router, Route } from 'react-router-dom'
import React from 'react'
import './App.css';
import Title from './Title.js';
import POPOSList from './POPOSList';
import Footer from './Footer';



function App() {
  return(
    <Router>

      <div className="App">
        <Title />
        <POPOSList />
        <Footer />
      </div> 
      
    </Router>
      
  );
}

export default App;
