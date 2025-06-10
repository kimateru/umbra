import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import AnimatedCard from './AnimatedCard'
import DecorationFragment from './DecorationFragment'
/*
Название ресторана, краткий слоган
Фоновое изображение/видео
*/

const Hero = () => {
  const { scrollYProgress } = useScroll();
  // Example transforms for scroll-triggered effects
  const xLeft = useTransform(scrollYProgress, [0, 0.3], [0, -60]);
  const xRight = useTransform(scrollYProgress, [0, 0.3], [0, 60]);
  const fade = useTransform(scrollYProgress, [0, 0.3, 0.5], [1, 0.7, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.7]);

  return (
    <header className="pt-[120px] flex flex-col lg:flex-row justify-center lg:justify-start items-center relative min-h-screen px-8 sm:px-20 overflow-hidden">
      {/* Animated bronze-umbra circle background */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-full bg-bronze-umbra"
        style={{ width: '80vw', maxWidth: 900, height: '80vw', maxHeight: 900, opacity: 0.18 }}
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.18 }}
        transition={{ duration: 1.4, ease: [0.33, 1, 0.68, 1] }}
      />

      {/* Left: Overlay text and image (column on mobile) */}
      <div className="relative flex flex-col items-center w-full lg:w-auto lg:flex-[0_0_60%]">
        <motion.div
          className="relative z-20 text-center w-full flex flex-col items-center top-[0px] lg:absolute lg:top-[40px] lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2"
          initial={{ y: 60, scale: 1.15, opacity: 0 }}
          animate={{ y: 0, scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
        >
          <motion.span
            className="italic font-light text-black text-[40px] xs:text-[56px] md:text-[72px] lg:text-[88px] xl:text-[120px] leading-none"
            initial={{ y: 40, scale: 1.1, opacity: 0, letterSpacing: '0.1em' }}
            animate={{ y: 0, scale: 1, opacity: 1, letterSpacing: '0em' }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
          >
            Welcome to
          </motion.span>
          <motion.h1
            className="text-[56px] xs:text-[72px] md:text-[90px] lg:text-[110px] xl:text-[140px] font-bold text-bronze-umbra drop-shadow-lg uppercase tracking-wide leading-none"
            initial={{ y: 60, scale: 1.18, opacity: 0, letterSpacing: '0.2em' }}
            animate={{ y: 0, scale: 1, opacity: 1, letterSpacing: '0.02em' }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.33, 1, 0.68, 1] }}
          >
            Umbra
          </motion.h1>
        </motion.div>
        <div className="w-full flex justify-center">
          <AnimatedCard
            img="hero.png"
            classes="w-full h-[550px] sm:h-[750px] md:w-[500px] md:h-[650px] lg:w-[700px] lg:h-[950px]"
          />
        </div>
      </div>


      {/* Text overlay */}
      <motion.div
        className="md:relative z-20 text-black text-lg md:text-2xl font-light leading-relaxed md:w-[520px] mt-4 md:mt-0"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.75, ease: [0.33, 1, 0.68, 1] }}
      >
        <span className="font-semibold text-black text-3xl mb-2 block tracking-wide">Step into Umbra</span>
        <p>
          Where the charm of urban Europe meets timeless elegance.
          <br /><br />
          Immerse yourself in an atmosphere of curated design, bold flavor, and intimate ambiance.
          From delicate plating to wine-paired moments, Umbra is more than dining — it's a refined ritual.
        </p>
      </motion.div>

      {/* Decoration fragments - left side with scroll effect */}
      <DecorationFragment className="top-[100px] md:top-[40px] left-[10px] md:left-[700px] w-[10px] md:w-[19px] h-[120px]" motionStyle={{ x: xLeft, opacity: fade, scale }} />
      <DecorationFragment className="top-0 left-[30px] md:left-[30px]  w-[10px] md:w-[19px] h-[180px]" motionStyle={{ x: xLeft, opacity: fade, scale }} />
      <DecorationFragment className="top-[60px] right-[5px] md:left-[70px] w-[10px] md:w-[19px] h-[220px] " motionStyle={{ x: xLeft, opacity: fade, scale }} />
      <DecorationFragment className="top-[120px] left-[110px]  w-[10px] md:w-[19px] h-[140px] hidden md:block" motionStyle={{ x: xLeft, opacity: fade, scale }} />
      <DecorationFragment className="top-[180px] left-[150px]  w-[10px] md:w-[19px] h-[90px] hidden md:block" motionStyle={{ x: xLeft, opacity: fade, scale }} />

      {/* Decoration fragments - right side with scroll effect */}
      <DecorationFragment className="top-[120px] right-[40px] w-4 h-[220px]  w-[10px] md:w-[19px] hidden md:block" motionStyle={{ x: xRight, opacity: fade, scale }} />
      <DecorationFragment className="top-[40px] right-[80px] w-4 h-[140px]  w-[10px] md:w-[19px] hidden md:block" motionStyle={{ x: xRight, opacity: fade, scale }} />
      <DecorationFragment className="top-[200px] right-[120px] w-4 h-[90px]  w-[10px] md:w-[19px] hidden md:block " motionStyle={{ x: xRight, opacity: fade, scale }} />
      <DecorationFragment className="top-[120px] right-[200px] w-4 h-[220px]  w-[10px] md:w-[19px] hidden md:block" motionStyle={{ x: xRight, opacity: fade, scale }} />
      <DecorationFragment className="top-[40px] right-[240px] w-4 h-[140px]  w-[10px] md:w-[19px] hidden md:block" motionStyle={{ x: xRight, opacity: fade, scale }} />
      <DecorationFragment className="top-[200px] right-[280px] w-4 h-[90px]  w-[10px] md:w-[19px] hidden md:block " motionStyle={{ x: xRight, opacity: fade, scale }} />

      {/* Decoration fragments - bottom with staggered animation and scroll effect */}
      <DecorationFragment className="bottom-[18px] left-[170px] w-4 h-[120px] hidden md:block" delay={0.05} motionStyle={{ x: xLeft, opacity: fade, scale }} />
      <DecorationFragment className="bottom-[20px] left-[200px] w-4 h-[180px] hidden md:block" delay={0.10} motionStyle={{ x: xLeft, opacity: fade, scale }} />
      <DecorationFragment className="bottom-[17px] left-[250px] w-4 h-[70px] hidden md:block" delay={0.15} motionStyle={{ x: xRight, opacity: fade, scale }} />
      <DecorationFragment className="bottom-[0px] right-[120px] w-4 h-[110px] hidden md:block" delay={0.20} motionStyle={{ x: xRight, opacity: fade, scale }} />

      <div className="absolute right-[50px] bottom-[20px] flex justify-between items-end px-2 z-10 pointer-events-none">
        <DecorationFragment className="right-[70px] bottom-[0px] h-[240px] w-4 hidden md:block" delay={0.25} motionStyle={{ x: xLeft, opacity: fade, scale }} />
        <DecorationFragment className="right-[120px] bottom-[40px] h-[150px] w-4 hidden md:block" delay={0.20} motionStyle={{ x: xRight, opacity: fade, scale }} />
        <DecorationFragment className="right-[20px] bottom-[0px] h-[110px] w-4 hidden md:block" delay={0.20} motionStyle={{ x: xRight, opacity: fade, scale }} />
      </div>
    </header>
  )
}

export default Hero







/*
  <header className='relative overflow-hidden'>
      <motion.div 
        className='relative w-full h-screen'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <motion.img 
          src="hero.png" 
          alt="" 
          className='w-full h-screen object-cover'
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        <motion.div 
          className='absolute inset-0 bg-black/20'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </motion.div>
      <div className='font-avenir font-bold text-bronze absolute bottom-0 pl-8 -translate-y-1/2 flex items-center gap-4'>
        <motion.h1 
          className='text-[170px] flex uppercase'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Umbra
        </motion.h1>
        <motion.div 
          className='flex flex-col gap-1 text-[25px] mt-2 absolute relative top-[0px]'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <span>URBAN</span>
          <span>EUROPEAN</span>
          <span>DINING</span>
        </motion.div>
      </div>
    </header> */