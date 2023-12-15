import { GRID, NUMBERS } from "typings";

type Input = {
  grid: GRID,
  col: number,
  value: NUMBERS
}

const isInCol = ({grid, col, value}: Input):boolean => {
  for(let i = 0; i < 9; i++) {
    if(value === grid[i][col]) return true;
  }
  return false;
}

export default isInCol;