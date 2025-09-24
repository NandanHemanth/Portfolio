import React from 'react';
import { motion } from 'framer-motion';
import Header from './sections/Header';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import RubeGoldbergMachine from './components/RubeGoldbergMachine';
import './App.css';

function App() {
  return (
    <div className="App">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <RubeGoldbergMachine />
        <Header />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </motion.div>
    </div>
  );
}

export default App;
