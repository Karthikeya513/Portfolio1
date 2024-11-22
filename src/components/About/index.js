import React from 'react';
import { motion } from 'framer-motion';
import './index.css';

const aboutVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.2,
      ease: 'easeInOut',
      staggerChildren: 0.3,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: 'easeInOut' },
  },
};


function About() {
  return (
    <section id="about" className="section about">
      <div className="background-scroll">
        <h1 className="scrolling-name">Bhavya Bansal</h1>
      </div>
          <motion.div
            className="about-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={aboutVariants}
          >
            <motion.img
              src="https://lemon.io/wp-content/uploads/2023/02/Artboard-15-980x536-optim.jpg"
              alt="Profile"
              className="profile-pic"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{
                duration: 0.75,
                ease: 'linear',
              }}
              whileHover={{ scale: 1.7, transition: { duration: 0.15 } }}
            />
            <motion.h2 className="about-title" variants={textVariants}>
            Get to Know Me
            </motion.h2>
            <motion.p className="about-text" variants={textVariants}>
            I am a passionate technology leader with a strong foundation in full-stack development, artificial intelligence, and software engineering.
             With experience spanning hands-on development to executive decision-making, 
             I excel at designing scalable solutions, leading cross-functional teams, and aligning technology strategies with business objectives. 
             My journey from crafting code to overseeing complex tech ecosystems reflects my commitment to innovation, efficiency, and delivering impactful results.
              I thrive on solving challenging problems and driving technology forward to create meaningful change.
              I enjoy collaborating with teams, solving complex problems, and
              creating impactful software that drives results.
            </motion.p>
          </motion.div>
    </section>
  );
}

export default About;
