import { GRID, NUMBERS } from "typings";

type Input = {
  grid: GRID,
  col: number,
  value: NUMBERS
}

/**
 * A function that returns true if the value is already in there in the current grid column.
 * @param input Object of 9x9 array.
 * @returns 
 */

const isInCol = ({grid, col, value}: Input):boolean => {
  for(let i = 0; i < 9; i++) {
    if(value === grid[i][col]) return true;
  }
  return false;
}

export default isInCol;