import { Box, Typography } from '@mui/material';
import { FunctionComponent } from 'react';

type HeadingTypes = {
  // company: string;
  user: string;
};
const Heading: FunctionComponent<HeadingTypes> = ({ user }) => {
  return (
    <Box>
      {/* <Typography component="h3" className="font-body">
        {company}
      </Typography> */}
      <Typography component="h1" className="text-2xl">
        Welcome back, {user}!
      </Typography>
      {/* <Typography>
        This is your official Employer dashboard, where you are provided administration access and user insights for
        your partnership with Kami. We&apos;re looking forward to hearing your feedback.
      </Typography> */}
    </Box>
  );
};

export default Heading;
