import React, {useEffect, useState} from "react";

import ShootingGameDisplay from "./ShootingGameDisplay";

const ShootingGame = () => {

  const [mouseX, setMouseX] = useState(0)
  const [bullets, setBullets] = useState([])
  // const [letters, setLetters] = useState(['', '', '', 'C', 'l', 'i', 'c', 'k', '', '', 't', 'o', '', '', 's', 'h', 'o', 'o', 't','','',''])
  const [letters, setLetters] = useState([
    { 'letter': 'J', 'id': 0, 'class': 'letter' },
    { 'letter': 'o', 'id': 1, 'class': 'letter' },
    { 'letter': 's', 'id': 2, 'class': 'letter' },
    { 'letter': 'e', 'id': 3, 'class': 'letter' },
    { 'letter': 'p', 'id': 4, 'class': 'letter' },
    { 'letter': 'h', 'id': 5, 'class': 'letter' },
    { 'letter': ' ', 'id': 6, 'class': 'letter' },
    { 'letter': 'L', 'id': 7, 'class': 'letter' },
    { 'letter': 'a', 'id': 8, 'class': 'letter' },
    { 'letter': 'r', 'id': 9, 'class': 'letter' },
    { 'letter': 'r', 'id': 10, 'class': 'letter' },
    { 'letter': 'i', 'id': 11, 'class': 'letter' },
    { 'letter': 'v', 'id': 12, 'class': 'letter' },
    { 'letter': 'y', 'id': 13, 'class': 'letter' }

  ])
  const [lettersWithPositions, setLettersWithPositions] = useState([])

  useEffect(() => {
    let array = []
    for (let letter of letters) {
      let ltr = document.getElementById(`${letter.id}`).getBoundingClientRect();
      let obj = {
        'letter': letter.letter,
        'id': letter.id,
        'start-x-val': ltr.x,
        'end-x-val': ltr.x + ltr.width
      }
      console.log(obj)
      array.push(obj)
    }
    setLettersWithPositions(array)
  }, [letters])


  const getMousePosition = (e) => {
    let position = e.clientX;
    setMouseX(position)
  }

  const handleClick = (e) => {
    let position = e.clientX;
    setBullets([...bullets, position])
    // console.log(lettersWithPositions)

    for (let obj of lettersWithPositions) {
      if (position >= obj["start-x-val"] && position <= obj["end-x-val"]) {
        console.log(' ')
        console.log('HIT!')
        let id = obj.id
        
        setTimeout(() => {
          // setLetters([...letters.slice(0, id), ...letters.slice(id + 1)])
          letters[id].class = 'letter-hit'
        }, 500)
        setTimeout(() => {
          // setLetters([...letters.slice(0, id), ...letters.slice(id + 1)])
          letters[id].class = 'letter'
        }, 2000)
      }
    }
  }


  return (
    <ShootingGameDisplay
      getMousePosition={getMousePosition}
      handleClick={handleClick}
      letters={letters}
      bullets={bullets}
      mouseX={mouseX}
    />
  )
}

export default ShootingGame;