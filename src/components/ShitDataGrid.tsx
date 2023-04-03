import Box from '@mui/material/Box';
import { Stack, Button } from '@mui/material';

const ShitDataGrid = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-evenly"
      alignItems="flex-start"
      spacing={2}
      mt="50px"
    >
      <Button sx={{ backgroundColor: 'red' }} variant="contained">
        shit face
      </Button>
      <Button sx={{ backgroundColor: 'red' }} variant="contained">
        shit face
      </Button>
      <Button variant="contained">shit face</Button>
    </Stack>
  );
};
export default ShitDataGrid;
