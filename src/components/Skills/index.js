import React from 'react';
import { motion } from 'framer-motion';
import './index.css';

const skills = [
  { id: 1, name: 'Promt Engineering',percent:"80%", icon: '💡' },
  { id: 2, name: 'Natural Language Processing',percent:"75%", icon: '🧠'},
  { id: 3, name: 'Artificial Intelligence',percent:"80%", icon: '🤖' },
  { id: 4, name: 'React.Js',percent:"85%", icon: '⚛️' },
  { id: 5, name: 'Node.js',percent:"80%", icon: '🟢' },
  { id: 6, name: 'Python',percent:"85%", icon: '🐍' },
  { id: 7, name: 'Docker',percent:"75%", icon: '🐳' },
  { id: 8, name: 'Kubernetes',percent:"70%", icon: '☸️' },
  { id: 9, name: 'MongoDB',percent:"90%", icon: '🍃' },
];

const Skills = () => {
  return (
    <section id="skills" className="section skills">
      <h2 className="section-title">
        My Abilities
      </h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <motion.div
            key={skill.id}
            className="skill-card"
            initial={{ rotateY: 0 }}
            whileHover={{
              rotateY: 180,
              scale: 1.1, // Boost effect: scale up the card
              boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.3)', // Shadow effect
              opacity: 0.9, // Slight transparency on hover
            }}
            transition={{
              duration: 0.6,
              ease: 'easeInOut',
            }}
          >
            <div className="card-front">
              <span className="skill-icon">{skill.icon}</span>
              <h3>{skill.name}</h3>
              <h1>{skill.percent}</h1>
            </div>
            <div className="card-back">
              <h3>{skill.name}</h3>
              <p>Expertise in {skill.name} with hands-on projects.</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
