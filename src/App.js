import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Header from './components/Header';
import Projects from './components/Projects';
import Resume from './components/Resume';
import ContactForm from './components/Contact';
import Footer from './components/Footer';

function App(currentProject) {
  
  return (
    <div>
      <Header></Header>
      <main>
        <Projects currentCategory={currentProject}></Projects>
        <About></About>
        <Resume></Resume>
        <ContactForm></ContactForm>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
