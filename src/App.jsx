import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MenuProposal from './components/MenuProposal'
import About from './components/About'
import Contacts from './components/Contacts'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <MenuProposal />
      <About />
      <Contacts />
      <Footer />
    </div>
  )
}

export default App