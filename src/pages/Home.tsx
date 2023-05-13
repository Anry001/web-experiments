import { Stack, Button, Typography, Box } from '@mui/material';
import UsersTable from '@components/UsersTable';
import { Link } from 'react-router-dom';
import ButtonClicks from '@components/ButtonClicks';

const HOME_TEXT = 'Home page';
const ABOUT_BUTTON_TEXT = 'About';
const CONTACT_BUTTON_TEXT = 'Contact';

const Home = () => {
  return (
    <Stack
      sx={{ height: '80vh', width: '100vw' }}
      direction="column"
      justifyContent="space-evenly"
      alignItems="center"
    >
      <Typography sx={{ fontWeight: 'bold' }} variant="h3" gutterBottom>
        {HOME_TEXT}
      </Typography>
      <Box sx={{ height: '50%', width: '37%' }}>
        <UsersTable />
      </Box>
      <Stack
        sx={{ mt: '20px' }}
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        spacing={10}
      >
        <Link to="about" style={{ textDecoration: 'none' }}>
          <Button variant="contained">{ABOUT_BUTTON_TEXT}</Button>
        </Link>
        <Link to="contact" style={{ textDecoration: 'none' }}>
          <Button variant="contained">{CONTACT_BUTTON_TEXT}</Button>
        </Link>
      </Stack>
      <Box sx={{ mt: '40px' }}>
        <ButtonClicks />
      </Box>
    </Stack>
  );
};
export default Home;
