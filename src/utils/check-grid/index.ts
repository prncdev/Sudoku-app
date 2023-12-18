import { GRID } from "typings";

/**
 * A function to check if the grid is full.
 * @param grid A 9x9 array consisting of values from 0 to 9.
 * @returns a boolean value.
 */
const checkGrid = function(grid: GRID): boolean {
  for(let row = 0; row < 9; row++) {
    for(let col = 0; col < 9; col++) {
      if(grid[row][col] === 0) return false;
    }
  }
  return true;
}

export default checkGrid;