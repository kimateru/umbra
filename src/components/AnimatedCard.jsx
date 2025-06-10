import React from 'react';
import { motion } from 'framer-motion';

const AnimatedCard = ({img, classes}) => {
  return (
    <div 
      className={`relative mx-auto mt-4 sm:mt-10 rounded-t-full overflow-hidden ${classes}`}
    >
      {/* Border Animation Layer */}
      <motion.div
        className="absolute inset-0 rounded-t-full pointer-events-none z-10"
        initial={{
          borderWidth: '195px',
          borderColor: '#8b6642',
          opacity: 1
        }}
        animate={{
          borderWidth: '0px',
          borderColor: '#8b6642',
          opacity: 0
        }}
        transition={{
          duration: 1.6,
          ease: [0.33, 1, 0.68, 1],
          opacity: {
            duration: 0.1,
            delay: 1.3
          }
        }}
        style={{
          borderStyle: 'solid',
          boxSizing: 'border-box',
        }}
      />

      {/* Image Layer */}
      <motion.img
        src={img}
        alt="Animated"
        className="absolute inset-0 w-full h-full object-cover rounded-t-full z-0"
        initial={{ scale: 1.36 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 1.6,
          delay: 0.1,
          ease: [0.33, 1, 0.68, 1],
        }}
      />
    </div>
  );
};

export default AnimatedCard;
