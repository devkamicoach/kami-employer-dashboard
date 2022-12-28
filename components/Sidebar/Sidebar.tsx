import { Drawer, Typography, Box, List, ListItem, ListItemIcon } from '@mui/material';

import { createElement, FunctionComponent, SVGAttributes } from 'react';

import Home from '../Icons/Home';
import Modules from 'components/Icons/Modules';
import Insights from '../Icons/Insights';
import Users from '../Icons/Users';
import Support from '../Icons/Support';

import Link from 'next/link';
import { useRouter } from 'next/router';
import cn from 'classnames';

type NavItemTypes = {
  name: string;
  link: string;
  icon: FunctionComponent<SVGAttributes<SVGElement>>;
};

const Sidebar = () => {
  const router = useRouter();
  const navItems: Array<NavItemTypes> = [
    {
      name: 'Home',
      link: '/dashboard',
      icon: Home,
    },
    {
      name: 'Modules',
      link: '/modules',
      icon: Modules,
    },
    {
      name: 'Insights',
      link: '/insights',
      icon: Insights,
    },
    {
      name: 'Users',
      link: '/users',
      icon: Users,
    },
    {
      name: 'Support',
      link: '/support',
      icon: Support,
    },
  ];
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: 240,
          boxSizing: 'border-box',
          top: 64,
          backgroundColor: '#FAF8F6',
          paddingTop: 5,
          paddingInline: 2,
        },
      }}
    >
      <Box>
        <Box className="flex gap-1 items-center">
          <Box className="w-7 h-7 bg-slate-900 rounded-full"></Box>
          <Typography component="h3">Optimum Health</Typography>
        </Box>
        <List>
          {navItems.map(({ name, link, icon }) => {
            const active = router.pathname === link;
            return (
              <Link key={name} href={link}>
                <a>
                  <ListItem className={cn('items-center', active ? 'bg-gray-200' : '')}>
                    <ListItemIcon className={cn('min-w-[30px]', active ? 'text-kami-blue' : '')}>
                      {createElement(icon, { fill: active ? '#284F73' : undefined })}
                    </ListItemIcon>
                    <Typography className={cn(active ? 'text-kami-blue' : '')}>{name}</Typography>
                  </ListItem>
                </a>
              </Link>
            );
          })}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
