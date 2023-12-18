import { useSelector, useDispatch } from 'react-redux';
import { Dispatch, AnyAction } from 'redux';

import { N, INDEX } from 'typings';
import { Reducer, selectedBlock } from 'reducers';
import { Block } from './styles';

type State = {
  value: N;
  isActive: boolean;
  isPuzzle: boolean;
};

type Props = {
  columnIndex: INDEX;
  rowIndex: INDEX;
};

const Column = function ({ columnIndex, rowIndex,  }: Props) {
  const state = useSelector<Reducer, State>(({challengeGrid, workingGrid, selectedBlock }) => ({
    isActive: selectedBlock
      ? selectedBlock[0] === rowIndex && selectedBlock[1] === columnIndex
      : false,
      isPuzzle: challengeGrid && challengeGrid[rowIndex][columnIndex] !== 0 ? true : false,

    value: workingGrid ? workingGrid[rowIndex][columnIndex] : 0,
  }));

  const dispatch = useDispatch<Dispatch<AnyAction>>();

  const handleClick = (event: any) => {
    if(!state.isActive) {
      dispatch(selectedBlock([rowIndex, columnIndex]));
    }
  };

  return (
    <Block
      data-cy='column'
      onClick={handleClick}
      active={state.isActive}
      puzzle={state.isPuzzle}
    >
      {state.value !== 0 ? state.value : ''}
    </Block>
  );
};

export default Column;
