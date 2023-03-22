import React, {useState, useEffect} from "react";
import '../styles/Education.css'

import '../styles/Fader.css'


const Education = () => {

  return (
    <div className="education-container">
    <div class="container-education-inner">
      <div class="education-square">
        <div className='background'></div>
        <h4>Springboard</h4>
        <div className='education-content'>
          <div className="education-content-icon-springboard"></div>
          <h2>Springboard</h2>
          <p>Voted best online bootcamp by Course Report in 2019, 2020, and 2021, Springboard's Software Engineering track provides a full-stack education. This 800-hour program covers front-end web development, back-end web development, databases, data structures and algorithms. I am glad that I chose Springboard to kickstart my software engineering career.</p>
          <p><b>Career Track: </b>Software Engineering</p>
          <p><b>Topics: </b>JavaScript, Python, Flask, Postgres, Express, Node, React, Data Structures, Algorithms</p>
        </div>
        <div className="orbiter"></div>
      </div>
      <div class="education-square">
        <div className='background'></div>
        <h4>University of Wisconsin-Superior</h4>
        <div className='education-content'>
          <div className="education-content-icon-uws"></div>
          <h2>University of Wisconsin-Superior</h2>
          <p><b>Location: </b>Superior, WI</p>
          <p><b>Degree: </b>Bachelor of Science</p>
          <p><b>Focus: </b>Cellular and Molecular Biology</p>
          <p><b>Minor: </b>Chemistry</p>
        </div>
        <div className="orbiter"></div>
      </div>
      <div class="education-square">
        <div className='background'></div>
        <h4>Community College of Aurora</h4>
        <div className='education-content'>
          <div className="education-content-icon-cca"></div>
          <h2>Community College of Aurora</h2>
          <p><b>Location: </b>Denver, CO</p>
          <p><b>Degree: </b>Associate of Science</p>
          <p><b>Major: </b>Biology</p>
        </div>
        <div className="orbiter"></div>
      </div>
    </div>
    </div>
  )
}


export default Education;