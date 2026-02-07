import { useScrollAnimation } from '../../Hook/useScrollAnimation';
import './about.css';

const About = () => {
  const scrollRef = useScrollAnimation(0.2);

  return (
    <section className="about" id="about">
      <div className="fade-in-section about-container" ref={scrollRef}>
        <div className="about-content">
          
          <div className="about-text">
            <h2 className="section-title">About Me</h2>
            <p className="about-description">
              I am a <strong>Junior Full Stack Developer</strong>, passionate about creating 
              digital products to satisfy people's needs. I believe in the power of 
              good design and clean code to solve real-world problems.
            </p>
            <p className="about-description">
              When I'm not coding, you'll find me exploring new trends, technologies, 
              and tools for both design and code, or simply learning something new 
              to add to my world. I am always ready to work on projects that 
              challenge my limits.
            </p>
          </div>

          <div className="about-image">
            <img src="/kuromi.png" alt="Kuromi Pixel Art" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;