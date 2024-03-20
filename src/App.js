import React from 'react';
import './App.css';
import Header from './components/header/Header'; // Change the import statement to match the casing of the actual file name
import Home from './components/home/Home'; // Change the import statement to match the casing of the actual file name

function App() {
  return (
    <div>
      <Header/>
      <main className='main'>
        <Home/>
      </main>
    </div>
  );
}

export default App;
