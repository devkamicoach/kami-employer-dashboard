import { Drawer, Typography } from '@mui/material';
import { ReactNode, FunctionComponent } from 'react';

type PopupSidebarTypes = {
  heading: string;
  subheading?: string | undefined;
  content: ReactNode;
};

const PopupSidebar: FunctionComponent<PopupSidebarTypes> = ({ heading, subheading, content }) => {
  return (
    <Drawer
      variant="permanent"
      anchor="right"
      sx={{
        width: 400,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: 400,
          boxSizing: 'border-box',
          top: 64,
          backgroundColor: '#FAF8F6',
          paddingTop: 5,
          paddingInline: 2,
        },
      }}
    >
      <Typography component="h3" className="text-kami-green font-body">
        {subheading}
      </Typography>
      <Typography component="h2" className="text-2xl">
        {heading}
      </Typography>
      {content}
    </Drawer>
  );
};

export default PopupSidebar;
