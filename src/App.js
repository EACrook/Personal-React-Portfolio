import React from 'react';
import './App.css';
import About from './components/About';
import Header from './components/Header';
import Nav from './components/Navigation';


function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
