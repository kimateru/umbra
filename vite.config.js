import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss()
  ],
  build: {
    // Optimize bundle size
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          animations: ['framer-motion'],
          swiper: ['swiper'],
          icons: ['react-icons']
        }
      }
    },
    // Enable compression
    minify: 'terser',
    // Optimize assets
    assetsInlineLimit: 4096,
    // Enable source maps for production debugging
    sourcemap: false
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'swiper', 'react-icons']
  },
  // Enable compression
  server: {
    compress: true
  }
})
