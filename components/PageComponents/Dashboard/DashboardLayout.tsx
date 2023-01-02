import { Grid } from '@mui/material';
import { FunctionComponent, ReactNode } from 'react';

type DashboardLayoutTypes = {
  heading: ReactNode;
  messages: ReactNode;
  topics: ReactNode;
  report: ReactNode;
  programmes: ReactNode;
};

const DashboardLayout: FunctionComponent<DashboardLayoutTypes> = ({
  heading,
  messages,
  topics,
  report,
  programmes,
}) => {
  return (
    <Grid container>
      <Grid item sm={12} className="py-5">
        {heading}
      </Grid>
      <Grid item sm={12} className="py-5">
        {messages}
      </Grid>
      <Grid item sm={12} className="py-5">
        {topics}
      </Grid>
      <Grid item sm={12} className="py-5">
        {report}
      </Grid>
      <Grid item sm={12} className="py-5">
        {programmes}
      </Grid>
    </Grid>
  );
};

export default DashboardLayout;
