import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-bronze-umbra text-white px-8 py-12 sm:px-12 sm:py-16 md:py-24 w-full">
      <div className="max-w-[2560px] mx-auto flex flex-col md:flex-row justify-between items-center md:items-end gap-12 text-center md:text-left">
        {/* Brand and Logo */}
        <div className="w-full md:w-auto">
          <span className="block text-sm text-gray-400 mb-4">04</span>
          <h2 className="text-[40px] xs:text-[48px] md:text-[96px] font-extrabold leading-none tracking-tight uppercase font-serif" style={{fontFamily: 'serif'}}>
            Umbra
          </h2>
          <h3 className="text-[24px] xs:text-[32px] md:text-[48px] font-extrabold leading-none tracking-tight uppercase font-serif mb-6" style={{fontFamily: 'serif'}}>
            European Urban Dining
          </h3>
        </div>
        {/* Contact Info */}
        <div className="w-full md:w-auto md:text-right text-sm xs:text-base md:text-lg mt-8 md:mt-0">
          <div className="mb-4">1234 Lorem Ipsum Ave.<br/>Metropolis, Ipsumland, 12345</div>
          <div className="mb-4">hello@umbra.com</div>
          <div>(123) 456-7890</div>
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