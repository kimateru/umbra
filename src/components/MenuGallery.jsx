import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const images = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  src: `/${i + 1}.jpg`,
}));

export default function MenuGallery() {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 pt-20 pb-32">
      {images.map((img, idx) => {
        const [ref, inView] = useInView({
          threshold: 0.1,
          triggerOnce: true,
        });

        return (
          <motion.div
            key={img.id}
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="overflow-hidden rounded-2xl shadow-xl break-inside-avoid bg-neutral-800"
          >
            <img
              src={img.src}
              alt={`Gallery image ${img.id}`}
              className="w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </motion.div>
        );
      })}
    </div>
  );
} 