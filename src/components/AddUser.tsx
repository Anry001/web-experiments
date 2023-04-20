import { Stack, TextField, Typography } from '@mui/material';

const AddUser = () => {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={3}
    >
      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
        Add new user:
      </Typography>
      <TextField id="outlined-basic" label="ID" variant="outlined" />
      <TextField id="outlined-basic" label="User Name" variant="outlined" />
      <TextField id="outlined-basic" label="Age" variant="outlined" />
    </Stack>
  );
};
export default AddUser;
