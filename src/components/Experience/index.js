import React from 'react';
import { motion } from 'framer-motion';
import './index.css';

const experiences = [
  {
    id: 1,
    title: 'Chief Technology Officer',
    company: 'Persist Ventures',
    duration: 'Apr 2024 - Present',
    description: 'I am responsible for defining and leading an organizations technological vision and strategy. They oversee the development and integration of technology to ensure it aligns with business goals, fosters innovation, and drives growth.',
  },
  {
    id: 2,
    title: 'CTO @FacesearchAI',
    company: 'Persist Ventures.',
    duration: 'Nov 2023 - Present',
    description: 'At FaceSearchAI, I am responsible role in driving the development and deployment of cutting-edge facial recognition technologies. They oversee the end-to-end technology strategy, ensuring scalable, secure, and high-performance AI solutions',
  },
  {
    id: 3,
    title: 'Full Stack Engineer',
    company: 'Persist Ventures',
    duration: 'Oct 2023 - Present',
    description: 'I am responsible for designing, developing, and maintaining both the front-end and back-end of web applications. They work on user interfaces, server-side logic, databases, APIs, and integration to ensure seamless functionality. ',
  },
  {
    id: 4,
    title: 'AI Software Developer',
    company: 'HeyDaw Technologies Intern',
    duration: 'Aug 2023 - Oct 2023',
    description: 'An an AI Software Developer,I used to make designs, develops, and deploys AI-driven applications and systems to solve complex problems. They build and train machine learning models, integrate AI algorithms into software solutions, and optimize performance for scalability and efficiency.  ',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section experience">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        Professional Journey
      </motion.h2>

      <div className="timeline">
        {experiences.map((experience, index) => (
          <motion.div
            key={experience.id}
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { duration: 1, delay: index * 0.3 },
            }}
          >
            <div className="timeline-dot"></div>
            <div className="card timeline-content ">
              <div className="card-content">
              <h3>{experience.title}</h3>
              <h4>{experience.company}</h4>
              <p className="duration">{experience.duration}</p>
              <p>{experience.description}</p>
              </div>
          </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
