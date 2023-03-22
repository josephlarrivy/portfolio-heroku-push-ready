import React, { useState, useEffect } from "react";

import '../styles/Contact.css'
import '../styles/Fader.css'

import Map from "./map/Map";
import ContactForm from "./forms/ContactForm";


const Contact = () => {

  const [fadeState, setFadeState] = useState('pre-fade')

  useEffect(() => {
    const timeout = setInterval(() => {
      if (fadeState === 'pre-fade') {
        setFadeState('fade-in')
      }
    }, 400);
    return () => clearInterval(timeout)
  })



  

  return (
    

    <div className="contact-container">
      <div className="left-side">
        <h1>Get in touch:</h1>
        <ContactForm />


        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <a href="https://github.com/josephlarrivy" target="_blank"><img className="icon" src={require('../images/Black-Github-Logo-PNG-Image.png')}></img></a>

        <a href="https://www.linkedin.com/in/josephlarrivy/" target="_blank"><img className="icon" src={require('../images/Black-linkedin-logo-design-on-transparent-background-PNG.png')}></img></a>

      </div>
      
      <div className="right-side">
        <Map />
      </div>
            
    </div>
  )
}


export default Contact;


