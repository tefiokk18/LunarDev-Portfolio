import React, { useState } from 'react'; // Importa useState
import './App.css';
import Navbar from './components/Navbar/navbar';
import Home from './components/Home/home';
import About from './components/About/about';
import Skills from './components/Skills/skills';
import Projects from './components/Projects/projects';
import Contact from './components/Contact/contact';
import IntroLoader from './components/introLoader/introloader'; 

function App() {
  const [isLoading, setIsLoading] = useState(true); 

  const handleFinishedLoading = () => {
    setIsLoading(false); 
  };

  return (
    <>
      {isLoading ? (
       <IntroLoader onFinished={() => setIsLoading(false)} />
      ) : (
        
        <>
          <Navbar />
          <Home />
          <About />
          <Projects />
           <Skills />
          <Contact />
        </>
      )}
    </>
  );
}

export default App;