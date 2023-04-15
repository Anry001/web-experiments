import { Box, Button, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import ButtonClicks from '@/components/ButtonClicks';

const BACK_TO_HOME_BUTTON_TEXT = 'Home page';

const Contact = () => {
  return (
    <Stack
      sx={{ height: '60vh', width: '100vw' }}
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography sx={{ fontWeight: 'bold' }} variant="h2" gutterBottom>
        contact info below:
      </Typography>
      <Typography variant="h5" gutterBottom>
        email: someemail@gmail.con
      </Typography>
      <Typography variant="h5" gutterBottom>
        phone: 123-456-7890
      </Typography>
      <Typography variant="h5" gutterBottom>
        name: john doe
      </Typography>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Button variant="contained">{BACK_TO_HOME_BUTTON_TEXT}</Button>
      </Link>
      <Box sx={{ mt: '50px' }}>
        <ButtonClicks />
      </Box>
    </Stack>
  );
};
export default Contact;
