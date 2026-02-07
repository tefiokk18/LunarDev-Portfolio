import React, { useState, useEffect } from 'react';
import { Home, User, Briefcase, Code, Mail } from 'lucide-react';
import './navbar.css';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
  const handleScroll = () => {
    // Lista exacta de tus IDs
    const sections = ['home', 'about', 'projects', 'skills', 'contact'];
    
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        const rect = element.getBoundingClientRect();
        
        // Si la parte superior de la sección está en el área visible (ajustado 150px de margen)
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActiveSection(id);
        }
      }
    });
  };

  window.addEventListener('scroll', handleScroll);
  // Ejecutamos una vez al cargar por si ya estamos en medio de la página
  handleScroll(); 

  return () => window.removeEventListener('scroll', handleScroll);
}, []);

  const navItems = [
    { id: 'home', icon: <Home size={20} />, label: 'Home' },
    { id: 'about', icon: <User size={20} />, label: 'About' },
    { id: 'projects', icon: <Briefcase size={20} />, label: 'Projects' },
    { id: 'skills', icon: <Code size={20} />, label: 'Skills' },
    { id: 'contact', icon: <Mail size={20} />, label: 'Contact' },
  ];

  return (
    <nav className="navbar">
      <ul className="nav-list">
        {navItems.map((item) => (
          <li key={item.id} className="nav-item">
            <a
              href={`#${item.id}`}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => setActiveSection(item.id)} // Forzar estado al hacer click
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;