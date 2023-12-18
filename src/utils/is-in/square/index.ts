import { NUMBERS, SQUARE } from "typings";

type Input = {
  square: SQUARE;
  value: NUMBERS;
}

/**
 * A function that returns if the value is already there in the current grid square.
 * @param input Object of 3x3 square and value.
 * @returns 
 */
const isInSquare = function({ square, value }: Input): boolean {
  return [...square[0], ...square[1], ...square[2]].includes(value);
}

export default isInSquare;