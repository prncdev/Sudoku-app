import { useDispatch } from "react-redux";
import { Action, Dispatch } from "redux";
import { useCallback } from "react";

import { createGrid } from "reducers";
import { NewGameButton } from "components";
const NewGame = function() {
  const dispatch = useDispatch<Dispatch<Action>>();

  const createNewGrid = useCallback(() => {
    if(window.confirm("Do you want to start a new game?")) {
      dispatch(createGrid());
    }
  }, [dispatch]);

  return (
    <NewGameButton onClick={createNewGrid}>New Game</NewGameButton>
  )
}

export default NewGame;