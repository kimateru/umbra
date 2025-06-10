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
          <DecorationFragment className="top-12 left-4 w-3 h-24" />
          <DecorationFragment className="top-32 left-12 w-3 h-32" />
          <DecorationFragment className="bottom-10 left-8 w-3 h-20" />
          <DecorationFragment className="top-20 right-8 w-3 h-28" />
          <DecorationFragment className="bottom-20 right-12 w-3 h-36" />
          <DecorationFragment className="bottom-8 right-4 w-3 h-16" />
          <DecorationFragment className="bottom-0 left-1/3 w-3 h-12" />
          <DecorationFragment className="bottom-0 right-1/3 w-3 h-16" />
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