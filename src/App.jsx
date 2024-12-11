import React from 'react'
import Header from './components/Header'
import BodySection from './components/BodySection'  
import HeroSection from './components/HeroSection'
import NonVeg from './components/NonVeg' 
import DryFruits from './components/DryFruits' 
import Veg from './components/Veg'
import Description from './components/Description'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
const App = () => {
  return (
    <div>
        <Header/>
       <BodySection/> 
     <HeroSection/>

     <NonVeg/>  
      <DryFruits/> 
      <Veg/>   
      <Description/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default App
