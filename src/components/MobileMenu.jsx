import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX } from 'react-icons/fi'
import DecorationFragment from './DecorationFragment'

const circleVariants = {
  hidden: {
    clipPath: 'circle(0% at 100% 0%)',
    opacity: 0
  },
  visible: {
    clipPath: 'circle(150% at 50% 50%)',
    opacity: 1,
    transition: {
      type: 'tween',
      ease: 'easeOut',
      duration: 0.3
    }
  },
  exit: {
    clipPath: 'circle(0% at 100% 0%)',
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: 'easeIn'
    }
  }
}

const MobileMenu = ({ open, onClose, items }) => (
  <AnimatePresence>
    {open && (
      <motion.div
        className='fixed inset-0 bg-white z-[2000] flex flex-col items-center justify-center'
        initial='hidden'
        animate='visible'
        exit='exit'
        variants={circleVariants}
      >
        {/* Decorative fragments */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <DecorationFragment left={20} top={60} height={100} width={14} />
          <DecorationFragment left={60} top={180} height={160} width={14} />
          <DecorationFragment left={30} bottom={40} height={90} width={14} />
          <DecorationFragment right={30} top={100} height={120} width={14} />
          <DecorationFragment right={60} bottom={80} height={140} width={14} />
          <DecorationFragment right={20} bottom={30} height={70} width={14} />
          <DecorationFragment left={120} bottom={0} height={60} width={14} />
          <DecorationFragment right={120} bottom={0} height={80} width={14} />
        </div>
        <button
          className='fixed top-9 right-4 text-4xl text-bronze-umbra focus:outline-none'
          onClick={onClose}
          aria-label='Close menu'
        >
          <FiX />
        </button>
        <div className='flex flex-col gap-12 text-3xl font-bold text-bronze-umbra z-10'>
          {items.map((item, index) => (
            <button
              key={index}
              className='hover:text-black transition-colors duration-200'
              onClick={onClose}
            >
              {item}
            </button>
          ))}
        </div>
      </motion.div>
    )}
  </AnimatePresence>
)

export default MobileMenu 