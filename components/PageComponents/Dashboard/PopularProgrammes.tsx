import { Grid, Typography } from '@mui/material';
import { FunctionComponent } from 'react';
import ProgrammeInsightsCard from 'components/Cards/ProgrammeInsightsCard';
import type { ProgrammeInsightCardTypes } from 'types/dashboard';

type ProgrammeInsightsTypes = {
  insights: Array<ProgrammeInsightCardTypes>;
};

const PopularProgrammes: FunctionComponent<ProgrammeInsightsTypes> = ({ insights }) => {
  return (
    <>
      <Typography component="h2" className="font-body mb-3 normal-case font-bold">
        Popular Programmes
      </Typography>
      <Grid container className="gap-0 justify-between">
        {insights.map(({ title, topics, rate }, index) => {
          return (
            <Grid key={index} sm={5.8} item>
              <ProgrammeInsightsCard title={title} topics={topics} rate={rate} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default PopularProgrammes;
