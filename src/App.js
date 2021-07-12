import React from 'react';
import './App.css';
import About from './components/About';
import Header from './components/Header';
import Projects from './components/Projects';


function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <div>
          <Projects></Projects>
          <About></About>
        </div>
      </main>
    </div>
  );
}

export default App;
