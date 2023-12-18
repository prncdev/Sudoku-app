import { GRID } from "typings";
import { getRandomIndex, copyGrid, solveGrid } from "utils";
import global from 'global';

/**
 * Removes numbers from a full grid to create a Sudoku puzzle.
 * @param grid 9x9 2D array.
 * @param attempts number of attempts to solve (Higher means mroe difficult) - Default 5.
 */
const removeNumbers = function(grid: GRID, attempts = 5): GRID {
  while(attempts > 0) {
    let row = getRandomIndex();
    let col = getRandomIndex();

    while(grid[row][col] === 0) {
      row = getRandomIndex();
      col = getRandomIndex();
    }

    let backUp = grid[row][col];
    grid[row][col] = 0;

    // Copy grid.
    const gridCopy = copyGrid(grid);
    // set a global counter.
    global.counter = 0;

    // attempt to solve the grid.
    solveGrid(gridCopy);

    if(global.counter !== 1) {
      grid[row][col] = backUp;
      attempts--;
    }

    // if global counter is not 1.
      // grid[row][col] = backUp;
      // decreament attempts by 1.


  }

  return grid;
}

export default removeNumbers