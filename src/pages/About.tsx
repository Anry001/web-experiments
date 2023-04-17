import { Box, Button, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { Link } from 'react-router-dom';
import ButtonClicks from '@/components/ButtonClicks';
import ShitDataGrid from '@/components/ShitDataGrid';

const ABOUT_PAGE_TITLE = 'About page:';
const BACK_TO_HOME_BUTTON_TEXT = 'Home page';
const ABOUT_PAGE_TEXT =
  'This is a project to go over the basics of web development.';

const About = () => {
  return (
    <Stack
      sx={{ height: '85vh', width: '100vw', mt: '50px' }}
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography sx={{ fontWeight: 'bold' }} variant="h1" gutterBottom>
        {ABOUT_PAGE_TITLE}
      </Typography>
      <Typography sx={{ mb: '20px' }} variant="h4">
        {ABOUT_PAGE_TEXT}
      </Typography>
      <Box>
        <ShitDataGrid />
      </Box>
      <Stack
        sx={{ mt: '20px' }}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box sx={{ mb: '20px' }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Button variant="contained">{BACK_TO_HOME_BUTTON_TEXT}</Button>
          </Link>
        </Box>
        <ButtonClicks />
      </Stack>
    </Stack>
  );
};
export default About;
