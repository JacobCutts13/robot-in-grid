import {
  cellAt,
  getBottomRightPosition,
  getTopLeftPosition,
  Grid,
  Path,
  Position
} from "./grid";


/*
...x.    S1.x.
..xxx    .2xxx
x.x..    x3x..
.....    .4567
xxx..    xxx.8
Returns a path if possible from the top-left to bottom-right squares of the given grid, or null if no path is possible.
PSUEDOCODE

function NEXT_MOVE(GRID, POSITION, MOVES)
  if(can move right)
    move right
    MOVES stores POSITION, RIGHT
  else (if can move down)
    move down
    MOVES stores POSITION, DOWN
  else 
    if(POSITION === START_POSITION){
      return null
    }
    else{
      BACK TRACK
    }
  if(POSITION !== END_POSITION){
    return NEXT_MOVE(GRID, POSITION, MOVES)
  }
  ELSE
    return MOVES

- can move right:
  cellAt(CURRENT_POSITION+DIRECTION_RIGHT, grid) === '.' 

- back track:
  GRID[CURRENT_POSITION] = "x" //don't go back that way
  POSITION move -MOVES[LAST_ELEMENT].direction //move backwards
  pop last MOVES
  


 */
export function solve(grid: Grid): Path | null {
  const targetPos = getBottomRightPosition(grid);
  const startPos = getTopLeftPosition(grid);
  const answer = null;
  return answer;
}
