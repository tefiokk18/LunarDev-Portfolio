import React, { useState } from 'react';
import { useScrollAnimation } from '../../Hook/useScrollAnimation';
import './projects.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImg, setCurrentImg] = useState(0);
  
  // Conectamos el hook de animación
  const projectsRef = useScrollAnimation(0.1); 

  const projectsData = [
    {
      title: "TECHBLOG",
      description: "Un espacio minimalista enfocado en la legibilidad y el diseño editorial moderno.",
      images: ["/1.png", "/3.png", "/4.png"]
    },
    {
      title: "NEBULA",
      description: "Prototipo de interfaz cinemática para una plataforma de streaming inmersiva.",
      images: ["/6.png", "/7.png", "/8.png"]
    },
    {
      title: "GLAMOUR",
      description: "Concepto de tienda premium de maquillaje con flujos de navegación elegantes.",
      images: ["/10.png", "/11.png", "/12.png"]
    }
  ];

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setCurrentImg(0); // Reiniciar a la primera imagen
  };

  const nextSlide = (e) => {
    e.stopPropagation();
    setCurrentImg((prev) => (prev === selectedProject.images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = (e) => {
    e.stopPropagation();
    setCurrentImg((prev) => (prev === 0 ? selectedProject.images.length - 1 : prev - 1));
  };

  return (
    <section className="projects-section" id="projects" ref={projectsRef}>
      <h1 className="section-title">My Projects</h1>
      
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div 
            key={index} 
            className="project-card" 
            onClick={() => handleOpenModal(project)}
          >
            <div className="project-image-container">
              <img src={project.images[0]} alt={project.title} className="project-thumb" />
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL DE GALERÍA */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedProject(null)}>✕</button>
            
            <h2 style={{color: '#c084fc', marginBottom: '15px'}}>{selectedProject.title}</h2>

            {/* Navegación por flechas */}
            {selectedProject.images.length > 1 && (
              <>
                <button className="nav-btn prev-btn" onClick={prevSlide}>❮</button>
                <button className="nav-btn next-btn" onClick={nextSlide}>❯</button>
              </>
            )}

            <div className="carousel-window">
              <div 
                className="simple-carousel" 
                style={{ transform: `translateX(-${currentImg * 100}%)` }}
              >
                {selectedProject.images.map((img, i) => (
                  <img key={i} src={img} alt="preview" className="carousel-img" />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;