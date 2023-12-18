import { GRID, NUMBERS } from "typings";

type Input = {
  grid: GRID;
  row: number;
  value: NUMBERS;
}

/**
 * A function that returns true if the value is already in there in the current grid row.
 * @param Input Object with 9x9 sudoku Grid, row index and value.
 * @returns 
 */
const isInRow = ({ grid, row, value }: Input):boolean => grid[row].includes(value);

export default isInRow;