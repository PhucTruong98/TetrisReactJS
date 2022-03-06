import { GRID_WIDTH } from "./constants";

export const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Returns the default grid
export const gridDefault = () => {
  const rows = 18;
  const cols = GRID_WIDTH;
  const array = [];

  for (let i = 0; i < rows; i++) {
    array.push([]);
    for (let j = 0; j < cols; j++) {
      array[i].push(0);
    }
  }

  return array;
};




export const bossShapes = [
  [
    [// level 1 boss + - x /
      [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
      [1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    ],

  ],

  [ // level 2 boss needle rain
    [
      [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
      [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
      [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
      [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
      [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    ],
  ],

  [ // level 3 ""tetris""
    [
      [1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1],
      [0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0],
      [0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1],
      [0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1],
      [0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1],
    ],
  ],

  [ // level 4 ""helix""
  [
    [1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0],
    [0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
    [0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0],
    [0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
    [1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0],
  ],
],

[ // level 5 ""skull""
[
  [0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0],
  [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
  [0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
  [0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0],






],
],

]



// Define block shapes and their rotations as arrays.
export const shapes = [
  // none

  [
    [
      [0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 1, 1, 1, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0],
    ],
  ],

  [
      [
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
        
      ]
  ],

  // I
  [
    [
      [0, 0, 0, 0],
      [1, 1, 1, 1],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],

    [
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
    ],
  ],

  //T
  [
    [
      [0, 0, 0, 0],
      [1, 1, 1, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 0],
    ],

    [
      [0, 1, 0, 0],
      [1, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 0],
    ],

    [
      [0, 1, 0, 0],
      [1, 1, 1, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],

    [
      [0, 1, 0, 0],
      [0, 1, 1, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 0],
    ],
  ],

  // L
  [
    [
      [0, 0, 0, 0],
      [1, 1, 1, 0],
      [1, 0, 0, 0],
      [0, 0, 0, 0],
    ],

    [
      [1, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 0],
    ],

    [
      [0, 0, 1, 0],
      [1, 1, 1, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],

    [
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0],
    ],
  ],

  // J
  [
    [
      [1, 0, 0, 0],
      [1, 1, 1, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],

    [
      [0, 1, 1, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 0],
    ],

    [
      [0, 0, 0, 0],
      [1, 1, 1, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 0],
    ],

    [
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [1, 1, 0, 0],
      [0, 0, 0, 0],
    ],
  ],

  // Z
  [
    [
      [0, 0, 0, 0],
      [1, 1, 0, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0],
    ],

    [
      [0, 0, 1, 0],
      [0, 1, 1, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 0],
    ],
  ],

  // S
  [
    [
      [0, 0, 0, 0],
      [0, 1, 1, 0],
      [1, 1, 0, 0],
      [0, 0, 0, 0],
    ],

    [
      [0, 1, 0, 0],
      [0, 1, 1, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 0],
    ],
  ],

  // O
  [
    [
      [0, 1, 1, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
  ],

    // S
  [
    [
      [0, 0, 0, 0],
      [0, 1, 1, 0],
      [1, 1, 0, 0],
      [0, 0, 0, 0],
    ],

    [
      [0, 1, 0, 0],
      [0, 1, 1, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 0],
    ],
  ],  
  // tank
  [
    [
      [0, 0, 1, 0],
      [0, 1, 0, 1],
      [0, 1, 0, 1],
      [0, 0, 0, 0],
    ],

    [
      [0, 1, 1, 0],
      [0, 0, 0, 1],
      [0, 1, 1, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 0, 0, 0],
      [0, 1, 0, 1],
      [0, 1, 0, 1],
      [0, 0, 1, 0],
    ],

    [
      [0, 0, 1, 1],
      [0, 1, 0, 0],
      [0, 0, 1, 1],
      [0, 0, 0, 0],
    ],
  ],

      // w
      [
        [
          [0, 0, 0, 0],
          [0, 1, 1, 0],
          [0, 0, 1, 1],
          [0, 0, 0, 1],
        ],
    
        [
          [0, 0, 0, 0],
          [0, 0, 0, 1],
          [0, 0, 1, 1],
          [0, 1, 1, 0],
        ],

        [
          [0, 0, 0, 0],
          [0, 1, 0, 0],
          [0, 1, 1, 0],
          [0, 0, 1, 1],
        ],

        [
          [0, 0, 0, 0],
          [0, 0, 1, 1],
          [0, 1, 1, 0],
          [0, 1, 0, 0],
        ],


      ],  


      // sword
      [
        [
          [0, 0, 1, 0],
          [0, 1, 1, 1],
          [0, 0, 1, 0],
          [0, 0, 1, 0],
        ],
    
        [
          [0, 0, 0, 0],
          [0, 0, 1, 0],
          [1, 1, 1, 1],
          [0, 0, 1, 0],
        ],

        [
          [0, 0, 1, 0],
          [0, 0, 1, 0],
          [0, 1, 1, 1],
          [0, 0, 1, 0],
        ],

        [
          [0, 1, 0, 0],
          [1, 1, 1, 1],
          [0, 1, 0, 0],
          [0, 0, 0, 0],
        ],


      ],  

      // y
      [
        [
          [0, 1, 0, 1],
          [0, 0, 1, 0],
          [0, 0, 1, 0],
          [0, 0, 1, 0],
        ],
    
        [
          [0, 0, 0, 0],
          [0, 0, 0, 1],
          [1, 1, 1, 0],
          [0, 0, 0, 1],
        ],

        [
          [0, 0, 1, 0],
          [0, 0, 1, 0],
          [0, 0, 1, 0],
          [0, 1, 0, 1],
        ],

        [
          [1, 0, 0, 0],
          [0, 1, 1, 1],
          [1, 0, 0, 0],
          [0, 0, 0, 0],
        ],


      ],  

      // sword
      [
        [
          [0, 0, 1, 0, 0],
          [0, 1, 1, 1, 0],
          [0, 0, 1, 0, 0],
          [0, 1, 0, 1, 0],
          [0, 0, 0, 0, 0],

        ],
    
        [
          [0, 0, 0, 0, 0],
          [0, 1, 0, 1, 0],
          [0, 0, 1, 0, 1],
          [0, 1, 0, 1, 0],
          [0, 0, 0, 0, 0],

        ],

        [
          [0, 0, 0, 0, 0],
          [0, 1, 0, 1, 0],
          [0, 0, 1, 0, 0],
          [0, 1, 1, 1, 0],
          [0, 0, 1, 0, 0],

        ],

        [
          [0, 0, 0, 0, 0],
          [0, 1, 0, 1, 0],
          [1, 1, 1, 0, 0],
          [0, 1, 0, 1, 0],
          [0, 0, 0, 0, 0],

        ],


      ],  

      [
        [
          [0,0,0,0,0],
          [0,0,0,0,0],
          [1,1,1,1,1],
          [0,0,0,0,0],
          [0,0,0,0,0],

        ],
        [
          [0,0,1,0,0],
          [0,0,1,0,0],
          [0,0,1,0,0],
          [0,0,1,0,0],
          [0,0,1,0,0],

        ]

      ]

];

// Random Shape
export const randomShape = () => {
  return random(1, shapes.length - 1);
};

// Return the default state for the game
export const defaultState = () => {
  return {
    // Create an empty grid
    grid: gridDefault(),
    // Get a new random shape``
    shape: randomShape(),
    // set rotation of the shape to 0
    rotation: 0,
    // set the 'x' position of the shape to 5 and y to -4, which puts the shape in the center of the grid, above the top
    x: 0,
    y: -4,
    // set the index of the next shape to a new random shape
    nextShape: randomShape(),
    // Tell the game that it's currently running
    isRunning: true,
    // Set the score to 0
    score: 0,
    // Set the default speed
    speed: 1000,
    // Game isn't over yet
    gameOver: false,
    //rows completed
    rowsCompleted: 0,
    level: 1,
    boss: false
  };
};

// Returns the next rotation for a shape
// rotation can't exceed the last index of the the rotations for the given shape.
export const nextRotation = (shape, rotation) => {
  return (rotation + 1) % shapes[shape].length;
};


//return true or false if the block can move to x, y
export const canMoveTo = (shape, grid, x, y, rotation, boss, level) => {
 
  const currentShape = boss? bossShapes[level-2][0] : shapes[shape][rotation];
  // Loop through all rows and cols of the **shape**
  for (let row = 0; row < currentShape.length; row++) {
    for (let col = 0; col < currentShape[row].length; col++) {
      // Look for a 1 here
      if (currentShape[row][col] !== 0) {
        // x offset on grid
        const proposedX = col + x;
        // y offset on grid
        const proposedY = row + y;
        if (proposedY < 0) {
          continue;
        }
        // Get the row on the grid
        const possibleRow = grid[proposedY];
        // Check row exists
        if (possibleRow) {
          // Check if this column in the row is undefined, if it's off the edges, 0, and empty
          if (
            possibleRow[proposedX] === undefined ||
            possibleRow[proposedX] !== 0
          ) {
            // undefined or not 0 and it's occupied we can't move here.
            return false;
          }
        } else {
          return false;
        }
      }
    }
  }
  return true;
};

export const addBlockToGrid = (shape, grid, x, y, rotation, boss, level) => {
  let gameOver = false;
  const block = boss? bossShapes[level - 2][0] : shapes[shape][rotation];
  const newGrid = [...grid];
  const color = boss? 8 : shape % 7 + 1;

  for (let row = 0; row < block.length; row++) {
    for (let col = 0; col < block[row].length; col++) {
      if (block[row][col] == 1) {
        const yIndex = y + row;
        if (yIndex < 0) {
          gameOver = true;
        } else {
          newGrid[row + y][col + x] = color;
        }
      }
    }
  }

  return { grid: newGrid, gameOver: gameOver };
};

export const checkRows = (grid) => {
  const points = [0, 40, 100, 300, 1200];
  let completedRow = 0;

  for (let row = 0; row < grid.length; row++) {
    if (grid[row].indexOf(0) == -1) {
      completedRow += 1;
      grid.splice(row, 1);
      grid.unshift(Array(GRID_WIDTH).fill(0));
    }
  }

  return [points[completedRow], completedRow];
};
