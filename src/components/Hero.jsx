import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import DecorationFragment from './DecorationFragment'
import Logo_Umbra_White from '/Logo_Umbra_White.svg'
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
    <header className="relative min-h-screen overflow-hidden bg-black-umbra">
      {/* Full screen image container */}
      <div className="absolute inset-0">
        <motion.img
          src="11.jpg"
          alt="Umbra Restaurant - Fine Dining Experience"
          className='w-full h-full object-cover'
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 1.5,
            ease: [0.33, 1, 0.68, 1]
          }}
        />
      </div>

      {/* Content container */}
      <div className="relative z-10 flex flex-col justify-end items-start min-h-screen px-8 lg:px-24 pb-20">
        <div className="relative flex flex-col items-start w-full">
          <motion.div
            className="relative z-20 text-left w-full flex flex-col items-start "
            initial={{ y: 60, scale: 1.15, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
          >
            <div className="flex flex-col md:flex-row md:items-end gap-4">
              <motion.div
                className="relative"
                initial={{ y: 60, scale: 1.18, opacity: 0, letterSpacing: '0.2em' }}
                animate={{ y: 0, scale: 1, opacity: 1, letterSpacing: '0.02em' }}
                transition={{ duration: 1.2, delay: 0.5, ease: [0.33, 1, 0.68, 1] }}
              >
                <img src={Logo_Umbra_White} alt="Umbra Logo" className="w-full h-auto  xl:h-[220px] 2xl:h-[250px]" />
              </motion.div>
            </div>
            {/* <motion.p
              className="text-white/80 text-sm lg:text-base 2xl:text-lg my-6 max-w-xl"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.8, ease: [0.33, 1, 0.68, 1] }}
            >
              Experience the perfect blend of European elegance and urban sophistication. Our culinary journey brings together traditional flavors with contemporary innovation, creating an unforgettable dining experience in the heart of the city.
            </motion.p> */}
          </motion.div>
        </div>

        {/* Decoration fragments - left side */}
        {/* <DecorationFragment className="top-[90px] left-[30px] w-[10px] md:w-[19px] h-[130px]" motionStyle={{ x: xLeft, opacity: fade, scale }} />
        <DecorationFragment className="top-[70px] right-[5px] md:left-[70px] w-[10px] md:w-[19px] h-[220px]" motionStyle={{ x: xLeft, opacity: fade, scale }} />
        <DecorationFragment className="top-[120px] left-[110px] w-[10px] md:w-[19px] h-[140px] hidden md:block" motionStyle={{ x: xLeft, opacity: fade, scale }} /> */}

        {/* Decoration fragments - right side */}
        {/* <DecorationFragment className="top-[120px] right-[40px] w-[10px] md:w-[19px] h-[220px] hidden md:block" motionStyle={{ x: xRight, opacity: fade, scale }} />
        <DecorationFragment className="top-[80px] right-[80px] w-[10px] md:w-[19px] h-[140px] hidden md:block" motionStyle={{ x: xRight, opacity: fade, scale }} />
        <DecorationFragment className="top-[200px] right-[120px] w-[10px] md:w-[19px] h-[90px] hidden md:block" motionStyle={{ x: xRight, opacity: fade, scale }} />
        <DecorationFragment className="top-[120px] right-[200px] w-[10px] md:w-[19px] h-[220px] hidden md:block" motionStyle={{ x: xRight, opacity: fade, scale }} />
        <DecorationFragment className="top-[80px] right-[240px] w-[10px] md:w-[19px] h-[140px] hidden md:block" motionStyle={{ x: xRight, opacity: fade, scale }} />
        <DecorationFragment className="top-[200px] right-[280px] w-[10px] md:w-[19px] h-[90px] hidden md:block" motionStyle={{ x: xRight, opacity: fade, scale }} /> */}


        {/* Bottom right decoration group */}
        {/* <div className="absolute right-[50px] bottom-[20px] flex justify-between items-end px-2 z-10 pointer-events-none"> */}
        {/* <DecorationFragment className="right-[70px] bottom-[0px] h-[240px] w-4 hidden md:block" delay={0.25} motionStyle={{ x: xLeft, opacity: fade, scale }} />
          <DecorationFragment className="right-[120px] bottom-[40px] h-[150px] w-4 hidden md:block" delay={0.20} motionStyle={{ x: xRight, opacity: fade, scale }} />
          <DecorationFragment className="right-[20px] bottom-[0px] h-[110px] w-4 hidden md:block" delay={0.20} motionStyle={{ x: xRight, opacity: fade, scale }} />
        </div> */}
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
    </header> 
    
    
    {/* <AnimatedCard
            img="hero.png"
            color="#8b6642"
            classes="w-full h-[550px] sm:h-[750px] md:w-[500px] md:h-[650px] lg:w-[700px] lg:h-[950px]"
          /> 
    
    
    
    */