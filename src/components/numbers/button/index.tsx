import { Dispatch, AnyAction } from "redux";
import { useDispatch, useSelector } from "react-redux";

import { fillBlock, Reducer } from "reducers";
import { Block_COORDS, N, NUMBERS } from "typings";
import { Button } from "components";
import { useCallback } from "react";

type State = {
  selectedBlock?: Block_COORDS;
  selectedValue: N;
};
type Props = {
  value: NUMBERS;
};


const NumberButton = function({ value }: Props) {
  const state = useSelector<Reducer, State>(({ selectedBlock, workingGrid }) => ({
    selectedBlock,
    selectedValue: workingGrid && selectedBlock ? 
      workingGrid[selectedBlock[0]][selectedBlock[1]]
    : 0,
  }));

  const dispatch = useDispatch<Dispatch<AnyAction>>()

  const fill = useCallback(() => {
    if (state.selectedBlock && state.selectedValue === 0) {
      dispatch(fillBlock(value, state.selectedBlock));
    }
  }, [dispatch, state.selectedBlock, state.selectedValue, value]);

  return (
    <Button onClick={fill}>{value}</Button>
  )
};

export default NumberButton;