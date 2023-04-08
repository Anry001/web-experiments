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
      <Typography variant="h3" gutterBottom>
        Click the below button to go to the home page
      </Typography>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Button variant="contained">{BACK_TO_HOME_BUTTON_TEXT}</Button>
      </Link>
    </Stack>
  );
};
export default About;
