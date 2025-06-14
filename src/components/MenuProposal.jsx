import { motion } from 'framer-motion';
import MenuGallery from './MenuGallery';
import { Helmet } from 'react-helmet';

export default function MenuProposal() {
  // Structured data for menu section
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MenuSection",
    "name": "Umbra Restaurant Menu",
    "description": "Explore our curated gallery and discover the artistry, flavors, and passion behind every dish. Let your senses guide you through a visual feast before your first bite.",
    "image": "https://www.umbra-urban.md/12.jpg",
    "isPartOf": {
      "@type": "Restaurant",
      "name": "Umbra Restaurant",
      "url": "https://www.umbra-urban.md"
    }
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        {/* Preload critical image */}
        <link 
          rel="preload" 
          as="image" 
          href="/12.jpg"
          fetchpriority="high"
        />
      </Helmet>
      <section className="bg-black-umbra min-h-screen" role="region" aria-label="Menu Section">
        {/* Hero Section */}
        <div className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 py-32 sm:py-40">
          {/* Background image with overlay */}
          <img
            src="/12.jpg"
            alt="Restaurant background"
            className="absolute inset-0 w-full h-full object-cover z-0"
            style={{ filter: 'brightness(0.40) blur(1px)' }}
            width={1920}
            height={1080}
            loading="eager"
            decoding="sync"
          />
          <div className="absolute inset-0 bg-black/40 z-0" />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center w-full">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-white text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-4 drop-shadow-lg uppercase"
              style={{ letterSpacing: '0.03em' }}
            >
              <span className="block font-extrabold italic underline decoration-bronze-umbra decoration-4 underline-offset-8">Visualize</span>
              <span className="block font-medium not-italic tracking-widest text-bronze-umbra mt-2">Our</span>
              <span className="block font-bold not-italic text-white">Menu</span>
              <span className="block font-light not-italic text-white/80 text-2xl sm:text-3xl mt-2 tracking-normal">A Journey of <span className="italic text-[#b08d57]">Taste</span> &amp; Elegance</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-white/80 text-lg sm:text-2xl mb-10 max-w-2xl mx-auto font-medium not-italic tracking-wide"
            >
              Explore our curated gallery and discover the artistry, flavors, and passion behind every dish. Let your senses guide you through a visual feast before your first bite.
            </motion.p>
            <motion.a
              href="/menu"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-10 py-5 rounded-lg font-semibold text-lg sm:text-xl text-white shadow-lg bg-gradient-to-r from-[#8b6642] via-[#b08d57] to-[#a68a6d] transition-all duration-300 hover:scale-105"
              style={{
                boxShadow: '0 4px 24px 0 rgba(139, 102, 66, 0.15)',
                border: '1.5px solid #8b6642',
                background: 'linear-gradient(90deg,rgb(110, 81, 52) 0%,rgb(124, 98, 58) 60%,rgb(117, 86, 52) 100%)',
              }}
              aria-label="View full menu"
            >
              View Full Menu
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L21 10.5m0 0l-3.75 3.75M21 10.5H3" />
              </svg>
            </motion.a>
          </div>
        </div>

        {/* Masonry Gallery Section */}
        <div className="mt-16 px-4">
          <MenuGallery />
        </div>
      </section>
    </>
  );
}
