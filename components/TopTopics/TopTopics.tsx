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
      <Typography component="h2" className="font-body mb-3 normal-case font-bold">
        Topics of the Week
      </Typography>
      <Grid container className="justify-between">
        {topics.map(({ icon, title, impressions, from }, index) => (
          <Grid key={index} item sm={3}>
            <Topic icon={icon} title={title} impressions={impressions} from={from} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default TopTopics;
