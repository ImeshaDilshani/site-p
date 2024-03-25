import React from 'react';
import './App.css';
import Header from './components/header/Header'; // Change the import statement to match the casing of the actual file name
import Home from './components/home/Home'; // Change the import statement to match the casing of the actual file name
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services'; // Add the import statement for the Services component
import Qualification from './components/qualification/Qualification'; // Add the import statement for the Qualification component

function App() {
  return (
    <div>
      <Header/>
      <main className='main'>
        <Home/>
        <About/>
        <Skills/>
        <Services/>
        <Qualification/>
      </main>
    </div>
  );
}

export default App;
