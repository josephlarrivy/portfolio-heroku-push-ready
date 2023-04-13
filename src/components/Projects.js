import React from "react";

import '../styles/Projects.css'

const Projects = () => {


  return (
    <div className="projects-container">
      <div class="container-projects-inner">
        
        <a href="https://springboard-capstone-marvel.herokuapp.com/home" target="_blank"><div class="projects-square">
          <div className='projects-background'></div>
          <h4>Marvel</h4>
          <div className='projects-content'>
            <div className="iron-man-icon"></div>
            <h2>Marvel</h2>
            <p>Search, collect, and comment on your favorite Marvel characters and comics.</p>
            <p><b>Languages </b>Python, Flask, Jinja, PostgreSQL</p>
            <p style={{hover: "pointer"}}>Click to visit</p>

          </div>
          <div className="projects-orbiter"></div>
        </div></a>

        <a href="http://computersciencevisualizer.herokuapp.com/" target="_blank"><div class="projects-square">
          <div className='projects-background'></div>
          <h4>ComputerScienceVisualizer.com</h4>
          <div className='projects-content'>
            <div className="csv-icon"></div>
            <h2>ComputerScienceVisualizer.com</h2>
            <p>Learn to use data structures like stacks, queues, and linked-lists easily with our visualization tool.</p>
            <p><b>Languages </b>React, JavaScript</p>
            <p style={{ hover: "pointer" }}>Click to visit</p>
          </div>
          <div className="projects-orbiter"></div>
        </div></a>

      </div>
    </div>
  )
}

export default Projects;