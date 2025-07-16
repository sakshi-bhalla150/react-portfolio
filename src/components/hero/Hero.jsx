import React from 'react';
import './Hero.css';
import image from '../../assets/image.jpeg'; 

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="image">
        <img src={image} alt="Sakshi" />
      </div>
      <div className="hero-content">
        <h1>Hi, I'm <span>Sakshi</span></h1>
        <p>
          I'm a passionate developer, skilled in React and the MERN stack. I love building
          responsive, interactive websites.
        </p>
        <a href="#connect" className="hero-button">Connect with Me</a>
      </div>
    </section>
  );
};

export default Hero;