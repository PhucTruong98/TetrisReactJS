import React from 'react'
import { drop, moveLeft, moveRight, MOVE_DOWN, rotate, skip } from "../actions";
import { useSelector, useDispatch } from "react-redux";

// Displays a message
export default function MessagePopup(props) {
  const dispatch = useDispatch();

  const isRunning = useSelector((state) => state.game.isRunning)
  const gameOver = useSelector((state) => state.game.gameOver)

  let message = ''
  let isHidden = 'hidden'

  if (gameOver) {
    message = 'Game Over'
    isHidden = ''
  } else if (!isRunning) {
    message = 'Paused'
    isHidden = ''
  }

  return (
    <div className={`message-popup ${isHidden}`}>
      <h1>{message}</h1>
      <button
      style={
        {
          fontSize: 12,
        }
      }
      onClick={(e) => {
        

        dispatch(skip());
      }}
      >
        CONTINUE
      </button>
      <p>(Will reset your score but allow you to keep your level and rows completed)</p>
    </div>
    
  )
}