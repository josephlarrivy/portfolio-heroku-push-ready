import React, {useState, useEffect} from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import './styles/Fader.css'


import Home from './components/Home'
import Education from './components/Education';
// import Projects from './components/Projects';
import Contact from './components/Contact';
import NavbarContainer from './components/nav/NavbarContainer';
import MiniGames from './components/MiniGames';

const Router = () => {

  const [fadeState, setFadeState] = useState('pre-fade')
  useEffect(() => {
    const timeout = setInterval(() => {
      if (fadeState === 'pre-fade') {
        setFadeState('fade-in')
      } else if (fadeState === 'fade-in') {
        setFadeState('fade-out')
      }
    }, 400);
    return () => clearInterval(timeout)
  }, [])





  return(
    <>
      <BrowserRouter>
        <NavbarContainer/>
          <Routes>
            {/* <Route path="/" element={<Home fadeState={fadeState} setFadeState={setFadeState}/>} /> */}
            <Route path="/" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/minigames" element={<MiniGames />} />
            {/* <Route path="/projects" element={<Projects />} /> */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default Router;