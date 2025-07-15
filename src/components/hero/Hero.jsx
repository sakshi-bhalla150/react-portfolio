import React from 'react';
import './Hero.css';
import image from '../../assets/image.jpeg';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Hi, I'm <span>Sakshi</span></h1>
        <p>
          I'm a passionate web developer specializing in MERN stack development. 
          I love building responsive, modern, and user-friendly websites and web apps.
        </p>
        <a href="#contact" className="hero-button">Let’s Connect</a>
      </div>

      <div className="image">
        <img src={image} alt="Hero" />
      </div>
    </section>
  );
};

export default Hero;