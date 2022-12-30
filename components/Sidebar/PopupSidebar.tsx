import { Box, Drawer, Typography } from '@mui/material';
import { ReactNode, FunctionComponent } from 'react';
import { useModuleDispatch } from 'context/ModuleContext';
import ClearIcon from '@mui/icons-material/Clear';

type PopupSidebarTypes = {
  heading: string | undefined;
  subheading?: string | undefined;
  content: ReactNode;
  open?: boolean;
};

const PopupSidebar: FunctionComponent<PopupSidebarTypes> = ({ heading, subheading, content, open }) => {
  const dispatch = useModuleDispatch();

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
          backgroundColor: '#FAF8F6',
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
