import { Grid, Box, Typography } from '@mui/material';
import Chip from 'components/Chip/Chip';

const Subscriptions = () => {
  const topics = ['Pregnancy', 'Menopause', 'Financial Wellness', 'Well-being'];
  return (
    <Grid container className="flex flex-col">
      <Grid item className="flex flex-col">
        <Typography component="h3" className="font-body font-bold">
          Module Subscription
        </Typography>
        <Typography component="h3" className="font-body">
          4
        </Typography>
      </Grid>
      <Grid item className="flex flex-row py-5">
        {topics.map((topic, index) => (
          <Box key={index} className="px-1">
            <Chip key={index} title={topic} />
          </Box>
        ))}
      </Grid>
      <Grid item>
        <a className="font-body text-[#40B3AC] underline" href="#">
          Add more modules
        </a>
      </Grid>
    </Grid>
  );
};

export default Subscriptions;
