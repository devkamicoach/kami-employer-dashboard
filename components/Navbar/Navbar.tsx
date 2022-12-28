import { Box, AppBar, Toolbar, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import PersonIcon from '@mui/icons-material/Person';
import KamiLogo from '../../public/images/kami-nav-logo.svg';

const Navbar = () => {
  return (
    <Box component="header">
      <AppBar className="bg-kami-white static">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Link href="/dashboard">
              <Image className="hover:cursor-pointer" src={KamiLogo} alt="Kami logo" />
            </Link>
          </Box>
          <Box component="div" className="flex items-center gap-3">
            <Typography component="p" className="text-black">
              Erika Brodnock
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
    </Box>
  );
};

export default Navbar;
