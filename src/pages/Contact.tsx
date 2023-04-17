import { Box, Button, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import ButtonClicks from '@/components/ButtonClicks';
import ShitDataGrid from '@/components/ShitDataGrid';

const BACK_TO_HOME_BUTTON_TEXT = 'Home page';
const CONTACT_INFO_TEXT = 'contact info below:';
const EMAIL_TEXT = 'email: someemail@gmail.com';
const PHONE_TEXT = 'phone: 123-456-7890';
const FULL_NAME_TEXT = 'name: john doe';

const Contact = () => {
  return (
    <Stack
      sx={{ height: '60vh', width: '100vw' }}
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography sx={{ fontWeight: 'bold' }} variant="h2" gutterBottom>
        {CONTACT_INFO_TEXT}
      </Typography>
      <Typography variant="h5" gutterBottom>
        {EMAIL_TEXT}
      </Typography>
      <Typography variant="h5" gutterBottom>
        {PHONE_TEXT}
      </Typography>
      <Typography variant="h5" gutterBottom>
        {FULL_NAME_TEXT}
      </Typography>
      <Box sx={{ mb: '20px' }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Button variant="contained">{BACK_TO_HOME_BUTTON_TEXT}</Button>
        </Link>
      </Box>
      <Box sx={{ mb: '5px' }}>
        <ShitDataGrid />
      </Box>
      <ButtonClicks />
    </Stack>
  );
};
export default Contact;
