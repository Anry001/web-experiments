import { Stack } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetUsersQuery } from '@/api/getUsers';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 70 },
  { field: 'age', headerName: 'Age', width: 70 },
];

const ShitDataGrid = () => {
  const { data, isLoading } = useGetUsersQuery();

  return (
    <Stack
      sx={{ height: '45vh', width: '20vw' }}
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <DataGrid
        sx={{ height: '100%', width: '100%' }}
        rows={data ?? []}
        columns={columns}
        pageSize={4}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
        loading={isLoading}
      />
    </Stack>
  );
};
export default ShitDataGrid;
