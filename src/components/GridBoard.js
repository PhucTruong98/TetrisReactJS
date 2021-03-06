import GridSquare from './GridSquare'
import { shapes, bossShapes } from '../utils'
import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { moveDown } from '../actions'

// Represents a 10 x 18 grid of grid squares

export default function GridBoard(props) {

    const requestRef = useRef()
    //last time since board is updated
    const lastUpdateTimeRef = useRef(0)
    //total time between updates
    const progressTimeRef = useRef(0)
    const dispatch = useDispatch()

    const game = useSelector((state) => state.game)
    const { grid, shape, rotation, x, y, isRunning, speed, level, boss} = game


  // generates an array of 18 rows, each containing 10 GridSquares.

  const block = boss ? bossShapes[level - 2][0] : shapes[shape][rotation]
  const blockColor = boss ? 8 : shape % 7 + 1

  // map rows
  const gridSquares = grid.map((rowArray, row) => {
    // map columns
    return rowArray.map((square, col) => {
      // Find the block x and y on the shape grid
      // By subtracting the x and y from the col and the row we get the position of the upper left corner of the block array as if it was superimposed over the main grid
      const blockX = col - x
      const blockY = row - y
      let color = square
      // Map current falling block to grid.
      // For any squares that fall on the grid we need to look at the block array and see if there is a 1 in this case we use the block color.
      if (blockX >= 0 && blockX < block[0].length && blockY >= 0 && blockY < block.length) {
        color = block[blockY][blockX] === 0 ? color : blockColor
      }
      console.log("boss:" + boss + "color" + color);
      // Generate a unique key for every block
      const k = row * grid[0].length + col;
      // Generate a grid square
      return <GridSquare
              key={k}
              color={color} />
    })
  })


  //setting up the update function, link it to isRunning
  useEffect(() => {
    requestRef.current = requestAnimationFrame(update)
    return () => cancelAnimationFrame(requestRef.current)
}, [isRunning])


//update frames
  const update = (time) => {
    requestRef.current = requestAnimationFrame(update)
    if (!isRunning) {
        return 
    }
    if (!lastUpdateTimeRef.current) {
        lastUpdateTimeRef.current = time
    }
    const deltaTime = time - lastUpdateTimeRef.current
    progressTimeRef.current += deltaTime
    if (progressTimeRef.current > speed) {
        dispatch(moveDown())
        progressTimeRef.current = 0
    }
    lastUpdateTimeRef.current = time
} 

  // The components generated in makeGrid are rendered in div.grid-board

    return (
        <div className='grid-board'>
            {gridSquares}
        </div>
    )
}