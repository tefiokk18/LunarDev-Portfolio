import { useScrollAnimation } from '../../Hook/useScrollAnimation';
import './home.css';

const Home = () => {
  const scrollRef = useScrollAnimation(0.2); // Llamas al hook

  return (
    <section className="hero" id="home">
      <div className="fade-in-section" ref={scrollRef}> {/* Enganchas la ref */}
        <h1 className="hero-title">Building immersive digital experiences</h1>
        
      </div>
    </section>
  );
};

export default Home;