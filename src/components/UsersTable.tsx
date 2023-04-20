import { Stack, Typography } from '@mui/material';
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
      sx={{ height: '100%', width: '100%' }}
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={5}
    >
      <DataGrid
        rows={data ?? []}
        columns={columns}
        pageSize={4}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
        loading={isLoading}
      />
      <Stack sx={{}}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          Add new user
        </Typography>
      </Stack>
    </Stack>
  );
};
export default ShitDataGrid;
