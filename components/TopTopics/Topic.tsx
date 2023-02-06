import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { FunctionComponent } from 'react';
import type { TopicTypes } from 'types/dashboard';

const Topic: FunctionComponent<TopicTypes> = ({ icon, title, impressions, from }) => {
  return (
    <Grid className="flex items-center gap-2">
      <Grid item>
        <Box width={50} height={50} className="bg-gray-100 rounded-full flex items-center justify-center relative">
          <Image src={icon} alt="Icon" width={25} height={25} />
        </Box>
      </Grid>
      <Grid item>
        <Typography component="h3" className="font-body text-kami-blue font-bold">
          {title}
        </Typography>
        <Typography component="p">
          {impressions} {from}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Topic;
