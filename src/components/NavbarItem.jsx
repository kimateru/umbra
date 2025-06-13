import React, { useState, useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Navbar = ({ text, isScrolled }) => {
  const controls = useAnimation();
  const pathRef = useRef(null);
  const [pathLength, setPathLength] = useState(0);

  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, []);

  const handleMouseEnter = () => {
    controls.start({
      strokeDashoffset: 0,
      transition: { duration: 0.7, ease: 'linear' }
    });
  };

  const handleMouseLeave = () => {
    controls.start({
      strokeDashoffset: pathLength,
      transition: { duration: 0.5, ease: 'easeInOut' }
    });
  };

  const scrollToSection = (e) => {
    e.preventDefault();
    const element = document.getElementById(text.toLowerCase());
    if (element) {
      const offset = window.innerWidth >= 768 ? 20 : 0; // 20px offset for desktop
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div
      style={{ position: 'relative', display: 'inline-block', padding: '0 15px', cursor: 'pointer' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={scrollToSection}
    >
      <span style={{ 
        fontSize: '17px', 
        fontWeight: '500', 
        color: isScrolled ? '!text-gray-400' : 'white',
        position: 'relative', 
        zIndex: 2 
      }}>
        {text}
      </span>

      <svg
        width="90"
        height="80"
        viewBox="0 0 120 80"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 1,
          overflow: 'visible',
        }}
      >
        <motion.path
          ref={pathRef}
          vectorEffect="non-scaling-stroke"
          d="M16.7,13.4C26.8,6.9,42.7,2.7,60,2.7c29.7,0,55,12.2,55,27.3S90.4,57.3,60,57.3S5,44.9,5,30C5,23.8,9.4,18,16.7,13.4"
          fill="none"
          stroke="#8b6642"
          strokeWidth="2"
          strokeDasharray={pathLength}
          strokeDashoffset={pathLength}
          animate={controls}
          transform="translate(0, 12)"
        />
      </svg>
    </div>
  );
};

export default Navbar;
