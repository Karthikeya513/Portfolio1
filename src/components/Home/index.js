import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import About from '../About';
import Experience from '../Experience';
import Skills from '../Skills';
import Projects from '../Projects';
import Contact from '../Contact';
import Philosophy from '../Philosophy';
import Navbar from '../Navbar';
import Mission from '../Mission';
import Custom from '../Custom';

import './index.css';

const Home = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "Heello I'm Bhavya Bansal ";

  // Typing effect
  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setTypedText((prev) => prev + fullText[index]);
      index++;
      if (index === fullText.length-1) {
        clearInterval(typingInterval);
      }
    }, 100); // Adjust typing speed (in ms)
    return () => clearInterval(typingInterval);
  }, []);

  return (
  <>
     <div>
      <Custom/>
      <Navbar/>
      <section id="home" className="home">
      <div className="background-animation">
        <div className="circle"></div>
      </div>
      <div className="intro">
        <motion.h1
          className="title"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <span>{typedText}</span>
        </motion.h1>

        <motion.p
          className="description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          A visionary Chief Technology Officer (CTO) with a robust foundation in full-stack development, AI solutions, and software engineering. Skilled in leading cross-functional teams, aligning technology with business goals, and driving innovation through scalable architectures.
        </motion.p>

        <motion.button
          className="cta-button"
          whileHover={{
            scale: 1.1,
            rotate: 360,
            transition: { duration: 0.3 },
          }}
          whileTap={{ scale: 0.9 }}
        >
          Get In Touch
        </motion.button>
      </div>

      <motion.div
        className="image-container"
        initial={{ x: -300, opacity: 0.5 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 3, type: "keyframes", stiffness: 50 }}
      >
        <img src="https://media.licdn.com/dms/image/v2/D5603AQE1zhvoksEtgw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1723828613809?e=1737590400&v=beta&t=GwwjX2i5r8UkbpgHrBjkIoxuvWncs8nZyhOSwQWONXE" alt="Profile" className="profile-image" />
      </motion.div>
    </section>

      <About/>
      <Experience/>
      <Skills/>
      <Projects/>
      <Philosophy/>
      <Mission/>
      <Contact/>
    </div>
  </>
  )
}
export default Home;
