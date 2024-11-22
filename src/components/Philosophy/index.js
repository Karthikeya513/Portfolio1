import React from 'react';
import { motion } from 'framer-motion';
import './index.css';

const Philosophy = () => {
  return (
    <section id="philosophy" className="philosophy">
      <div className="background-scroll">
        <h1 className="scrolling-name">I believe in continuous learning and innovation. </h1>
      </div>

      <div className="content">
        <motion.h2
          className="philosophy-heading"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          My Philosophy
        </motion.h2>

        <motion.p
          className="philosophy-content"
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          I believe in continuous learning and innovation. Embracing challenges 
          and solving problems with creativity and perseverance is my guiding principle. 
          My philosophy is to stay curious, inspire others, and make a positive impact 
          through my work.
        </motion.p>
      </div>
    </section>
  );
};

export default Philosophy;
