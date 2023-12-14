import { Card, Content, Title } from './components';

const App = function() {
  return (
    <Content data-cy="Content">
      <Title data-cy="Title">Sudoku Game</Title>
      <Card data-cy="Card">This is a work in progress</Card>
    </Content>
  );
}

export default App;