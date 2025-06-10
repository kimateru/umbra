import React, { useState, useEffect } from 'react'
import NavbarItem from './NavbarItem'
import { FiMenu } from 'react-icons/fi'
import MobileMenu from './MobileMenu'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const items = [
    'About',
    'Menu',
    'Contact'
  ]

  // Scroll lock effect
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
    return () => document.body.classList.remove('overflow-hidden')
  }, [menuOpen])

  return (
    <nav className='flex justify-between items-center fixed top-0 left-0 w-full z-[1000] py-8 bg-white border-b-1 border-bronze-umbra'>
      <div className='relative'>
        <div className='absolute inset-y-0 right-0 w-[1px] bg-bronze-umbra -my-8'></div>
        <h1 className='text-black text-[17px] font-bold px-8'>Logo</h1>
      </div>
      {/* Desktop links */}
      <div className='flex items-center gap-[50px] max-md:hidden'>
        {items.map((item, index) => (
          <NavbarItem key={index} text={item} />
        ))}
      </div>
      {/* Desktop right menu */}
      <div className='relative max-md:hidden'>
        <div className='absolute inset-y-0 left-0 w-[1px] bg-bronze-umbra -my-8'></div>
        <h1 className='text-black text-[17px] font-bold px-8'>Menu</h1>
      </div>
      {/* Mobile burger button */}
      <button
        className='md:hidden text-3xl px-4 py-2 z-[1100] focus:outline-none'
        onClick={() => setMenuOpen(true)}
        aria-label='Open menu'
      >
        <FiMenu />
      </button>
      {/* MobileMenu overlay */}
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} items={items} />
    </nav>
  )
}

export default Navbar