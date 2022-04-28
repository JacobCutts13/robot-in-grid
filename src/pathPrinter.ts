//This module is not required for the exercise, but is provided as a convenience for path visualisation.

import { cellAt, getTopLeftPosition, Grid, Path, Position } from "./grid";

/**
Returns a string representation of a grid, with the steps of a path across it.

Any collisions(steps which would cross impassable terrain) will
be marked with "!".
**/
export function showPathOnMap(path: Path, grid: Grid): string {
    type AnnotationType = number | "!";
    type Annotations = AnnotationType[];
    type PositionStr = string;
    let annotatedGrid: Record<PositionStr, Annotations> = {};


    function posToString(pos: Position): string {
        return pos.x + "_" + pos.y;
    }
    let currentPos = getTopLeftPosition(grid);
    annotatedGrid[posToString(currentPos)] = [0];
    let stepCounter = 1;
    for (let [, pos] of path) {
        const posStr = posToString(pos);
        if (cellAt(pos, grid) === ".") {
            annotatedGrid[posStr] = [stepCounter];
        } else {
            annotatedGrid[posStr] = ["!", stepCounter];
        }
        stepCounter++;
    }

    const lines = [];
    for (let rowIx = 0; rowIx < grid.numRows; rowIx++) {
        const cellsInLine: string[] = [];
        for (let colIx = 0; colIx < grid.numCols; colIx++) {
            const pos = { x: colIx, y: rowIx };
            const cell = cellAt(pos, grid);
            const annotations = annotatedGrid[posToString(pos)];
            if (annotations && annotations.length > 0) {
                cellsInLine.push("" + annotations[0]);
            }
            else {
                cellsInLine.push(cell!);
            }
        }
        lines.push(cellsInLine.join(""));
    }
    return JSON.stringify(lines, null, 2)
}
