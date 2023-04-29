import { useAddUserMutation } from '@api/addUser';
import { User } from '@data/data';
import { Button, Stack, TextField, Typography } from '@mui/material';
import { useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';

const ADD_USER_BUTTON_TEXT = 'Add user';
const ADD_USER_TITLE = 'Add new user';

interface UserFormData {
  id: string;
  name: string;
  age: string;
}

const mutationConfig = () => {
  const queryClient = useQueryClient();

  return {
    onSuccess: (data: User) => {
      console.log('User created:', data);
      queryClient.invalidateQueries(['users']);
    },
  };
};

const AddUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors: error },
  } = useForm<UserFormData>();

  const { mutate } = useAddUserMutation(mutationConfig());

  const onSubmit = ({ id, name, age }: UserFormData) => {
    mutate({ id, name, age });
  };

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      component="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
        {ADD_USER_TITLE}
      </Typography>
      <TextField
        id="outlined-basic"
        label="ID"
        variant="outlined"
        {...register('id', {
          required: { value: true, message: 'ID required' },
          minLength: {
            value: 2,
            message: 'ID must be at least 2 characters',
          },
        })}
        error={!!error.id}
        helperText={error.id?.message}
      />
      <TextField
        id="outlined-basic"
        label="User Name"
        variant="outlined"
        {...register('name', {
          required: { value: true, message: 'Name required' },
          minLength: {
            value: 3,
            message: 'name must be at least 3 characters',
          },
        })}
        error={!!error.name}
        helperText={error.name?.message}
      />
      <TextField
        id="outlined-basic"
        label="Age"
        variant="outlined"
        {...register('age', {
          required: { value: true, message: 'Age required' },
          min: { value: 4, message: 'Age must be at least 4' },
        })}
        error={!!error.age}
        helperText={error.age?.message}
      />
      <Button type="submit" variant="contained">
        {ADD_USER_BUTTON_TEXT}
      </Button>
    </Stack>
  );
};

export default AddUser;
