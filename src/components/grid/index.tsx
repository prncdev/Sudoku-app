import { Children, useEffect, useCallback } from 'react';
import { Dispatch, AnyAction } from 'redux';
import useMousetrap from 'react-hook-mousetrap';

import { GridContainer, Row } from './styles';
import Column from './column';
import { useDispatch, useSelector } from 'react-redux';
import { createGrid, fillBlock, Reducer, selectedBlock } from 'reducers';
import { Block_COORDS, GRID, INDEX, N, NUMBERS } from 'typings';
// import { createFullGrid } from 'utils';

type State = {
  selectedBlock?: Block_COORDS;
  selectedValue?: N;
  solvedGrid?: GRID;
};

const Grid = function () {
  // Usage of an array indices as key value is a bad practice because, it will make issues when it comes to reordering or dynamic rendering.
  // Because it may confuse React in reconciliation process where it compare virtual DOMs.

  const state = useSelector<Reducer, State>(({ selectedBlock, solvedGrid, workingGrid }) => ({
    selectedBlock,
    selectedValue: workingGrid && selectedBlock ? 
      workingGrid[selectedBlock[0]][selectedBlock[1]]
    : 0,
    solvedGrid,
  }));

  const dispatch = useDispatch<Dispatch<AnyAction>>();

  const create = useCallback(() => dispatch(createGrid()), [dispatch]);

  const fill = useCallback(
    (n: NUMBERS) => {
      if (state.selectedBlock && state.selectedValue === 0)
        dispatch(fillBlock(n, state.selectedBlock))
    },
    [dispatch, state.selectedBlock, state.selectedValue]
  )

  const moveDown = () => {
    if(state.selectedBlock && state.selectedBlock[0] < 8)
      dispatch(selectedBlock([
        (state.selectedBlock[0] + 1) as INDEX,
        state.selectedBlock[1],
      ]));
  };

  const moveUp = () => {
    if(state.selectedBlock && state.selectedBlock[0] > 0)
      dispatch(selectedBlock([
    (state.selectedBlock[0] - 1) as INDEX,
        state.selectedBlock[1],
      ]));
  };

  const moveLeft = () => {
    if(state.selectedBlock && state.selectedBlock[1] > 0)
      dispatch(selectedBlock([
        state.selectedBlock[0],
        (state.selectedBlock[1] - 1) as INDEX,
      ]));
  };

  const moveRight = () => {
    if(state.selectedBlock && state.selectedBlock[1] < 8)
      dispatch(selectedBlock([
        state.selectedBlock[0],
        (state.selectedBlock[1] + 1) as INDEX,
      ]));
  };

  useMousetrap("1", ()=> fill(1));
  useMousetrap("2", ()=> fill(2));
  useMousetrap("3", ()=> fill(3));
  useMousetrap("4", ()=> fill(4));
  useMousetrap("5", ()=> fill(5));
  useMousetrap("6", ()=> fill(6));
  useMousetrap("7", ()=> fill(7));
  useMousetrap("8", ()=> fill(8));
  useMousetrap("9", ()=> fill(9));


  useMousetrap('up', moveUp);
  useMousetrap('down', moveDown);
  useMousetrap('left', moveLeft);
  useMousetrap('right', moveRight);


  // Here we have persisted the state of createGrid function and will only run when new game button clicked.
  useEffect(() => {
    !state.solvedGrid && create();
  }, [create, state.solvedGrid]);

  return (
    // This is a grid container whose contain 3x3 bigger blocks or rows
    <GridContainer data-cy='grid-container'>
      {/* This will be our grid item or our big block which are rows item which and will contain smaller blocks */}
      {Children.toArray(
        [...Array(9)].map((_, roIndex) => (
          <Row data-cy='grid-block-row-container'>
            {/* These will be our small blocks and will be our columns for gird row items */}
            {Children.toArray(
              [...Array(9)].map((_, colIndex) => (
                <Column
                  columnIndex={colIndex as INDEX}
                  rowIndex={roIndex as INDEX}
                />
              ))
            )}
          </Row>
        ))
      )}
    </GridContainer>
  );
};

export default Grid;
