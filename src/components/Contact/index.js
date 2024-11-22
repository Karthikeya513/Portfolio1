import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import './index.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000); // Show "Thank you" message for 3 seconds
  };

  return (
    <section id="contact" className="contact">
      <motion.div
        className="contact-title"
        initial={{ opacity: 0, x: '-100vw' }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, type: 'spring', stiffness: 50 }}
      >
        <h2>Contact Me</h2>
      </motion.div>

      <motion.form
        className="contact-form"
        initial={{ opacity: 0, x: '100vw' }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        onSubmit={handleSubmit}
      >
        <motion.div
          className="form-group"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </motion.div>

        <motion.div
          className="form-group"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </motion.div>

        <motion.div
          className="form-group"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </motion.div>

        <motion.button
          type="submit"
          className="submit-button"
          whileHover={{
            backgroundColor: '#638aca',
            color: '#fff',
            scale: 1.1,
          }}
          transition={{ duration: 0.3 }}
        >
          Send Message
        </motion.button>
      </motion.form>

      {submitted && (
        <motion.div
          className="thank-you"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h3>Thank You for Your Message!</h3>
        </motion.div>
      )}

      <div className="social-media-icons">
        <motion.a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.5, rotate: 15 }}
          transition={{ type: 'keyframes', stiffness: 300 }}
        >
          <FaFacebook size={50} />
        </motion.a>

        <motion.a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.5, rotate: 15 }}
          transition={{ type: 'keyframes', stiffness: 300 }}
        >
          <FaTwitter size={50} />
        </motion.a>

        <motion.a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.5, rotate: 15 }}
          transition={{ type:"keyframes", stiffness: 300 }}
        >
          <FaLinkedin size={50} />
        </motion.a>

        <motion.a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.5, rotate: 30 }}
          transition={{ type: 'keyframes', stiffness: 300 }}
        >
          <FaGithub size={50} />
        </motion.a>
      </div>
    </section>
  );
};

export default Contact;
