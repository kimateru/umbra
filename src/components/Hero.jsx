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
    <header className="pt-[150px] flex justify-start items-center relative min-h-screen px-8 md:px-20 overflow-hidden">

      {/* Left: Overlay text and image */}
      <div className="relative flex flex-col items-center" style={{ flex: '0 0 60%' }}>
        <motion.div
          className="absolute top-[40px] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center w-full flex flex-col items-center"
          initial={{ y: 60, scale: 1.15, opacity: 0 }}
          animate={{ y: 0, scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
        >
          <motion.span
            className="italic font-light text-black text-[88px] md:text-[120px] leading-none"
            initial={{ y: 40, scale: 1.1, opacity: 0, letterSpacing: '0.1em' }}
            animate={{ y: 0, scale: 1, opacity: 1, letterSpacing: '0em' }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
          >
            Welcome to
          </motion.span>
          <motion.h1
            className="text-[110px] md:text-[90px] font-bold text-bronze-umbra drop-shadow-lg uppercase tracking-wide leading-none"
            initial={{ y: 60, scale: 1.18, opacity: 0, letterSpacing: '0.2em' }}
            animate={{ y: 0, scale: 1, opacity: 1, letterSpacing: '0.02em' }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.33, 1, 0.68, 1] }}
          >
            Umbra
          </motion.h1>
        </motion.div>
        <AnimatedCard img="hero.png" width={700} height={950} />
      </div>

      {/* Right: Description with animated circle and animated text overlay */}


      {/* Text overlay */}
      <motion.div
        className="relative z-20 text-black text-2xl font-light leading-relaxed w-[520px]"
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
      <DecorationFragment left={700} top={40} height={120} width={19} motionStyle={{ x: xLeft, opacity: fade, scale }} />
      <DecorationFragment left={30} top={0} height={180} width={19} motionStyle={{ x: xLeft, opacity: fade, scale }} />
      <DecorationFragment left={70} top={60} height={220} width={19} motionStyle={{ x: xLeft, opacity: fade, scale }} />
      <DecorationFragment left={110} top={100} height={140} width={19} motionStyle={{ x: xLeft, opacity: fade, scale }} />
      <DecorationFragment left={150} top={180} height={90} width={19} motionStyle={{ x: xLeft, opacity: fade, scale }} />

      {/* Decoration fragments - right side with scroll effect */}
      <DecorationFragment right={40} top={120} height={220} width={19} motionStyle={{ x: xRight, opacity: fade, scale }} />
      <DecorationFragment right={80} top={40} height={140} width={19} motionStyle={{ x: xRight, opacity: fade, scale }} />
      <DecorationFragment right={120} top={200} height={90} width={19} motionStyle={{ x: xRight, opacity: fade, scale }} />
      <DecorationFragment right={200} top={120} height={220} width={19} motionStyle={{ x: xRight, opacity: fade, scale }} />
      <DecorationFragment right={240} top={40} height={140} width={19} motionStyle={{ x: xRight, opacity: fade, scale }} />
      <DecorationFragment right={280} top={200} height={90} width={19} motionStyle={{ x: xRight, opacity: fade, scale }} />

      {/* Decoration fragments - bottom with staggered animation and scroll effect */}
      <DecorationFragment left={170} bottom={18} height={120} width={19} delay={0.05} motionStyle={{ x: xLeft, opacity: fade, scale }} />
      <DecorationFragment left={200} bottom={20} height={180} width={19} delay={0.10} motionStyle={{ x: xLeft, opacity: fade, scale }} />
      <DecorationFragment left={250} bottom={17} height={70} width={19} delay={0.15} motionStyle={{ x: xLeft, opacity: fade, scale }} />
      <DecorationFragment right={120} bottom={0} height={110} width={19} delay={0.20} motionStyle={{ x: xRight, opacity: fade, scale }} />

      <div className="absolute right-[50px] bottom-[20px] flex justify-between items-end px-2 z-10" style={{ pointerEvents: 'none' }}>
        <DecorationFragment right={70} height={240} width={19} delay={0.25} motionStyle={{ x: xRight, opacity: fade, scale }} />
        <DecorationFragment right={120} bottom={40} height={150} width={19} delay={0.20} motionStyle={{ x: xRight, opacity: fade, scale }} />
        <DecorationFragment right={20} bottom={0} height={110} width={19} delay={0.20} motionStyle={{ x: xRight, opacity: fade, scale }} />
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