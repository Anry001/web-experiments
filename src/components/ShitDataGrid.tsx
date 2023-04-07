import { Stack, Button, Box } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 70 },
  { field: 'age', headerName: 'Age', width: 70 },
];

const rows = [
  { id: 2, name: 'anry', age: 23 },
  { id: 3, name: 'lk', age: 50 },
  { id: 4, name: 'kak', age: 2 },
];

const ShitDataGrid = () => {
  return (
    <Stack
      sx={{ height: '45vh', width: '45vw' }}
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <Button variant="contained">shit face</Button>
      <DataGrid
        sx={{ width: '63%', height: '60%' }}
        rows={rows}
        columns={columns}
        pageSize={4}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Stack>
  );
};
export default ShitDataGrid;