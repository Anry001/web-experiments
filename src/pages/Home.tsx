import { Stack } from '@mui/material';
import ShitDataGrid from '@components/ShitDataGrid';

const Home = () => {
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
export default Home;
