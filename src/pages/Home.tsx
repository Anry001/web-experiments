import { Stack, Button } from '@mui/material';
import ShitDataGrid from '@components/ShitDataGrid';
import { Link } from 'react-router-dom';

const HELLO_WORLD_BUTTON_TEXT = 'Click to go to hello world';

const Home = () => {
  return (
    <Stack>
      <Stack
        sx={{ background: 'yellow' }}
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        spacing={2}
      >
        <ShitDataGrid />
        <ShitDataGrid />
        <ShitDataGrid />
      </Stack>
      <Stack
        sx={{ mt: '100px' }}
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        spacing={10}
      >
        <Link to="about" style={{ textDecoration: 'none' }}>
          <Button variant="contained">{HELLO_WORLD_BUTTON_TEXT}</Button>
        </Link>
        <Button variant="contained">Click me</Button>
      </Stack>
    </Stack>
  );
};
export default Home;
