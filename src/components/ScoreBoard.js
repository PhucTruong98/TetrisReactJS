import React from "react";
import { pause, restart, resume } from "../actions";
import { useSelector, useDispatch } from "react-redux";

export default function ScoreBoard(props) {
  const isRunning = useSelector((state) => state.game.isRunning);
  const dispatch = useDispatch();
  const score = useSelector((state) => state.game.score);
  const rowsCompleted = useSelector((state) => state.game.rowsCompleted);
  const level = useSelector((state) => state.game.level);


  return (
    <div className="score-board">
      <div>Score:{score}</div>
      <div>Rows Completed:{rowsCompleted}</div>

      <div>Level: {level}</div>
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
        {isRunning == true? "Pause" : "Play"}
      </button>
      <button className="score-board-button" onClick={(e) => {
          dispatch(restart());
      }}>
        Restart
      </button>
    </div>
  );
}
