import { Button, Stack, Typography } from '@mui/material';
import { useButtonClicksStore } from '@store/buttonClicksStore';

const ADD_CLICK = 'Add Click';

const ButtonClicks = () => {
  const { numberOfClicks, incrementNumberOfClicks } = useButtonClicksStore();

  return (
    <Stack sx={{ mt: '25px' }} spacing={2} alignItems="center">
      <Button onClick={incrementNumberOfClicks} variant="contained">
        {ADD_CLICK}
      </Button>
      <Typography variant="h4">Number of clicks: {numberOfClicks}</Typography>
    </Stack>
  );
};
export default ButtonClicks;
