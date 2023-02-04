import { Box, Drawer, Typography } from '@mui/material';
import { ReactNode, FunctionComponent } from 'react';
import { useSidebarDispatch } from 'context/SidebarContext';
import ClearIcon from '@mui/icons-material/Clear';
import MessageCard from '../Cards/MessageCard';
type PopupSidebarTypes = {
  heading: string | undefined;
  subheading?: string | undefined;
  content: ReactNode;
  open?: boolean;
};

const PopupSidebar: FunctionComponent<PopupSidebarTypes> = ({ heading, content, open }) => {
  const dispatch = useSidebarDispatch();

  return (
    <Drawer
      variant="persistent"
      anchor="right"
      open={open}
      sx={{
        width: 400,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: 400,
          boxSizing: 'border-box',
          top: 64,
          backgroundColor: '#FAF8F5',
          paddingTop: 5,
          paddingInline: 2,
        },
      }}
    >
      <Box className="self-end">
        <button onClick={() => dispatch({ type: 'close' })}>
          <ClearIcon />
        </button>
      </Box>
      <Typography component="h2" className="text-2xl">
        {heading}
      </Typography>
      <MessageCard
        heading="👋🏽 Message from Kinhub"
        icon="/images/sidebar-announcement-icon.svg"
        message="We're thrilled to announce that our new modules: Menopause, Financial Wellbeing, and Back to Work Coaching are now live!"
        actionButton=""
      />
      {content}
    </Drawer>
  );
};

export default PopupSidebar;
