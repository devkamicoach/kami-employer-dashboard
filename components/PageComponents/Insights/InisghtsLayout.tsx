import { Grid, Box, Divider } from '@mui/material';
import { FunctionComponent, ReactNode } from 'react';

type InsightsLayoutTypes = {
  insights: ReactNode;
  engagements: ReactNode;
  pulses: ReactNode;
  topics: ReactNode;
  programmes: ReactNode;
};
const InisghtsLayout: FunctionComponent<InsightsLayoutTypes> = ({
  insights,
  engagements,
  pulses,
  topics,
  programmes,
}) => {
  return (
    <Box className="flex mx-auto w-[70%]">
      <Grid container>
        <Grid sm={12} className="py-5" item>
          {engagements}
        </Grid>
        <Grid sm={12} className="py-5" item>
          {pulses}
        </Grid>
        <Divider style={{ width: '100%' }} />
        <Grid sm={12} className="py-5" item>
          {topics}
        </Grid>
        <Divider style={{ width: '100%' }} />
        <Grid sm={12} className="py-5" item>
          {programmes}
        </Grid>
        <Divider style={{ width: '100%' }} />
        <Grid sm={12} className="py-5" item>
          {insights}
        </Grid>
      </Grid>
    </Box>
  );
};

export default InisghtsLayout;
