import { Button, Stack, TextField, Typography } from '@mui/material';

const ADD_USER_BUTTON_TEXT = 'Add user';

const AddUser = () => {
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
      <TextField id="outlined-basic" label="ID" variant="outlined" />
      <TextField id="outlined-basic" label="User Name" variant="outlined" />
      <TextField id="outlined-basic" label="Age" variant="outlined" />
      <Button variant="contained">{ADD_USER_BUTTON_TEXT}</Button>
    </Stack>
  );
};
export default AddUser;
