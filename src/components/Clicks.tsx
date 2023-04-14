import { useButtonStore } from '@/store/button';
import { Button, Stack, Typography } from '@mui/material';

const ADD_CLICK = 'Add Click';

const Clicks = () => {
  const { numberOfClicks, incrementNumberOfClicks } = useButtonStore();

  return (
    <Stack sx={{ mt: '25px' }} spacing={2} alignItems="center">
      <Button onClick={incrementNumberOfClicks} variant="contained">
        {ADD_CLICK}
      </Button>
      <Typography variant="h4">Number of clicks: {numberOfClicks}</Typography>
    </Stack>
  );
};
export default Clicks;
