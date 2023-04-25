import { Button, Stack, TextField, Typography } from '@mui/material';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';

const ADD_USER_BUTTON_TEXT = 'Add user';

interface User {
  id: string;
  name: string;
  age: string;
}

const API_URL = 'http://localhost:3000';

const createUser = async (user: User) => {
  const { data } = await axios.post(`${API_URL}/users`, user);
  return data;
};

const AddUser = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const queryClient = useQueryClient();

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
  );
};
export default AddUser;
