import React, { useEffect, useState } from 'react';
import './index.css';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [bigCirclePosition, setBigCirclePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Update the small cursor instantly
      setPosition({ x: e.clientX, y: e.clientY });

      // Update the big circle with a delay for trailing effect
      setTimeout(() => {
        setBigCirclePosition({ x: e.clientX, y: e.clientY });
      }, 1); // Adjust delay for trailing effect
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    document.addEventListener('mousemove', handleMouseMove);
    document.querySelectorAll('button, a, input').forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.querySelectorAll('button, a, input').forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        className={`big-circle ${isHovering ? 'hover' : ''}`}
        style={{
          left: `${bigCirclePosition.x}px`,
          top: `${bigCirclePosition.y}px`,
        }}
      ></div>
      <div
        className={`custom-cursor ${isHovering ? 'hover' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      ></div>
    </>
  );
};

export default CustomCursor;
