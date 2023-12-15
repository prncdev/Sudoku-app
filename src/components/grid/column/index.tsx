import { Block } from "./styles";

type Props = {
  columnNumber: number | any;
  rowNumber: number | any;
}

const Column = function({columnNumber, rowNumber}: Props) {
  return (
    <Block data-cy='column'>
      {/* |{rowNumber}
      {columnNumber}| */}
    </Block>
  );
}

export default Column;