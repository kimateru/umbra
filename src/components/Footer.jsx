import React from 'react'
import Logo_Umbra_White from '/Logo_Umbra_White.svg'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { Helmet } from 'react-helmet'

const Footer = () => {
  // Structured data for organization
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Umbra Restaurant",
    "url": "https://www.umbra-urban.md",
    "logo": "https://www.umbra-urban.md/Logo_Umbra.svg",
    "sameAs": [
      "https://www.facebook.com/umbrarestaurant",
      "https://www.instagram.com/umbrarestaurant"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+37378999107",
      "contactType": "customer service",
      "areaServed": "Chișinău",
      "availableLanguage": ["English", "Romanian", "Russian"]
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sfatul Țării 17",
      "addressLocality": "Chișinău",
      "addressCountry": "MD"
    }
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <footer className="bg-[#59412b] text-white px-8 py-12 sm:px-12 sm:py-16 md:py-24 w-full" role="contentinfo">
        <div className="max-w-[2560px] mx-auto flex flex-col md:flex-row justify-between items-center md:items-end gap-12 text-center md:text-left">
          {/* Brand and Logo */}
          <div className="w-full md:w-auto">
            <img src={Logo_Umbra_White} alt="Umbra Logo" className="w-full h-auto  xl:h-[220px] 2xl:h-[250px]" />
          </div>
          {/* Contact Info */}
          <div className="w-full md:w-auto md:text-right text-sm xs:text-base md:text-lg mt-8 md:mt-0">
            <div className="mb-4">
              <a href="https://maps.google.com/?q=Sfatul+Tarii+17,+Chisinau" target="_blank" rel="noopener noreferrer" className="hover:underline">
                Sfatul Țării 17, Chișinău<br />
              </a>
            </div>
            <div className="mb-4">
              <a href="mailto:umbra.chisinau@gmail.com" className="hover:underline">umbra.chisinau@gmail.com</a>
            </div>
            <div>
              <a href="tel:078999107" className="hover:underline">078999107</a>
            </div>
          </div>
        </div>
        <div className="max-w-[2560px] mx-auto flex flex-col md:flex-row justify-between items-center mt-12 md:mt-16 border-t border-white/20 pt-6 md:pt-8 text-sm xs:text-base md:text-lg gap-6 text-center md:text-right">
          <div className="italic w-full md:w-auto">2025 Umbra Urban European Dining. All rights reserved.</div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 w-full md:w-auto items-center justify-center md:justify-end">
            <div className='flex gap-4 md:gap-8 mb-2 md:mb-0'>
              <a
                href="https://www.instagram.com/umbra_urban_md/?fbclid=IwY2xjawK49dtleHRuA2FlbQIxMQBicmlkETBNMDZTc2JsTXZReDdsNEpKAR5h9JoAA16KW9MzRHTOYO3YX8W4qbDaSh-nFjgCrXTLSxpv0Fw9L9YIHX76kg_aem_JkW7Ez5YLS1K3KNhkPfRVg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://web.facebook.com/profile.php?id=61576804933642#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <FaFacebookF size={24} />
              </a>
            </div>
            <div>Created by <a href="https://www.instagram.com/marketing_expert_olga_jitaru/" target="_blank" rel="noopener noreferrer" className="hover:underline font-bold">Olga Marketing Expert</a></div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer

