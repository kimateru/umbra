import React, { Suspense, lazy } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

// Lazy load non-critical components
const MenuProposal = lazy(() => import('./components/MenuProposal'))
const About = lazy(() => import('./components/About'))
const Contacts = lazy(() => import('./components/Contacts'))
const Footer = lazy(() => import('./components/Footer'))

// Loading component
const LoadingSpinner = () => (
  <div className="flex justify-center items-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-bronze-umbra"></div>
  </div>
)

const App = () => {
  return (
    <div className='font-avenir relative bg-white'>
      <Navbar /> 
      <Hero /> 
      <Suspense fallback={<LoadingSpinner />}>
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
      </Suspense>
    </div >
  )
}

export default App

// hi again, i did some updates here with images and layout,i really like it, i compressed myself each image but they still load super difficult,could we fixt it ?