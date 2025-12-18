import React from 'react'
import heroImage from '../assets/web_2.png'

const Hero = () => {
  return (
    <section className="w-full relative overflow-hidden">
      <img 
        src={heroImage} 
        alt="ScrapDig Hero - Eco-Friendly Recycling App" 
        className="w-[300%] h-[300%] max-h-[900px] object-cover"
      />
    </section>
  )
}

export default Hero

