import React from 'react'
import './Projects.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../data/mywork_data.js'
import arrow_icon from '../../assets/arrow_icon.svg'

const Projects = () => {
  return (
    <div id='projects' className='my-projects'>
        <div className="my-projects-title">
            <h1>My Projects</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="my-projects-container">
           {mywork_data.map((work, index) => (
       <div key={index} className="project-card">
       <img src={work.w_img} alt={work.w_name} className="project-image" />
       <p >{work.w_name}</p>
    </div>
  ))}
        </div>
        <div className="my-projects-show-more">
            <p>Show more</p>
            <img src={arrow_icon} alt="" />
        </div>
      
    </div>
  )
}

export default Projects
