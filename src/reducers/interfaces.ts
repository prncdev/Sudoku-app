import { GRID, Block_COORDS } from "typings";

export type Reducer = {
  challengeGrid?: GRID;
  selectedBlock?: Block_COORDS;
  solvedGrid?: GRID;
  workingGrid?: GRID;
}