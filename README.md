# Robot in a grid - Exercise

## Credits:

This task was elaborated from the outlined interview question 8.2 "Robot in a grid" in the book [Cracking the Coding Interview, by Gayle Laakmann McDowell](https://www.crackingthecodinginterview.com/)

## Brief

In `index.ts` write or complete the function:
`solve(grid:Grid): Path | null`.

Given a 2D grid of passable and impassable squares,
plan and return a path for a robot that starts at the top left position of that grid
to get to the bottom right.

The robot can only move down or right.

return a Path or return null if there is no possible path.

Path is a type described in grid.ts as an array of steps represented as
`[Direction, Position]` tuples.

```
type Path = [Direction, Position][];
```

Each of these step tuples represents the direction to step in and the resulting position.

Note that the starting position will never be represented in a Path. The first entry in the Path (if any) will be a step away from that starting position.

You should make sure your robot has a preference always to move right rather than down
assuming either move can lead to a successful route.  (This will make it much easier to state, in tests, the expected route.)

## Supporting code

### Modelling a grid, paths, directions, etc.

See `grid.ts` for types representing these things, and some useful helper functions.

You can use the function `cellAt(pos, grid)` to find what is at a given position in the grid.

### tests

`index.test.ts` already has a couple of tests written that expect paths to be found.

You should at least add a test for an impassable map.

The function `parseGridStrings()` can be used to get a Grid from `string[]` input.

# Example

### Example input grid

(visualised)

```
...x.
..xxx
x.x..
.....
xxx..
```

### Expected output

```
[
    ['right', { x: 1, y: 0 }],
    ['down', { x: 1, y: 1 }],
    ['down', { x: 1, y: 2 }],
    ['down', { x: 1, y: 3 }],
    ['right', { x: 2, y: 3 }],
    ['right', { x: 3, y: 3 }],
    ['right', { x: 4, y: 3 }],
    ['down', { x: 4, y: 4 }]
]
```

(Notice the original position is not mentioned in this path.)

### Visualisation of the expected path

Here's a visualisation of the grid again, with, added on the right, the expected steps the correct path should take (starting at 1).

```
...x.    S1.x.
..xxx    .2xxx
x.x..    x3x..
.....    .4567
xxx..    xxx.8
```

This is just a visualisation for your understanding - you don't have to produce such a diagram.
