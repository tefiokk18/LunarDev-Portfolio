import React from 'react';
import { useScrollAnimation } from '../../Hook/useScrollAnimation';
import './skills.css';

const Skills = () => {
  const scrollRef = useScrollAnimation(0.2);

  const skillGroups = [
    {
      title: "Front-end Sorcery",
      skills: ["HTML5", "CSS3", "JS", "React", "Bootstrap", "Responsive Design"]
    },
    {
      title: "Dark System Core",
      skills: ["Node.js", "MongoDB", "SQL / MySQL", "Python"]
    },
    {
      title: "Artifacts & Spells",
      skills: ["Git", "GitHub", "Figma", "Canva", "Netlify"]
    }
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="fade-in-section" ref={scrollRef}>
        <h2 className="section-title">Skills & Technologies</h2>

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <div key={index} className="skill-card">
              <h3 className="card-subtitle">{group.title}</h3>
              <div className="tags-container">
                {group.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;