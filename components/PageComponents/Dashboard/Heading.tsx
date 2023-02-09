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
      <Box className="flex flex-row gap-4 py-2">
        <button
          id="btn-onboarding"
          className="bg-kami-green rounded-full font-body text-white px-3 py-2"
          onClick={() => {
            dispatch({ type: 'open' });
            open();
          }}
        >
          🚀 Onboarding
        </button>
        <Box>
          <Typography component="h3" className="font-body text-kami-blue font-bold">
            Complete your onboarding checklist!
          </Typography>
          <Typography component="p">2/4 items completed!</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Heading;
