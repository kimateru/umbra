import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import DecorationFragment from './DecorationFragment'
import Logo_Umbra_White from '/Logo_Umbra_White.svg'
import { Helmet } from 'react-helmet'
/*
Название ресторана, краткий слоган
Фоновое изображение/видео
*/

const images = [
  {
    src: "/hero1.jpg",
    alt: "Umbra Restaurant - Fine European Dining",
    width: 1920,
    height: 1080,
    priority: true
  },
  {
    src: "/hero2.jpg",
    alt: "Contemporary European Cuisine at Umbra",
    width: 1920,
    height: 1080
  },
  {
    src: "/hero3.jpg",
    alt: "Elegant Dining Experience at Umbra",
    width: 1920,
    height: 1080
  }
];

const Hero = () => {
  const { scrollYProgress } = useScroll();
  // Example transforms for scroll-triggered effects
  const xLeft = useTransform(scrollYProgress, [0, 0.3], [0, -60]);
  const xRight = useTransform(scrollYProgress, [0, 0.3], [0, 60]);
  const fade = useTransform(scrollYProgress, [0, 0.3, 0.5], [1, 0.7, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.7]);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Preload images
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = images.map(img => {
        return new Promise((resolve, reject) => {
          const image = new Image();
          image.src = img.src;
          image.onload = resolve;
          image.onerror = reject;
        });
      });

      try {
        await Promise.all(imagePromises);
        setImagesLoaded(true);
      } catch (error) {
        console.error('Error preloading images:', error);
        setImagesLoaded(true); // Continue even if some images fail to load
      }
    };

    preloadImages();
  }, []);

  // Preload next image
  useEffect(() => {
    const preloadImage = (src) => {
      const img = new Image();
      img.src = src;
    };

    // Preload next image
    const nextIndex = (currentImageIndex + 1) % images.length;
    preloadImage(images[nextIndex].src);
  }, [currentImageIndex]);

  // Change image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 1,
      position: 'absolute',
      width: '100%',
      height: '100%'
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      position: 'absolute',
      width: '100%',
      height: '100%'
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 1,
      position: 'absolute',
      width: '100%',
      height: '100%'
    })
  };

  // Structured data for restaurant
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Umbra Restaurant",
    "image": [
      "https://www.umbra-urban.md/hero1.jpg",
      "https://www.umbra-urban.md/hero2.jpg",
      "https://www.umbra-urban.md/hero3.jpg"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sfatul Țării 17",
      "addressLocality": "Chișinău",
      "addressCountry": "MD"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "47.025072",
      "longitude": "28.818846"
    },
    "url": "https://www.umbra-urban.md",
    "telephone": "+37378999107",
    "servesCuisine": "European",
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "11:00",
      "closes": "23:00"
    }
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        {/* Preload critical images */}
        <link 
          rel="preload" 
          as="image" 
          href={images[0].src} 
          fetchpriority="high"
        />
        <link 
          rel="preload" 
          as="image" 
          href={images[1].src}
        />
      </Helmet>
      
      <header className="relative min-h-screen overflow-hidden bg-black-umbra" role="banner">
        {/* Full screen image container */}
        <div className="absolute inset-0 overflow-hidden" role="presentation">
          <AnimatePresence initial={false} custom={direction} mode="sync">
            <motion.img
              key={currentImageIndex}
              src={images[currentImageIndex].src}
              alt={images[currentImageIndex].alt}
              className="w-full h-full object-cover"
              width={images[currentImageIndex].width}
              height={images[currentImageIndex].height}
              loading={currentImageIndex === 0 ? "eager" : "lazy"}
              decoding={currentImageIndex === 0 ? "sync" : "async"}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "tween", duration: 0.8, ease: "easeInOut" },
                opacity: { duration: 0.2 }
              }}
            />
          </AnimatePresence>
        </div>

        {/* Content container */}
        <div className="relative z-10 flex flex-col justify-end items-start min-h-screen px-8 lg:px-24 pb-20">
          <div className="relative flex flex-col items-start w-full">
            <motion.div
              className="relative z-20 text-left w-full flex flex-col items-start"
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
                  <img 
                    src={Logo_Umbra_White} 
                    alt="Umbra Restaurant Logo" 
                    className="w-[350px] h-[100px] md:w-full h-auto xl:h-[220px] 2xl:h-[250px]"
                    loading="eager"
                    decoding="sync"
                  />
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
    </>
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