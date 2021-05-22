import React from 'react';
import './App.css';
import './components/Nav/Nav.css';
import './components/Landing/Landing.css';

import Nav from './components/Nav/Nav';
import Landing from './components/Landing/Landing';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app">
      <Nav />
      <Landing />
      <Footer />
    </div>
  );
}

export default App;
