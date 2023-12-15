import { Children } from 'react';
import { GridContainer, Row } from './styles';
import Column from './column';


const Grid = function () {
  // Usage of an array indices as key value is a bad practice because, it will make issues when it comes to reordering or dynamic rendering.
  // Because it may confuse React in reconciliation process where it compare virtual DOMs.
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
                <Column columnNumber={colIndex} rowNumber={roIndex}/>
              ))
            )}
          </Row>
        ))
      )}
    </GridContainer>
  );
};

export default Grid;
