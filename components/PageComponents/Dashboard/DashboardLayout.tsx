import { Grid, Divider } from '@mui/material';
import { FunctionComponent, ReactNode } from 'react';

type DashboardLayoutTypes = {
  heading: ReactNode;
  messages: ReactNode;
  pulses: ReactNode;
  topics: ReactNode;
  report: ReactNode;
  programmes: ReactNode;
};

const DashboardLayout: FunctionComponent<DashboardLayoutTypes> = ({
  heading,
  messages,
  pulses,
  topics,
  report,
  programmes,
}) => {
  return (
    <Grid container>
      <Grid item sm={12} className="py-7">
        {heading}
      </Grid>
      <Grid item sm={12} className="py-7">
        {messages}
      </Grid>
      <Grid item sm={12} className="py-7">
        {pulses}
      </Grid>
      <Divider style={{ width: '100%' }} />
      <Grid item sm={12} className="py-7">
        {topics}
      </Grid>
      <Divider style={{ width: '100%' }} />
      <Grid item sm={12} className="py-7">
        {programmes}
      </Grid>
      <Divider style={{ width: '100%' }} />
      <Grid item sm={12} className="py-7">
        {report}
      </Grid>
    </Grid>
  );
};

export default DashboardLayout;
