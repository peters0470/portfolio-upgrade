import './App.css';
import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <About></About>
      <Contact></Contact> 
      <Resume></Resume>
    </div>
  );
}

export default App;
