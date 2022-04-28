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

function Move(grid: Grid, position: Position, path: Path, startPos: Position, targetPos: Position): Path | null{

  if(position.x === targetPos.x && position.y === targetPos.y){
    return path.slice(1);  
  }
  else{ 
  if(cellAt({x: position.x + 1, y: position.y}, grid) === "."){
    position.x += 1
    const newPos = {x: position.x, y: position.y}
    path.push(["right", newPos]);
  }
  else if(cellAt({x: position.x, y: position.y + 1}, grid) === "."){
    position.y += 1
    const newPos = {x: position.x, y: position.y}
    path.push(["down", newPos]);
  }
  else{ 
      if(position.x === startPos.x && position.y === startPos.y){
      return null
    }
    else{
      grid.rows[position.y][position.x] = "x"; //remove square
      position.x = path[path.length -2][1].x;
      position.y = path[path.length -2][1].y;
      path.pop();
      }
    }
  return Move(grid, position, path, startPos, targetPos);
  }
}

export function solve(grid: Grid): Path | null {
  const targetPos = getBottomRightPosition(grid);
  const startPos = getTopLeftPosition(grid);
  const moveStartPos = {x: startPos.x, y: startPos.y}
  const answer = Move(grid, moveStartPos, [["right", {x: startPos.x, y: startPos.y}]], startPos, targetPos);
  return answer;
}
