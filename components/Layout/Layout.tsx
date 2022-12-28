import Navbar from 'components/Navbar/Navbar';
import Sidebar from 'components/Sidebar/Sidebar';
import { FunctionComponent, ReactNode } from 'react';
import { Box, Toolbar } from '@mui/material';
import theme from 'styles/themes/lightTheme';
import { ThemeProvider } from '@mui/material/styles';

type LayoutTypes = {
  hideNavigation: boolean;
  children: ReactNode;
};

const Layout: FunctionComponent<LayoutTypes> = ({ hideNavigation, children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Box display="flex">
        {!hideNavigation && <Navbar />}
        {!hideNavigation && <Sidebar />}
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          {children}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Layout;
