// The function in this file will take care of filling up the grid with numbers.

// Either we can go up, folder by folder or we can make any folder availabel in globaly.
// import Grid from "../../components/grid";

// By setting up baseUrl and give folder name that you want to make availabe globaly in our tsconfig.json file.
import { GRID, NUMBERS } from 'typings';
import { ShuffleArray } from 'utils';
import { isInRow, isInCol } from 'utils';

const gridStaicNum: GRID = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
];

// Based on this integer of array. We will shuffle and generate our random numbers.
let numbers: NUMBERS[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/**
 * A backtracking/recursive function to check all the possible combination of numbers untill a solution is found.
 * @param grid 9x9 Sudoku Grid function.
 */

const FillGrid = function (grid: GRID) {
  let row = 0;
  let col = 0;

  for (let i = 0; i < 81; i++) {
    row = Math.floor(i / 9);
    col = i % 9;
    console.log(`Step${i + 1}: Row: ${row} Col: ${col}`);

    if (grid[row][col] === 0) {
      ShuffleArray(numbers);

      for (let value of numbers) {
        // Is it not in grid row?
        if (!isInRow({ grid, row, value })) {
          // Is it not in grid column?
          if (!isInCol({ grid, col, value })) {
            // Is it not in grid square?
            //...If it is true
            grid[row][col] = value;
            // Check if grid is full, if yes stop and return true
            // return true;
          }
        }
        
      }
      break;
    }
  }
};

export default FillGrid;
