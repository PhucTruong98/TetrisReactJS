import {
  MOVE_RIGHT,
  MOVE_LEFT,
  MOVE_DOWN,
  ROTATE,
  PAUSE,
  RESUME,
  RESTART,
  GAME_OVER,
} from "../actions";

import {
  defaultState,
  canMoveTo,
  nextRotation,
  addBlockToGrid,
  randomShape,
  checkRows,
  shapes,
  bossShapes
} from "../utils";

const gameReducer = (state = defaultState(), action) => {
  const { shape, grid, x, y, rotation, nextShape, score, isRunning, rowsCompleted, level, boss} = state;
const levels = [2, 7, 14, 21, 34];


  switch (action.type) {




    case ROTATE:
      const newRotation = nextRotation(shape, rotation);
      if (canMoveTo(shape, grid, x, y, newRotation, boss, level)) {
        //return state as is, but add new rotation
        return { ...state, rotation: newRotation };
      }
      //return state as is, add no new rotation
      return state;

    case MOVE_RIGHT:
      if (canMoveTo(shape, grid, x + 1, y, rotation, boss, level)) {
        return { ...state, x: x + 1 };
      }
      return state;

    case MOVE_LEFT:
      // subtract 1 from the x and check if this new position is possible by calling `canMoveTo()
      if (canMoveTo(shape, grid, x - 1, y, rotation, boss, level)) {
        return { ...state, x: x - 1 };
      }
      return state;

    case MOVE_DOWN:
      // Get the next potential Y position
      const maybeY = y + 1;

      // Check if the current block can move here
      if (canMoveTo(shape, grid, x, maybeY, rotation, boss, level)) {
        // If so move down don't place the block
        return { ...state, y: maybeY };
      }

      // If not place the block
      // (this returns an object with a grid and gameover bool)
      const obj = addBlockToGrid(shape, grid, x, y, rotation, boss, level);
      const newGrid = obj.grid;
      const gameOver = obj.gameOver;

      if (gameOver) {
        // Game Over
        const newState = { ...state };
        newState.shape = 0;
        newState.grid = newGrid;
        return { ...state, gameOver: true };
      }

      // reset somethings to start a new shape/block
      const newState = defaultState();
      newState.grid = newGrid;
      newState.shape = nextShape;
      newState.score = score;
      newState.isRunning = isRunning;
      newState.rowsCompleted = rowsCompleted;
      newState.level = level;

      // TODO: Check and Set level
      // Score increases decrease interval
      let checkRowsResult = checkRows(newGrid);
      newState.score = score + checkRowsResult[0];
      newState.rowsCompleted = rowsCompleted + checkRowsResult[1];
      if(newState.rowsCompleted >= levels[newState.level - 1])
      //level up
      {
        newState.level += 1;
        alert("Level" + (newState.level - 1) + " Boss about to appear, get ready for a brutal attack" );
        newState.boss = true;
      }




      return newState;

    case RESUME:
      return { ...state, isRunning: true };

    case PAUSE:
      return { ...state, isRunning: false };

    case GAME_OVER:
      return state;

    case RESTART:
      return defaultState();

    default:
      return state;
  }
};

export default gameReducer;
