import { Box, AppBar, Toolbar, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import PersonIcon from '@mui/icons-material/Person';
import KinhubLogo from '../../public/images/kinhub-employers-nav-logo.svg';

import NavbarList from './NavbarList';

const Navbar = () => {
  return (
    <AppBar className="shadow-none bg-kami-blue fixed z-[1201]">
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Link href="/dashboard">
            <Image className="hover:cursor-pointer" src={KinhubLogo} alt="Kami logo" width="100%" />
          </Link>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <NavbarList />
        </Box>
        <Box component="div" className="flex items-center gap-3">
          <Typography component="p" className="text-white">
            Joyce, Optimum Health
          </Typography>
          <PersonIcon
            style={{
              color: '#666665',
              backgroundColor: '#F2EFEB',
              borderRadius: 100,
              padding: 5,
              fontSize: '1.875rem',
            }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
