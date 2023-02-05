import { Typography, List, ListItem, ListItemIcon } from '@mui/material';
import { useRouter } from 'next/router';
import { createElement, FunctionComponent, SVGAttributes } from 'react';
import Link from 'next/link';
import cn from 'classnames';
import Home from 'components/Icons/Nav/Home';
import Insights from 'components/Icons/Nav/Insights';
import Users from 'components/Icons/Nav/Users';
import Settings from 'components/Icons/Nav/Settings';
import Support from 'components/Icons/Nav/Support';

type NavItemTypes = {
  name: string;
  link: string;
  icon: FunctionComponent<SVGAttributes<SVGElement>>;
};

const navItems: Array<NavItemTypes> = [
  {
    name: 'Home',
    link: '/dashboard',
    icon: Home,
  },
  {
    name: 'Your Users',
    link: '/users',
    icon: Users,
  },
  {
    name: 'Insights',
    link: '/insights',
    icon: Insights,
  },
  {
    name: 'Settings',
    link: '/settings',
    icon: Settings,
  },
  {
    name: 'Support',
    link: '/support',
    icon: Support,
  },
];

const NavbarList = () => {
  const router = useRouter();

  return (
    <List className="flex flex-row w-100 p-0">
      {navItems.map(({ name, link, icon }) => {
        const active = router.pathname === link;
        return (
          <Link key={name} href={link}>
            <a>
              <ListItem className={cn('items-center rounded-full px-5', active ? 'bg-white' : '')}>
                <ListItemIcon className={cn('min-w-[30px]', active ? 'text-kami-blue' : 'text-white')}>
                  {createElement(icon, { fill: active ? '#284F73' : undefined })}
                </ListItemIcon>
                <Typography className={cn('', active ? 'font-bold text-kami-blue' : 'text-white')}>{name}</Typography>
              </ListItem>
            </a>
          </Link>
        );
      })}
    </List>
  );
};

export default NavbarList;
