import { useGetUsersQuery } from '@api/getUsers';
import { Stack } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import AddUser from '@components/AddUser';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'name', headerName: 'Name', width: 100, editable: true },
  { field: 'age', headerName: 'Age', width: 50, editable: true },
];

const ShitDataGrid = () => {
  const { data, isLoading } = useGetUsersQuery();

  return (
    <Stack
      sx={{ height: '100%', width: '100%' }}
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={3}
    >
      <DataGrid
        rows={data ?? []}
        columns={columns}
        pageSize={4}
        checkboxSelection
        loading={isLoading}
        disableSelectionOnClick
      />
      <AddUser />
    </Stack>
  );
};
export default ShitDataGrid;
