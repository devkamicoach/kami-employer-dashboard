import { Grid, Typography } from '@mui/material';
import { FunctionComponent } from 'react';
import { QuickInsightCardTypes } from 'types/dashboard';

import QuickInsightCard from 'components/Cards/QuickInsightCard';

type UserInsightsTypes = {
  quickInsights: Array<QuickInsightCardTypes>;
};

const UserInsights: FunctionComponent<UserInsightsTypes> = ({ quickInsights }) => {
  return (
    <>
      <Typography component="h2" className="font-body text-lg font-bold py-3">
        Engagement Report
      </Typography>
      <Grid className="gap-5 items-center" container>
        {quickInsights.map(({ title, value, percentage }, index) => (
          <Grid key={(index + 1) * 2} item>
            <QuickInsightCard title={title} value={value} percentage={percentage} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default UserInsights;
