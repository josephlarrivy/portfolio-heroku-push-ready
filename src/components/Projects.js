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
            <div className="projects-content-info">
              <h2>Marvel</h2>
              <p>Search, collect, and comment on your favorite Marvel characters and comics.</p>
              <p><b>Languages </b>Python, Flask, Jinja, PostgreSQL</p>
            </div>
          </div>
          <div className="projects-orbiter"></div>
        </div></a>

        <a href="https://parkexplorerpro-client.herokuapp.com/" target="_blank"><div class="projects-square">
          <div className='projects-background'></div>
          <h4>ParkExplorerPro</h4>
          <div className='projects-content'>
            <div className="parkexplorer-icon"></div>
            <div className="projects-content-info">
              <h2>ParkExplorerPro</h2>
              <p>Explore and search national parks to find campgrounds, weather, articles, visitor centers, things to do, events, and more.</p>
              <p><b>Languages </b>React, Node, Express, PostgreSQL</p>
            </div>
          </div>
          <div className="projects-orbiter"></div>
        </div></a>

        <a href="http://computersciencevisualizer.herokuapp.com/" target="_blank"><div class="projects-square">
          <div className='projects-background'></div>
          <h4>C.S. Visualizer</h4>
          <div className='projects-content'>
            <div className="csv-icon"></div>
            <div className="projects-content-info">
              <h2>ComputerScienceVisualizer.com</h2>
              <p>Learn to use data structures like stacks, queues, and linked-lists easily with our visualization tool.</p>
              <p><b>Languages </b>React, JavaScript</p>
            </div>
          </div>
          <div className="projects-orbiter"></div>
        </div></a>

        <a href="https://mrna-translation-visualizer.herokuapp.com/" target="_blank"><div class="projects-square">
          <div className='projects-background'></div>
          <h4>mRNA Translator</h4>
          <div className='projects-content'>
            <div className="mrna-icon"></div>
            <div className="projects-content-info">
              <h2>mRNA Translation Visualizer</h2>
              <p>Visualize the process that messenger RNA undergoes to build a protein. Science geeks welcome.</p>
              <p><b>Languages </b>React, JavaScript</p>
            </div>
          </div>
          <div className="projects-orbiter"></div>
        </div></a>

      </div>
    </div>
  )
}

export default Projects;