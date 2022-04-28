import {
  cellAt,
  getBottomRightPosition,
  getTopLeftPosition,
  Grid,
  Path,
  Position
} from "./grid";


/**
Returns a path if possible from the top-left to bottom-right squares of the given grid, or null if no path is possible.
 */
export function solve(grid: Grid): Path | null {
  const targetPos = getBottomRightPosition(grid);
  const startPos = getTopLeftPosition(grid);
  const answer = null;
  return answer;
}
