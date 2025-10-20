import "./portfolio.css";
import React from 'react';
import Header from './Components/Header';
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";


import './App.css';


function App() {
  return (
    <div>
    <Header />
    <Home />
    <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );


    

}

export default App;
