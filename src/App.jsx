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
      <Navbar /> 
      <Hero /> 
      <div id="menu">
        <MenuProposal />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="contact">
        <Contacts />
      </div>
      <Footer /> 
    </div >
  )
}

export default App