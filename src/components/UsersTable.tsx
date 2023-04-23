import { Button, Stack, TextField, Typography } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { QueryClient, useMutation, useQuery } from '@tanstack/react-query';
import { useState } from 'react';

const ADD_USER_BUTTON_TEXT = 'Add user';

const queryClient = new QueryClient();

interface User {
  id: string;
  name: string;
  age: string;
}

let users: User[] = [
  { id: '2', name: 'faf', age: '23' },
  { id: '3', name: 'lk', age: '50' },
  { id: '4', name: 'kak', age: '2' },
];

const getUsers = async (): Promise<User[]> => {
  return users;
};

const createUser = async (user: User): Promise<User> => {
  let newUser: User = user;
  console.log('before push', newUser);
  users = [...users, newUser];
  // users.push(newUser);
  console.log(users);
  return newUser;
};

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 70 },
  { field: 'age', headerName: 'Age', width: 70 },
];

const ShitDataGrid = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const { data, isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
  });

  const { mutate } = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });

  const handleClick = () => {
    mutate({ id, name, age });
  };

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
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
        loading={isLoading}
      />
      {/* <AddUser addUser={handleMutation} /> */}
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          Add new user:
        </Typography>
        <TextField
          onChange={(event) => setId(event.target.value)}
          id="outlined-basic"
          label="ID"
          variant="outlined"
        />
        <TextField
          onChange={(event) => setName(event.target.value)}
          id="outlined-basic"
          label="User Name"
          variant="outlined"
        />

        <TextField
          onChange={(event) => setAge(event.target.value)}
          id="outlined-basic"
          label="Age"
          variant="outlined"
        />
        <Button onClick={handleClick} variant="contained">
          {ADD_USER_BUTTON_TEXT}
        </Button>
      </Stack>
    </Stack>
  );
};
export default ShitDataGrid;
