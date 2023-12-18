import { Card, Content, Title, Numbers, Grid, NewGame } from './components';

const App = function (): JSX.Element {
  return (
    <Content data-cy='Content'>
      <Title data-cy='Title'>Sudoku Game</Title>
      <Card data-cy='Card'>
        <NewGame />
        <Grid />
        <Numbers />
      </Card>
    </Content>
  );
};

export default App;
