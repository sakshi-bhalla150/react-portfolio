import React from 'react'
import './Hero.css'
import image from '../../assets/image.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={image} alt=""  />
        <h1><span>I'm Sakshi Bhalla</span>,a BCA student at Dr. VSICS</h1>
        <p> I m a motivated and detail-oriented student pursuing a Bachelor of Computer Applications (BCA)from my prestigious college Dr. Virendra Swarup institute of Computer studies .</p>
        <div className='hero-action'>
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
            <div className="hero-resume">My Resume</div>

        </div>
      
    </div>
  )
}

export default Hero
