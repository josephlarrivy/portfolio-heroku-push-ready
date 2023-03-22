import React, { useState, useEffect } from "react";
import { TypeAnimation } from 'react-type-animation';

import '../styles/Fader.css'
import '../styles/Home.css'

import useWindowSize from '../hooks/useWindowSize'



const Home = () => {

  const [displayLanguage, setDisplayLanguage] = useState(null)
  const [logoFade, setLogoFade] = useState('no-icon')


  useEffect(() => {
    setLogoFade('no-icon')

  }, [])

  

  const handleClick = () => {
    
  }

    return (
      <div className="home-container">
        {/* LEFT SIDE OF HOME */}
        <div className="left-side">

          <div className="logo-main-container">
            <div className="logo-container">
              <div className='main-name'>Joseph Larrivy</div>
              <div className='subtitle'>Software Engineer</div>
              <div className="mini-icons-container">
                <div className="home-icon-one"></div>
                <div className="home-icon-two"></div>
              </div>
              <div className="icons-subtitles-container">
                <p>Frontend</p>
                <p>Backend</p>
              </div>
            </div>
          </div>
          
          {/* <div className='name'>Joseph Larrivy</div> */}

        </div>
        {/* RIGHT SIDE OF HOME */}
        <div className='right-side'>
          <div className={logoFade}>
            {/* <div className='rotate-container'> */}
              <div className={displayLanguage}>
              </div>
            {/* </div> */}
          </div>
          <br></br>
          <br></br>
          <br></br>
          <TypeAnimation
            sequence={[
              
              () => { setLogoFade('no-logo') },


              'JavaScript',
              () => { setDisplayLanguage('javascript-icon') },
              () => { setLogoFade('logo-fade-in') },
              1000,
              () => { setLogoFade('logo-on') },
              1000,
              () => { setLogoFade('logo-fade-out') },
              1000,
              () => { setLogoFade('no-logo') },


              'Python',
              () => { setDisplayLanguage('python-icon') },
              () => { setLogoFade('logo-fade-in') },
              1000,
              () => { setLogoFade('logo-on') },
              1000,
              () => { setLogoFade('logo-fade-out') },
              1000,
              () => { setLogoFade('no-logo') },



              'React',
              () => { setDisplayLanguage('react-icon') },
              () => { setLogoFade('logo-fade-in') },
              1000,
              () => { setLogoFade('logo-on') },
              1000,
              () => { setLogoFade('logo-fade-out') },
              1000,
              () => { setLogoFade('no-logo') },


              'Flask',
              () => { setDisplayLanguage('flask-icon') },
              () => { setLogoFade('logo-fade-in') },
              1000,
              () => { setLogoFade('logo-on') },
              1000,
              () => { setLogoFade('logo-fade-out') },
              1000,
              () => { setLogoFade('no-logo') },



              'Node',
              () => { setDisplayLanguage('node-icon') },
              () => { setLogoFade('logo-fade-in') },
              1000,
              () => { setLogoFade('logo-on') },
              1000,
              () => { setLogoFade('logo-fade-out') },
              1000,
              () => { setLogoFade('no-logo') },




              'Postgres',
              () => { setDisplayLanguage('postgres-icon') },
              () => { setLogoFade('logo-fade-in') },
              1000, 
              () => { setLogoFade('logo-on') },
              1000,
              () => { setLogoFade('logo-fade-out') },
              1000,
              () => { setLogoFade('no-logo') },

              
              // () => { console.log('done') }
            ]}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
            style={{
              fontSize: '2em',
            }}
          />
        </div>


      </div>

    )
  

  
}


export default Home;