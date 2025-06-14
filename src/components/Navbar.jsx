import React, { useState, useEffect } from 'react'
import NavbarItem from './NavbarItem'
import { FiMenu, FiPhone, FiMapPin } from 'react-icons/fi'
import { FaInstagram, FaFacebookF } from 'react-icons/fa'
import MobileMenu from './MobileMenu'
import { Helmet } from 'react-helmet'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const items = [
    'About',
    'Menu',
    'Contact'
  ]

  // Structured data for navigation
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    "name": "Main Navigation",
    "url": "https://umbra.md",
    "mainEntity": items.map(item => ({
      "@type": "WebPage",
      "name": item,
      "url": `https://umbra.md#${item.toLowerCase()}`
    }))
  };

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = window.innerWidth >= 768 ? 20 : 0; // 20px offset for desktop
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <nav 
        className={`fixed top-0 left-0 w-full z-[1000] transition-colors duration-300 text-white ${isScrolled ? 'bg-black' : 'bg-transparent text-white'}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-[2560px] mx-auto px-12 md:px-8 lg:px-24">
          <div className="flex items-center py-4 lg:py-6">
            {/* Desktop links */}
            <div className='flex items-center gap-[100px] max-md:hidden'>
              {items.map((item, index) => (
                <NavbarItem key={index} text={item} isScrolled={isScrolled} />
              ))}
            </div>
            
            {/* Mobile contact info */}
            <div className="md:hidden flex flex-col items-start mr-4">
              <a 
                href="tel:078999107" 
                className="flex items-center gap-2 text-sm hover:opacity-80 transition-opacity"
              >
                <FiPhone className="text-lg" />
                <span>078999107</span>
              </a>
              <button 
                onClick={() => scrollToSection('contact')}
                className="flex items-center gap-2 text-sm mt-1 hover:opacity-80 transition-opacity"
              >
                <FiMapPin className="text-lg" />
                <a href="https://maps.google.com/?q=Sfatul+Tarii+17,+Chisinau" target="_blank" rel="noopener noreferrer" className="hover:underline">Sfatul Țării 17, Chișinău</a>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="flex-1 flex justify-end md:hidden">
              <button
                className={`w-12 h-12 flex items-center justify-center z-[1100] focus:outline-none rounded-full cursor-pointer transition-colors duration-300 ${isScrolled ? 'bg-black-umbra text-white hover:bg-bronze-umbra' : 'bg-bronze-umbra text-white hover:bg-black-umbra'}`}
                onClick={() => setMenuOpen(true)}
                aria-label='Open menu'
              >
                <FiMenu className="text-2xl" />
              </button>
            </div>

            {/* Instagram and Facebook buttons for md and up */}
            <div className="hidden md:flex flex-1 justify-end gap-4">
              <a
                href="https://www.instagram.com/umbra_urban_md/?fbclid=IwY2xjawK49dtleHRuA2FlbQIxMQBicmlkETBNMDZTc2JsTXZReDdsNEpKAR5h9JoAA16KW9MzRHTOYO3YX8W4qbDaSh-nFjgCrXTLSxpv0Fw9L9YIHX76kg_aem_JkW7Ez5YLS1K3KNhkPfRVg"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 flex items-center justify-center z-[1100] focus:outline-none rounded-full cursor-pointer transition-colors duration-300 ${isScrolled ? 'bg-black-umbra text-white hover:bg-bronze-umbra' : 'bg-bronze-umbra text-white hover:bg-black-umbra'}`}
                aria-label='Instagram'
              >
                <FaInstagram className="text-2xl" />
              </a>
              <a
                href="https://web.facebook.com/profile.php?id=61576804933642#"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 flex items-center justify-center z-[1100] focus:outline-none rounded-full cursor-pointer transition-colors duration-300 ${isScrolled ? 'bg-black-umbra text-white hover:bg-bronze-umbra' : 'bg-bronze-umbra text-white hover:bg-black-umbra'}`}
                aria-label='Facebook'
              >
                <FaFacebookF className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
        {/* MobileMenu overlay */}
        <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} items={items} />
      </nav>
    </>
  )
}

export default Navbar