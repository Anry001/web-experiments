import { useAddUserMutation } from '@api/addUser';
import { Button, Stack, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';

const ADD_USER_BUTTON_TEXT = 'Add user';

interface userFormData {
  id: string;
  name: string;
  age: string;
}

const AddUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors: error },
  } = useForm<userFormData>();

  console.log(error);

  const { mutate } = useAddUserMutation();

  const onSubmit = ({ id, name, age }: userFormData) => {
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
        Add new user:
      </Typography>
      <TextField
        id="outlined-basic"
        label="ID"
        variant="outlined"
        {...register('id', {
          required: { value: true, message: 'ID required' },
          minLength: { value: 1, message: 'ID must be at least 1 characters' },
        })}
      />
      <TextField
        {...register('name', {
          required: { value: true, message: 'Name required' },
          minLength: {
            value: 3,
            message: 'name must be at least 3 characters',
          },
        })}
        id="outlined-basic"
        label="User Name"
        variant="outlined"
      />
      <TextField
        id="outlined-basic"
        label="Age"
        variant="outlined"
        {...register('age', {
          required: { value: true, message: 'Age required' },
          min: { value: 4, message: 'Age must be at least 4' },
        })}
      />
      <Button type="submit" variant="contained">
        {ADD_USER_BUTTON_TEXT}
      </Button>
    </Stack>
  );
};
export default AddUser;
