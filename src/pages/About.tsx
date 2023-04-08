import { Button, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { Link } from 'react-router-dom';

const BACK_TO_HOME_BUTTON_TEXT = 'Home page';

const About = () => {
  return (
    <Stack
      sx={{ height: '60vh', width: '100vw' }}
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography sx={{ mb: '70px' }} variant="h4" gutterBottom>
        This is a project to go over the basics of web development.
      </Typography>
      <Stack direction="row" spacing={2}>
        <Typography variant="h6">
          Click the button to go to home page:
        </Typography>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Button variant="contained">{BACK_TO_HOME_BUTTON_TEXT}</Button>
        </Link>
      </Stack>
    </Stack>
  );
};
export default About;
