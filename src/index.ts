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
  //reached target!
  if(position.x === targetPos.x && position.y === targetPos.y){
    return path;  
  }
  //keep moving
  else{ 
    //can we move right
    if(cellAt({x: position.x + 1, y: position.y}, grid) === "."){
      position.x += 1
      const newPos = {x: position.x, y: position.y}
      path.push(["right", newPos]);
    }
    //can we move down
    else if(cellAt({x: position.x, y: position.y + 1}, grid) === "."){
      position.y += 1
      const newPos = {x: position.x, y: position.y}
      path.push(["down", newPos]);
    }
    //can't move right or down
    else{ 
      //if we backtracked to start then no solution return null
        if(position.x === startPos.x && position.y === startPos.y){
        return null
      }
      //backtrack
      else{
        grid.rows[position.y][position.x] = "x"; //remove square
        position.x = path[path.length -2][1].x; //move back 
        position.y = path[path.length -2][1].y;
        path.pop(); //remove previous move from path
        }
      }
    return Move(grid, position, path, startPos, targetPos); //find next move from new position
    }
}

export function solve(grid: Grid): Path | null {
  const targetPos = getBottomRightPosition(grid);
  const startPos = getTopLeftPosition(grid);
  const moveStartPos = {x: startPos.x, y: startPos.y} //creating copy to prevent aliasing
  const answer = Move(grid, moveStartPos, [], startPos, targetPos);
  return answer;
}
