import { Stack, Button } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 70 },
  { field: 'age', headerName: 'Age', width: 70 },
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
      <DataGrid
        sx={{ width: '43%', height: '60%' }}
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
