import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Helmet } from 'react-helmet';

const images = [
  {
    id: 1,
    src: "/1.jpg",
    alt: "Signature dish at Umbra Restaurant - European cuisine",
    width: 800,
    height: 600
  },
  {
    id: 2,
    src: "/2.jpg",
    alt: "Fine dining experience at Umbra Restaurant",
    width: 800,
    height: 600
  },
  {
    id: 3,
    src: "/3.jpg",
    alt: "Contemporary European dishes at Umbra",
    width: 800,
    height: 600
  },
  {
    id: 4,
    src: "/4.jpg",
    alt: "Artistic presentation of Umbra's culinary creations",
    width: 800,
    height: 600
  },
  {
    id: 5,
    src: "/5.jpg",
    alt: "Elegant dining atmosphere at Umbra Restaurant",
    width: 800,
    height: 600
  },
  {
    id: 6,
    src: "/6.jpg",
    alt: "Specialty dishes from Umbra's European menu",
    width: 800,
    height: 600
  },
  {
    id: 7,
    src: "/7.jpg",
    alt: "Modern European cuisine at Umbra Restaurant",
    width: 800,
    height: 600
  },
  {
    id: 8,
    src: "/8.jpg",
    alt: "Culinary artistry at Umbra Restaurant",
    width: 800,
    height: 600
  },
  {
    id: 9,
    src: "/9.jpg",
    alt: "Signature European dishes at Umbra",
    width: 800,
    height: 600
  },
  {
    id: 10,
    src: "/10.jpg",
    alt: "Fine dining experience in Chisinau at Umbra",
    width: 800,
    height: 600
  },
  {
    id: 11,
    src: "/11.jpg",
    alt: "Contemporary European cuisine presentation",
    width: 800,
    height: 600
  }
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
        {/* Preload first few images */}
        {images.slice(0, 3).map((img, index) => (
          <link 
            key={img.id}
            rel="preload" 
            as="image" 
            href={img.src}
            fetchpriority={index === 0 ? "high" : "low"}
          />
        ))}
      </Helmet>

      <section 
        className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 pt-5 lg:pt-20 pb-20"
        aria-label="Restaurant menu gallery"
      >
        {images.map((img, idx) => {
          const [ref, inView] = useInView({
            threshold: 0.1,
            triggerOnce: true,
            rootMargin: '50px 0px'
          });

          return (
            <motion.article
              key={img.id}
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="overflow-hidden rounded-2xl shadow-xl break-inside-avoid bg-neutral-800"
            >
              <img
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                loading={idx < 3 ? "eager" : "lazy"}
                decoding={idx < 3 ? "sync" : "async"}
                className="w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </motion.article>
          );
        })}
      </section>
    </>
  );
} 