import React, { useState } from 'react'; // Importa useState
import './App.css';
import Navbar from './components/Navbar/navbar';
import Home from './components/Home/home';
import About from './components/About/about';
import Skills from './components/Skills/skills';
import Projects from './components/Projects/projects';
import Contact from './components/Contact/contact';
import IntroLoader from './components/IntroLoader/introloader'; // Importa el nuevo componente

function App() {
  const [isLoading, setIsLoading] = useState(true); // Estado para controlar la carga

  const handleFinishedLoading = () => {
    setIsLoading(false); // Cuando el loader termina, actualiza el estado
  };

  return (
    <>
      {isLoading ? (
        <IntroLoader onFinishedLoading={handleFinishedLoading} />
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