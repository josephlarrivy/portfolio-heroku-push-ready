import React, { useState, useEffect } from "react";

import '../styles/Fader.css'
import '../styles/MiniGames.css'


import GameOfLife from "./game-of-life/GameOfLife";
import SnakeGame from "./snake-game/SnakeGame";

const MiniGames = () => {

  const [showProject, setShowProject] = useState('list')
  useEffect(() => {
    setShowProject('list')
  }, [])


  const handleGameSelect = (e) => {
    setShowProject(e.target.id)
  }


  if (showProject === 'list') {
    return(
      <div>
        <div className='play-page'>
          <div className='game-thumbnails-container'>

                <div
                  onClick={handleGameSelect}
                  id='gameOfLifeInstructions'
                  className="game-of-life-thumbnail">
                <div className='background' id='gameOfLifeInstructions'></div>
                  <h3
                    onClick={handleGameSelect}
                    id='gameOfLifeInstructions'>Conway's Game of Life
                  </h3>
              <div className="orbiter-minigames"></div>

                </div>

            
              <div
                onClick={handleGameSelect}
                id='snakeGameInstructions'
                className="snake-game-thumbnail">
                <div className='background' id='snakeGameInstructions'></div>
                <h3
                  onClick={handleGameSelect}
                  id='snakeGameInstructions'>Snake
                </h3>
              <div className="orbiter-minigames"></div>

              </div>


          </div>
        </div>
      </div>
    )



  } else if (showProject === 'gameOfLifeInstructions') {
    return (
      <div>
        <div className='play-page'>
          <div className="game-instruction-card">
            <br></br>
            <h1>Conway's Game of Life Instructions</h1>
            <h3 onClick={handleGameSelect} id='gameOfLife' className="playGameButton">Play Game</h3>
            <h3 onClick={handleGameSelect} id='list' className="playGameButton">Back to all miniGames</h3>
            <br></br>
            <h4>How to play</h4>
            <p>Choose the first generation of cells by clicking on them, then click 'step' so see the next generation or 'run' for the game to generate new generations automatically.</p>
            <p>Conway's Game of Life is a cellular automaton that is played on a 2D square grid. Each square (cell) on the grid is either alive (black) or dead (orange). Based on the dead/alive cells the following rules are applied and the next generation of cells is generated:</p>
              <p>Any live cell with fewer than two live neighbours dies</p>
              <p>Any live cell with more than three live neighbours dies</p>
              <p>Any live cell with two or three live neighbours lives, unchanged, to the next generation</p>
              <p>Any dead cell with exactly three live neighbours comes to life.</p>
            <br></br><br></br>
            
          </div>
        </div>
      </div>
    )
  } else if (showProject === 'gameOfLife') {
    return (
      <div>
        <div className='play-page'>
          <GameOfLife setShowProject={setShowProject} />
        </div>
      </div>
    )
  } else if (showProject === 'snakeGameInstructions') {
    return (
      <div>
        <div className='play-page'>
          <div className="game-instruction-card">
            <br></br>
            <br></br>
            <h1>Snake Instructions</h1>
            <h3 onClick={handleGameSelect} id='snakeGame' className="playGameButton">Play Game</h3>
            <h3 onClick={handleGameSelect} id='list' className="playGameButton">Back to all miniGames</h3>
            <p>Use the arrow keys to control the snake. Gather apples to increase snake length. Running into sides of board or snake body will result in game over.</p>
          </div>
        </div>
      </div>
    )
  } else if (showProject === 'snakeGame') {
    return (
      <div>
        <div className='play-page'>
          <SnakeGame setShowProject={setShowProject} />
        </div>
      </div>
    )
  } else if (showProject === 'snakeGameOver') {
    return (
      <div>
        <div className='play-page'>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h1>Game Over</h1>
          <br></br>
          <h3 onClick={handleGameSelect} id='snakeGame' className="playGameButton">Play Snake Again</h3>
          <h3 onClick={handleGameSelect} id='list' className="playGameButton">Back to Games</h3>
        </div>
      </div>
    )
  }
	
}


export default MiniGames;