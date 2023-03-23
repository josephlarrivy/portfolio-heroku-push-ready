import { useState } from 'react';
import './styles/App.css';
import './styles/Fader.css'

import Router from './Routes';
import ShootingGame from './components/shooting-game/ShootingGame';


function App() {

  const [phase, setPhase] = useState('show-main')
  const [squareClass, setSquareClass] = useState('start-square')

  const handleClick1 = () => {
    setSquareClass('square-fill')
    setTimeout(() => {
      setPhase('show-main')
    }, 2800)
  }

  const buttonClick = () => {
    setPhase('show-main')
  }

  if (phase === 'phase-one') {
    return (
      <div id='page-container-pre'>
        <button onClick={buttonClick} id='go-to-homepage'>Go to Homepage</button>
        {/* <div onClick={handleClick1} className={squareClass}>
          <div className='click-text'><p><b>Welcome</b></p></div>
        </div> */}
        <ShootingGame />
      </div>
    )
  } else if (phase === 'show-main') {
    return (
      <div className="App">

          <div id="page-container">
            <Router />
          </div>

          <div id='floater-one'></div>
          <div id='floater-two'></div>
          <div id='floater-three'></div>
          <div id='floater-four'></div>

      </div>
    );
  }
}

export default App;
