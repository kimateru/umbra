import React, { useEffect } from 'react'
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

const MobileMenu = ({ open, onClose, items }) => {
  // Handle scroll lock
  useEffect(() => {
    if (open) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [open])

  const scrollToSection = (sectionName) => {
    const element = document.getElementById(sectionName.toLowerCase())
    if (element) {
      const offset = window.innerWidth >= 768 ? 20 : 0; // 20px offset for desktop
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      onClose()
    }
  }

  return (
    <>
      {/* Scrollbar compensator */}
      <div 
        className="fixed top-0 right-0 bottom-0 w-[17px] pointer-events-none z-[2001]"
        style={{ backgroundColor: 'transparent' }}
      />
      
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

            {/* Close button positioned in the same place as the menu button */}
            <div className="fixed top-0 right-0 px-12 md:px-24 py-8 lg:py-6 z-[2100]">
              <div className="flex-1 flex justify-end">
                <button
                  className="w-12 h-12 flex items-center justify-center z-[1100] focus:outline-none rounded-full bg-bronze-umbra text-white hover:bg-black-umbra cursor-pointer transition-colors duration-300"
                  onClick={onClose}
                  aria-label='Close menu'
                >
                  <FiX className="text-2xl" />
                </button>
              </div>
            </div>

            <div className='flex flex-col gap-12 text-3xl font-medium text-bronze-umbra z-10'>
              {items.map((item, index) => (
                <button
                  key={index}
                  className='hover:text-black transition-colors duration-200'
                  onClick={() => scrollToSection(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default MobileMenu 