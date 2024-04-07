import React from 'react';
import './App.css';
import Header from './components/header/Header'; // Change the import statement to match the casing of the actual file name
import Home from './components/home/Home'; // Change the import statement to match the casing of the actual file name
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services'; // Add the import statement for the Services component
import Qualification from './components/qualification/Qualification'; // Add the import statement for the Qualification component
// import Work from './components/work/Work'; // Add the import statement for the Work component
import Work from './components/work/Work'; // Change the import statement to match the casing of the actual file name
import Testimonials from './components/testimonials/Testimonials'; // Add the import statement for the Testimonials component
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp'; // Add the import statement for the ScrollUp component

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
        {/* <Work/> */}
        <Work/>
        <Testimonials/>
        <Contact/>
        
      </main>
       <Footer/>
       <ScrollUp/>
    </div>
  );
}

export default App;
