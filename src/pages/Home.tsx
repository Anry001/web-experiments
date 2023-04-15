import { Stack, Button, Typography } from '@mui/material';
import ShitDataGrid from '@components/ShitDataGrid';
import { Link } from 'react-router-dom';
import ButtonClicks from '@/components/ButtonClicks';

const ABOUT_BUTTON_TEXT = 'About';
const CONTACT_BUTTON_TEXT = 'Contact';

const Home = () => {
  return (
    <Stack>
      <Stack
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        spacing={2}
      >
        <ShitDataGrid />
      </Stack>
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
      <ButtonClicks />
    </Stack>
  );
};
export default Home;
