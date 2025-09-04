import React from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import Logo_Umbra_White from '/Logo_Umbra_White.svg'
import { Helmet } from 'react-helmet'
/*
Название ресторана, краткий слоган
Фоновое изображение/видео
*/

const images = [
  {
    src: "/hero/1.webp",
    alt: "Umbra Restaurant - Fine European Dining",
    width: 1920,
    height: 1080,
    priority: true
  },
  {
    src: "/hero/2.webp",
    alt: "Contemporary European Cuisine at Umbra",
    width: 1920,
    height: 1080
  },
  {
    src: "/hero/3.webp",
    alt: "Elegant Dining Experience at Umbra",
    width: 1920,
    height: 1080
  }
];

const Hero = () => {

  // Structured data for restaurant
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Umbra Restaurant",
    "image": [
      "https://www.umbra-urban.md/hero/1.webp",
      "https://www.umbra-urban.md/hero/2.webp",
      "https://www.umbra-urban.md/hero/3.webp"
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
    "priceRange": "$$$",
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
        <link 
          rel="preload" 
          as="image" 
          href={images[2].src}
        />
      </Helmet>
      
      <header className="relative min-h-screen overflow-hidden bg-black-umbra" role="banner">
        {/* Full screen image container */}
        <div className="absolute inset-0 overflow-hidden" role="presentation">
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            loop={true}
            speed={800}
            className="w-full h-full"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  width={image.width}
                  height={image.height}
                  loading="eager"
                  decoding="sync"
                  fetchPriority={index === 0 ? "high" : "auto"}
                />
              </SwiperSlide>
            ))}
          </Swiper>
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
            </motion.div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Hero