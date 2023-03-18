import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Partners from '../components/sections/Partners';
import About from '../components/sections/About';
import Whatwedo from '../components/sections/Whatwedo';

const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Partners/>
      <About />
      <Whatwedo />
      <Footer/>
      
    </>
  )
}

export default Home
