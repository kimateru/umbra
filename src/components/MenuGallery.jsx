import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Helmet } from 'react-helmet';

const images = [
  {
    id: 1,
    src: "/gallery/1.webp",
    alt: "Signature dish at Umbra Restaurant - European cuisine",
    width: 800,
    height: 600
  },
  {
    id: 2,
    src: "/gallery/2.webp",
    alt: "Fine dining experience at Umbra Restaurant",
    width: 800,
    height: 600
  },
  {
    id: 3,
    src: "/gallery/3.webp",
    alt: "Contemporary European dishes at Umbra",
    width: 800,
    height: 600
  },
  {
    id: 4,
    src: "/gallery/4.webp",
    alt: "Artistic presentation of Umbra's culinary creations",
    width: 800,
    height: 600
  },
  {
    id: 5,
    src: "/gallery/5.webp",
    alt: "Elegant dining atmosphere at Umbra Restaurant",
    width: 800,
    height: 600
  },
  {
    id: 6,
    src: "/gallery/6.webp",
    alt: "Specialty dishes from Umbra's European menu",
    width: 800,
    height: 600
  },
  {
    id: 7,
    src: "/gallery/7.webp",
    alt: "Modern European cuisine at Umbra Restaurant",
    width: 800,
    height: 600
  },
  {
    id: 8,
    src: "/gallery/8.webp",
    alt: "Culinary artistry at Umbra Restaurant",
    width: 800,
    height: 600
  },
  {
    id: 9,
    src: "/gallery/9.webp",
    alt: "Signature European dishes at Umbra",
    width: 800,
    height: 600
  },
  {
    id: 10,
    src: "/gallery/10.webp",
    alt: "Fine dining experience in Chisinau at Umbra",
    width: 800,
    height: 600
  },    
];

export default function MenuGallery() {
  // Structured data for the image gallery
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "Umbra Restaurant Menu Gallery",
    "description": "A visual journey through our culinary creations at Umbra Restaurant",
    "image": images.map(img => `https://www.umbra-urban.md${img.src}`),
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
        {/* Preload only the first image */}
        <link 
          rel="preload" 
          as="image" 
          href={images[0].src}
          fetchpriority="high"
        />
      </Helmet>

      <section 
        className="columns-1 sm:columns-2 lg:columns-4 gap-6 pt-5 lg:pt-20 pb-20 px-4 lg:px-8"
        aria-label="Restaurant menu gallery"
      >
        {images.map((img, idx) => {
          const [ref, inView] = useInView({
            threshold: 0.1,
            triggerOnce: true,
            rootMargin: '200px 0px'
          });

          return (
            <motion.article
              key={img.id}
              ref={ref}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="overflow-hidden rounded-2xl shadow-xl break-inside-avoid bg-neutral-800 mb-6"
            >
              {inView ? (
                <img
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  loading={idx < 2 ? "eager" : "lazy"}
                  decoding={idx < 2 ? "sync" : "async"}
                  className="w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              ) : (
                <div 
                  className="w-full bg-gradient-to-br from-neutral-700 to-neutral-800 animate-pulse flex items-center justify-center"
                  style={{ height: '300px' }}
                >
                  <div className="text-neutral-500 text-sm">Loading...</div>
                </div>
              )}
            </motion.article>
          );
        })}
      </section>
    </>
  );
} 



