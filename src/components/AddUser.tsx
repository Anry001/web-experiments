import { useAddUserMutation } from '@/api/addUser';
import { Button, Stack, TextField, Typography } from '@mui/material';
import { useState } from 'react';

const ADD_USER_BUTTON_TEXT = 'Add user';

const AddUser = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const { mutate } = useAddUserMutation();

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
