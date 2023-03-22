import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Partners from '../components/sections/Partners';
import About from '../components/sections/About';
import Whatwedo from '../components/sections/Whatwedo';
import Faq from '../components/sections/Faq';
import Testimony from '../components/sections/Testimony';

const Home = () => {
  return (
    <div className='home pos-rel'>
      <div className="top-hang">
        
      </div>
      <Navbar/>
      <Hero/>
      <Partners/>
      <About />
      <Whatwedo />
      <Faq/>
      <Testimony/>
      <Footer/>
      
    </div>
  )
}

export default Home
