import { Grid, Typography, Box } from '@mui/material';
import { FunctionComponent, ReactNode } from 'react';
import Topic from '../../TopTopics/Topic';

type UsersLayoutType = {
  search: ReactNode;
  table: ReactNode;
};

const UsersLayout: FunctionComponent<UsersLayoutType> = ({ search, table }) => {
  const ICON_PATH = '/images';
  const topics = [
    {
      icon: `${ICON_PATH}/topic-logos/mental-wellness.svg`,
      title: 'Active Departments',
      impressions: '',
      from: 'Marketing, Commercials',
    },
    {
      icon: `${ICON_PATH}/topic-logos/sleep.svg`,
      title: 'Dormant Departments',
      impressions: '',
      from: 'Engineering, Finance',
    },
    {
      icon: `${ICON_PATH}/topic-logos/well-being.svg`,
      title: 'Largest Groups',
      impressions: '',
      from: 'Parents, Freelance',
    },
  ];
  return (
    <Grid container className="flex mx-auto w-[70%]">
      <Grid sm={12} item>
        {search}
      </Grid>
      <Grid sm={12} item className="py-5">
        <Grid container className="justify-between">
          {topics.map(({ icon, title, impressions, from }, index) => (
            <Grid key={index} item sm={3}>
              <Topic icon={icon} title={title} impressions={impressions} from={from} />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Box className="py-2 flex flex-row">
        <Typography component="h3" className="font-body font-bold pr-1">
          438 of 500
        </Typography>
        <Typography component="h3" className="font-body">
          seats used
        </Typography>
      </Box>
      <Grid sm={12} item>
        {table}
      </Grid>
    </Grid>
  );
};

export default UsersLayout;
