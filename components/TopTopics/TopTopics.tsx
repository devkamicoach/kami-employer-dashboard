import { Grid, Typography } from '@mui/material';
import Topic from './Topic';
import type { TopicTypes } from 'types/dashboard';
import { FunctionComponent } from 'react';

type TopTopicsTypes = {
  topics: Array<TopicTypes>;
};

const TopTopics: FunctionComponent<TopTopicsTypes> = ({ topics }) => {
  return (
    <>
      <Typography component="h2" className="font-body mb-3 uppercase font-bold">
        Top topics this week
      </Typography>
      <Grid container>
        {topics.map(({ icon, title, impressions }, index) => (
          <Grid key={index} item sm={3}>
            <Topic icon={icon} title={title} impressions={impressions} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default TopTopics;
