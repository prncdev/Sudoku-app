import { Card, Content, Title } from './components';
import Grid from './components/grid';

const App = function(): JSX.Element {
  return (
    <Content data-cy="Content">
      <Title data-cy="Title">Sudoku Game</Title>
      <Card data-cy="Card">
        <Grid></Grid>
      </Card>
    </Content>
  );
}

export default App;