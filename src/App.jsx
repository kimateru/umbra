import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MenuProposal from './components/MenuProposal'
import About from './components/About'
import Contacts from './components/Contacts'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='font-avenir relative bg-white'>
      <Navbar />  {/* check 70% */}
      <Hero /> {/* check 60% */}
      <MenuProposal />
      <About />
      <Contacts />
      <Footer /> {/* check 90% */}
    </div >
  )
}

export default App