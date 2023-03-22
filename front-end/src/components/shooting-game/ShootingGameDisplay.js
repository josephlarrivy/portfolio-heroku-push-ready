import React from "react";
import './ShootingGame.css'


const ShootingGameDisplay = ({
  getMousePosition,
  handleClick,
  letters,
  bullets,
  mouseX }) => {

  return(
    <div
      id="game-container"
      onMouseMove={getMousePosition}
      onClick={handleClick}
    >

      <div className="letters">
        {letters && letters.map(letter => {
          return (
            <div className={letter.class} key={letter.id}>
              <h1
                key={letter.id}
                id={letter.id}
              >{letter.letter}</h1>
            </div>
          )
        })}
      </div>

      {bullets && bullets.map(margin => {
        return (
          <div
            className="bullet"
            key={margin}
            style={{ marginLeft: margin }}
          ></div>
        )
      })}
      <p>Move mouse to aim. Click to Shoot</p>
      <div
        className="ship"
        style={{ marginLeft: mouseX }}>
      </div>

    </div>
  )
}

export default ShootingGameDisplay