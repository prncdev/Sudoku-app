import { AnyAction } from "redux";

import { copyGrid, createFullGrid, removeNumbers, compareArrays } from "utils";
import { Reducer } from "./interfaces";
import * as types from './types';
import { GRID } from "typings";

const initialState: Reducer = {};
const reducer = function(state = initialState, action: AnyAction): Reducer {
  switch (action.type) {
    case types.CREATE_GRID :
      {
        const solvedGrid = createFullGrid();
        const gridCopy = copyGrid(solvedGrid);
        // If we pass higher than 5 number in removeNumbers' parameter it will make the game harder.
        const challengeGrid = removeNumbers(gridCopy);
        const workingGrid = copyGrid(challengeGrid);

      return {
        ...state,
        challengeGrid,
        solvedGrid,
        workingGrid,
      }};
    
    case types.SELECT_BLOCK :
      return {
        ...state,
        selectedBlock: action.coords
      }
    
    case types.FILL_BLOCK: {
      if(state.workingGrid && state.solvedGrid) {
        if(state.solvedGrid[action.coords[0]][action.coords[1]] !== action.value) {
          console.log(state.solvedGrid[action.coords[0]][action.coords[1]]);
          alert('Incorrect Option!');
          return state;
        }
        // here should be workinGrid array I don't know why let's figure out after this.
        // state.solvedGrid[action.coords[0]][action.coords[1]] = action.value;

        state.workingGrid[action.coords[0]][action.coords[1]] = action.value
        if(compareArrays(state.workingGrid, state.solvedGrid)) {
          alert('WIN! You did! (:');
          // I was returning the entire state and the working grid let's find what was the issue.
        }
        return { ...state, workingGrid: [...state.workingGrid] as GRID };
      }
      return state;
    }

    default:
      return state;
  }
}

export default reducer;