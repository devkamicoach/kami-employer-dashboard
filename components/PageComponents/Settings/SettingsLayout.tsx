import { Box, Grid, Divider } from '@mui/material';
import { FunctionComponent, ReactNode } from 'react';

type SettingsLayoutType = {
  details: ReactNode;
  plans: ReactNode;
  subscriptions: ReactNode;
  seats: ReactNode;
};

const SettingsLayout: FunctionComponent<SettingsLayoutType> = ({ details, plans, seats, subscriptions }) => {
  return (
    <Box className="flex mx-auto w-[60%]">
      <Grid container>
        <Grid item sm={12} className="py-5">
          <Grid container className="flex flex-row">
            {details}
          </Grid>
        </Grid>
        <Divider style={{ width: '100%' }} />
        <Grid item sm={12} className="py-5">
          {plans}
        </Grid>
        <Divider style={{ width: '100%' }} />
        <Grid item sm={12} className="py-5">
          {subscriptions}
        </Grid>
        <Divider style={{ width: '100%' }} />
        <Grid item sm={12} className="py-5">
          {seats}
        </Grid>
      </Grid>
    </Box>
  );
};

export default SettingsLayout;
