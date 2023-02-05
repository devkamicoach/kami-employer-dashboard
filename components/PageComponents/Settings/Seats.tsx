import { Grid, Typography } from '@mui/material';

const Seats = () => {
  const seats = {
    total: 500,
    occupied: 432,
  };
  return (
    <Grid container>
      <Grid item className="flex grow flex-col">
        <Typography component="h3" className="font-body font-bold">
          Number of Seats
        </Typography>
        <Typography component="h3" className="font-body">
          {seats.total} total
        </Typography>
      </Grid>
      <Grid item className="flex grow flex-col">
        <Typography component="h3" className="font-body font-bold">
          Occupied Seats
        </Typography>
        <Typography component="h3" className="font-body">
          {seats.occupied}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Seats;
