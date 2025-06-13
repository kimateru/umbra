import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const AnimatedCard = ({img, color, classes}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-200px' });

  return (
    <div 
      ref={ref}
      className={`relative mx-auto mt-4 sm:mt-10 rounded-b-full overflow-hidden ${classes}`}
    >
      <motion.div
        className="absolute inset-0 rounded-b-full pointer-events-none z-10"
        initial={{
          borderWidth: '135px',
          borderColor: color,
          opacity: 1
        }}
        animate={inView ? {
          borderWidth: '0px',
          borderColor: color,
          opacity: 0
        } : {
          borderWidth: '135px',
          borderColor: color,
          opacity: 1
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
        className="absolute inset-0 w-full h-full object-cover rounded-b-full z-0"
        initial={{ scale: 1.36 }}
        animate={inView ? { scale: 1 } : { scale: 1.36 }}
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
