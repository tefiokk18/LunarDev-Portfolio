import React from 'react';
import './contact.css';
import { useScrollAnimation } from '../../Hook/useScrollAnimation';
import { FaWhatsapp, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; 

const Contact = () => {
  // 1. ACTIVAMOS EL HOOK (esto quita el color desvanecido en el import)
  const contactRef = useScrollAnimation(0.1);

  return (
    // 2. CONECTAMOS LA REF y añadimos una clase para el fondo de Kuromi
    <section 
      className="contact-section kuromi-bg" 
      id="contact" 
      ref={contactRef}
    >
      <h1 className="section-title">Enchant my Inbox</h1>
      
      <div className="contact-container">
        {/* Formulario */}
        <form className="contact-form">
          <div className="input-group">
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className="input-group">
            <input type="email" placeholder="Your Email" required />
          </div>
          <div className="input-group">
            <textarea placeholder="Your Message" rows="5" required></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Spell</button>
        </form>

        {/* Redes Sociales */}
        <div className="social-sidebar">
          <a href="https://wa.me/+5493816612976" target="_blank" rel="noreferrer" className="social-icon whatsapp">
            <FaWhatsapp />
          </a>
          <a href="https://instagram.com/sthjuarezz._" target="_blank" rel="noreferrer" className="social-icon instagram">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com/in/stephania-juarez-a2b0723a0" target="_blank" rel="noreferrer" className="social-icon linkedin">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;