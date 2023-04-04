import Box from '@mui/material/Box';
import { Stack, Button } from '@mui/material';
import ShitDataGrid from './components/ShitDataGrid';

const App = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-evenly"
      alignItems="center"
      spacing={2}
    >
      <ShitDataGrid />
      <ShitDataGrid />
      <ShitDataGrid />
    </Stack>
  );
};

export default App;
