import { Grid, Typography } from '@mui/material';
import Pulse from './Pulse';
import type { PulseTypes } from 'types/dashboard';
import { FunctionComponent } from 'react';

type PulseCheckTypes = {
  pulses: Array<PulseTypes>;
};

const PulseCheck: FunctionComponent<PulseCheckTypes> = ({ pulses }) => {
  return (
    <>
      <Typography component="h2" className="font-body mb-3 normal-case font-bold">
        Today&#39;s Pulse Check
      </Typography>
      <Grid container className="justify-between">
        {pulses.map(({ icon, title, responses, from }, index) => (
          <Grid key={index} item sm={3}>
            <Pulse icon={icon} title={title} responses={responses} from={from} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default PulseCheck;
