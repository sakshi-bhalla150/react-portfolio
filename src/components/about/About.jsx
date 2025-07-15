import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import image from '../../assets/image.jpeg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-section">
            <div className="about-left">
                <img src={image} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am a detail-oriented student with a strong foundation in programming languages including C++,Java,Python,SQL,DBMS,AI tools.I am passionate about leveraging technology to solve real-world problems. Eager to expand my technical skills,I actively seek opportunities for hands-on experience and collaboration in the field of IT.</p>
                    <p> I am driven by innovation and committed to continuos learning,aiming to contribute meaningfully to the tech industry through both personal growth and professional development.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>Programming</p><hr style={{width: "50%"}} /></div>
                     <div className="about-skill"><p>Web Development</p><hr style={{width: "70%"}} /></div>
                     <div className="about-skill"><p>Negotiation</p><hr style={{width: "60%"}} /></div>
                     <div className="about-skill"><p>Time Management</p><hr style={{width: "50%"}} /></div>
                     <div className="about-skill"><p>SQL</p><hr style={{width: "70%"}} /></div>
                </div>
            </div>
        </div>

      
    </div>
  )
}

export default About
