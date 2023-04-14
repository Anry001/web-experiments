import { Button, Stack, Typography } from '@mui/material';
import { useState } from 'react';

const ADD_CLICK = 'Add Click';

const Clicks = () => {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <Stack sx={{ mt: '25px' }} spacing={2} alignItems="center">
      <Button onClick={handleClick} variant="contained">
        {ADD_CLICK}
      </Button>
      <Typography variant="h4">Number of clicks: {clicks}</Typography>
    </Stack>
  );
};
export default Clicks;
