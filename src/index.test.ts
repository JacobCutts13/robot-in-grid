import { Grid, parseGridStrings, Path } from "./grid";
import { solve } from "./index";
import { showPathOnMap } from "./pathPrinter";

test("solve a 1x1 map - no steps", async function () {
  const grid: Grid = parseGridStrings([
    ".",
  ]);

  const expectedPathOutput: Path = [];
  expect(solve(grid)).toStrictEqual(expectedPathOutput);
});

test("solve a non-trivial 5x5 map", async function () {
  const grid: Grid = parseGridStrings([
    "...x.",
    "..xxx",
    "x.x..",
    ".....",
    "xxx.."
  ]);

  const expectedPathOutput: Path = [
    ['right', { x: 1, y: 0 }],
    ['down', { x: 1, y: 1 }],
    ['down', { x: 1, y: 2 }],
    ['down', { x: 1, y: 3 }],
    ['right', { x: 2, y: 3 }],
    ['right', { x: 3, y: 3 }],
    ['right', { x: 4, y: 3 }],
    ['down', { x: 4, y: 4 }]
  ];
  expect(solve(grid)).toStrictEqual(expectedPathOutput);

  // print for visual inspection.  not as good as automatic inspection!
  const solution = solve(grid);
  if (solution) {
    console.log(showPathOnMap(solution, grid));
  }
});

test("solve a completely empty 4x4 map", async function () {
  const grid: Grid = parseGridStrings([
    "....",
    "....",
    "....",
    "....",
  ]);

  const expectedPathOutput: Path = [
    ['right', { x: 1, y: 0 }],
    ['right', { x: 2, y: 0 }],
    ['right', { x: 3, y: 0 }],
    ['down', { x: 3, y: 1 }],
    ['down', { x: 3, y: 2 }],
    ['down', { x: 3, y: 3 }]
  ];
  expect(solve(grid)).toStrictEqual(expectedPathOutput);
});



test("shows collisions in a bad path", () => {
  const grid: Grid = parseGridStrings([
    "..x..",
    "....x",
    "x.xxx",
    ".....",
    "xxx.."
  ]);


  const badPath: Path = [
    ['right', { x: 1, y: 0 }],
    ['right', { x: 2, y: 0 }],
    ['right', { x: 3, y: 0 }],
    ['down', { x: 3, y: 1 }],
    ['right', { x: 3, y: 2 }],
    ['right', { x: 3, y: 3 }],
    ['right', { x: 4, y: 3 }],
    ['down', { x: 4, y: 4 }]
  ];

  // print for visual inspection.  not as good as automatic inspection!  
  console.log(showPathOnMap(badPath, grid))
})