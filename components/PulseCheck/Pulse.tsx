import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { FunctionComponent } from 'react';
import type { PulseTypes } from 'types/dashboard';

const Pulse: FunctionComponent<PulseTypes> = ({ icon, title, responses, from }) => {
  return (
    <Grid container className="items-center gap-2">
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
          {responses} from {from}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Pulse;
