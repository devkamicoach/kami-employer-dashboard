import { Box, Grid, Typography } from '@mui/material';
import { FunctionComponent } from 'react';
import type { TopicTypes } from 'types/dashboard';

const Topic: FunctionComponent<TopicTypes> = ({ icon, title, impressions }) => {
  return (
    <Grid container className="items-center gap-2">
      <Grid item>
        <Box width={50} height={50} className="bg-gray-100 rounded-full flex items-center justify-center">
          {icon}
        </Box>
      </Grid>
      <Grid item>
        <Typography component="h3" className="font-body text-kami-blue font-medium">
          {title}
        </Typography>
        <Typography component="p">{impressions} active impressions</Typography>
      </Grid>
    </Grid>
  );
};

export default Topic;
