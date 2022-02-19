import React from "react";
import { pause, resume } from "../actions";
import { useSelector, useDispatch } from "react-redux";

export default function ScoreBoard(props) {
  const isRunning = useSelector((state) => state.game.isRunning);
  const dispatch = useDispatch();

  return (
    <div className="score-board">
      <div>Score:{props.score}</div>
      <div>Level: 1</div>
      <button
        className="score-board-button"
        onClick={(e) => {
            
          if (isRunning) {
            dispatch(pause());
          }
          else 
          {dispatch(resume());}
        }}
      >
        Play
      </button>
      <button className="score-board-button" onClick={(e) => {}}>
        Restart
      </button>
    </div>
  );
}
