import React from 'react';
import { motion } from 'framer-motion';
import './index.css';

const Mission = () => {
  return (
    <section id="mission" className="mission">
      {/* Background Animation */}
      <div className="background-animation">
        <div className="circle"></div>
        <div className="square"></div>
        <div className="triangle"></div>
      </div>

      {/* Content */}
      <div className="content">
        <motion.h2
          className="mission-heading"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          MY Mission
        </motion.h2>

        <motion.p
          className="mission-content"
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          My mission is to inspire, innovate, and create meaningful solutions 
          that empower individuals and organizations. We aim to push boundaries 
          through technology, creativity, and collaboration to make a lasting 
          positive impact on the world.
        </motion.p>
      </div>
    </section>
  );
};

export default Mission;
