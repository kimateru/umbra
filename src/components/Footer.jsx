import React from 'react'
import Logo_Umbra_White from '/Logo_Umbra_White.svg'
const Footer = () => {
  return (
    <footer className="bg-bronze-umbra text-white px-8 py-12 sm:px-12 sm:py-16 md:py-24 w-full">
      <div className="max-w-[2560px] mx-auto flex flex-col md:flex-row justify-between items-center md:items-end gap-12 text-center md:text-left">
        {/* Brand and Logo */}
        <div className="w-full md:w-auto">
          <img src={Logo_Umbra_White} alt="Umbra Logo" className="w-full h-auto  xl:h-[220px] 2xl:h-[250px]" />
        </div>
        {/* Contact Info */}
        <div className="w-full md:w-auto md:text-right text-sm xs:text-base md:text-lg mt-8 md:mt-0">
          <div className="mb-4">
            <a href="https://maps.google.com/?q=Sfatul+Tarii+17,+Chisinau" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Sfatul Tarii 17,<br />Chisinau
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
      <div className="max-w-[2560px] mx-auto flex flex-col md:flex-row justify-between items-center mt-12 md:mt-16 border-t border-white/20 pt-6 md:pt-8 text-sm xs:text-base md:text-lg gap-6 text-center md:text-left">
        <div className="italic w-full md:w-auto">2023 Umbra Studio. All rights reserved.</div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 w-full md:w-auto items-center justify-center md:justify-end">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Partnership</a>
          <a href="#" className="hover:underline">Our Social Media</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer