import React, { useState, useEffect } from "react";
import './NavbarContainer.css'
import NavBar from "./NavBar";
import { useMousePosition } from "../../hooks/useMousePosition";

const NavbarContainer = () => {

  const [freezeX, setFreezeX] = useState(false)
  const [frozenXPosition, setFrozenXPosition] = useState(null)
  const position = useMousePosition();
  let horazontalPosition;
  let ballStyle;
  let counterMove;

  if (position.y < 79) {
    horazontalPosition = position.x
  } else {
    horazontalPosition = -50
  }

  useEffect(() => {
    if (freezeX == false) {
      setFrozenXPosition(horazontalPosition)
    }
  }, [horazontalPosition])


  const navItemClick = () => {
    setFreezeX(true)
    const timer = setTimeout(() => {
      setFreezeX(false)
    }, 300);
  }
  
  if (freezeX == false) {
    ballStyle = {
      marginLeft: horazontalPosition,
      marginTop: 0,
      backgroundColor: '#F99417'
    }
    counterMove = {
      paddingTop: 20,
    }

  } else if (freezeX == true) {
    ballStyle = {
      marginLeft: frozenXPosition,
      marginTop: 20,
      backgroundColor: '#F99417'

    }
    counterMove = { 
      paddingTop: 0,
    }
  }
  
  


  return (
    <div className="container">

      <div style={{overflow:"hidden"}}>
        <div
          className="nav-ball"
          style={ballStyle}>
        </div>
      </div>

      <div 
        className="counter-move"
        style={counterMove}>
      </div>

      <div style={{marginTop:-25}}>
        <NavBar navItemClick={navItemClick} freezeX={freezeX} />
      </div>

    </div>
  )
}

export default NavbarContainer;