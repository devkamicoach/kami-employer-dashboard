import { Box, Typography } from '@mui/material';
import { FunctionComponent } from 'react';
import { useSidebarDispatch } from 'context/SidebarContext';

type HeadingTypes = {
  // company: string;
  user: string;
};
const Heading: FunctionComponent<HeadingTypes> = ({ user }) => {
  const dispatch = useSidebarDispatch();
  const open = () => {
    console.log('change width');
    const drawer = document.querySelector('.MuiDrawer-root');
    drawer?.classList.remove('width-zero');
  };
  return (
    <Box>
      {/* <Typography component="h3" className="font-body">
        {company}
      </Typography> */}
      <Typography component="h1" className="text-2xl">
        Welcome back, {user}!
      </Typography>
      <button
        id="btn-open-onboarding"
        onClick={() => {
          dispatch({ type: 'open' });
          open();
        }}
      >
        Onboarding
      </button>
      {/* <Typography>
        This is your official Employer dashboard, where you are provided administration access and user insights for
        your partnership with Kami. We&apos;re looking forward to hearing your feedback.
      </Typography> */}
    </Box>
  );
};

export default Heading;
