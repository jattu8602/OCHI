import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
import Cards from './components/Cards'
import Footer from './components/Footer'

import LocomotiveScroll from 'locomotive-scroll';








const App = () => {




  const locomotiveScroll = new LocomotiveScroll();




  
  return (
    <div className='w-full min-h-screen bg-zinc-900 text-white'>
      <Navbar/>
      <LandingPage/>
      <Marquee/>
      <About/>
      <Eyes/>
      <Featured/>
      <Cards/>
      <Footer/>




    </div>
  )
}

export default App
