import { motion, useInView } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import { useRef } from 'react';
import { Helmet } from 'react-helmet';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 }
};

const contactItemVariants = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5 }
};

const Contacts = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Structured data for contact information
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPoint",
    "name": "Umbra Restaurant Contact Information",
    "telephone": "+37378999107",
    "contactType": "customer service",
    "areaServed": "Chișinău",
    "availableLanguage": ["English", "Romanian", "Russian"],
    "hoursAvailable": "Mo-Su 11:00-23:00",
    "isPartOf": {
      "@type": "Restaurant",
      "name": "Umbra Restaurant",
      "url": "https://www.umbra-urban.md",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Sfatul Țării 17",
        "addressLocality": "Chișinău",
        "addressCountry": "MD"
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Umbra Restaurant - Fine European Dining in Chisinau</title>
        <meta 
          name="description" 
          content="Contact Umbra Restaurant in Chisinau. Visit us at Sfatul Țării 17, call +37378999107, or email umbra.chisinau@gmail.com. Open daily 11:00-23:00."
        />
        <meta name="keywords" content="Umbra Restaurant contact, restaurant reservations, Chisinau restaurant, European dining contact" />
        <meta property="og:title" content="Contact Umbra Restaurant - Fine European Dining in Chisinau" />
        <meta property="og:description" content="Contact Umbra Restaurant in Chisinau. Visit us at Sfatul Țării 17, call +37378999107, or email umbra.chisinau@gmail.com. Open daily 11:00-23:00." />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-[#2c2f30] flex flex-col items-center justify-center p-6 py-12">
        <div ref={ref} className="max-w-6xl w-full flex flex-col md:flex-row items-center md:items-start justify-between gap-10 mt-12">
          {/* Left Info Panel */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            className="w-full md:w-1/2 space-y-6 flex flex-col justify-between text-center md:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#bf9d7a] mb-2">
                Umbra Restaurant
              </h2>
              <div className="text-xl md:text-2xl font-medium text-white mb-1">
                Working Hours
              </div>
              <div className="text-2xl md:text-3xl font-light text-white/80 mb-6">
                Everyday<br />
                11:00 - 23:00
              </div>
            </motion.div>

            <motion.div 
              className="mt-4 md:mt-8 flex items-center justify-center md:justify-start gap-3"
              variants={contactItemVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ delay: 0.2 }}
            >
              <FaMapMarkerAlt className="text-[#bf9d7a] text-xl" />
              <a
                href="https://maps.google.com/?q=Sfatul+Tarii+17,+Chisinau"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-white/80 text-lg md:text-2xl leading-tight hover:underline block"
              >
                Sfatul Țării 17, Chișinău
              </a>
            </motion.div>

            <motion.div 
              className="text-white/80 font-medium text-base md:text-xl flex items-center justify-center md:justify-start gap-3"
              variants={contactItemVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ delay: 0.4 }}
            >
              <FaEnvelope className="text-[#bf9d7a] text-xl" />
              <a href="mailto:umbra.chisinau@gmail.com" className="hover:underline">
                umbra.chisinau@gmail.com
              </a>
            </motion.div>

            <motion.div 
              className="text-white/80 font-light text-base md:text-xl flex items-center justify-center md:justify-start gap-3"
              variants={contactItemVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ delay: 0.6 }}
            >
              <FaPhone className="text-[#bf9d7a] text-xl" />
              <a href="tel:078999107" className="hover:underline">
                078999107
              </a>
            </motion.div>
          </motion.div>

          {/* Right Images */}
          <div className="w-full md:w-1/2 flex flex-col md:flex-row gap-4 lg:mt-8 md:mt-0">
            <motion.img
              src="/hero/1.webp"
              alt="Bike near window"
              className="rounded-md object-cover w-full md:w-1/2 h-[400px]"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <motion.img
              src="/gallery/4.webp"
              alt="Couch with light"
              className="rounded-md object-cover w-full md:w-1/2 h-[400px] md:relative md:-top-24"
              initial={{ opacity: 0, x: 80 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </div>
        </div>
        <motion.div 
          className="max-w-6xl w-full mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2719.7723984121762!2d28.818846476814695!3d47.025072427953155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97dcc4c00309f%3A0x23a34c29a326bf1a!2zU3RyYWRhIFNmYXR1bCDImsSDcmlpIDE3LCBNRC0yMDEyLCBDaGnImWluxIN1LCDQnNC-0LvQtNC-0LLQsA!5e0!3m2!1sru!2s!4v1749759524322!5m2!1sru!2s"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map - Umbra Location"
            className="rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </>
  );
};

export default Contacts;
