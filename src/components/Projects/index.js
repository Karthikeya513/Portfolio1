import React from 'react';
import { motion } from 'framer-motion';
import './index.css';

const projects = [
  { id: 1, title: 'Investor Dashboard', description: 'Develop a platform that allows investors to track their portfolio, analyze market trends, and receive personalized recommendations. ' },
  { id: 2, title: 'Enterprise Technology Strategy and Roadmap', description: 'Develop a comprehensive technology strategy and roadmap for the company. ' },
  { id: 3, title: 'AI-Powered Chatbot', description: 'Develop an intelligent chatbot that can handle customer queries, book appointments, or provide recommendations based on NLP.' },
];

const Projects = () => {
  return (
    <section id="projects" className="section projects">
      <motion.h2
        className="section-title flicker"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0.5, 1] }}
        transition={{
          duration: 3,
          repeat: 1,
          ease: 'easeInOut',
          repeatType: 'loop',
        }}
      >
        Work Showcase
      </motion.h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="project-card"
            initial={{ scale: 0.9, rotateX: 0, rotateY: 0 }}
            whileHover={{
              scale: 1.2,
              rotateX: 15,
              rotateY: 15,
              backgroundColor: 'rgba(0, 0, 0.5, 0.2)', // Transparent fill on hover
            }}
            transition={{
              duration: 0.5,
              ease: 'easeInOut',
            }}
          >
            <div className="diamond">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
