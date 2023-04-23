import { Button, Stack, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import {
  QueryClient,
  useMutation,
  UseMutateFunction,
} from '@tanstack/react-query';
import { createUser } from '@/api/createUser';

const ADD_USER_BUTTON_TEXT = 'Add user';

interface props {
  addUser: (user: any) => void;
}

const AddUser = ({ addUser }: props) => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  // const { mutate } = useMutation(createUser);

  const handleClick = () => {
    addUser({ id, name, age });
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
