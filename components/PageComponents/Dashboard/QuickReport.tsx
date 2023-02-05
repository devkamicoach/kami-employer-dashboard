import { Grid, Typography } from '@mui/material';
import QuickInsightCard from 'components/Cards/QuickInsightCard';
import type { QuickInsightCardTypes } from 'types/dashboard';
import { FunctionComponent } from 'react';

type QuickReportType = {
  reports: Array<QuickInsightCardTypes>;
};

const QuickReport: FunctionComponent<QuickReportType> = ({ reports }) => {
  return (
    <>
      <Typography component="h2" className="font-body mb-3 uppercase font-bold">
        Quick Report
      </Typography>
      <Grid container className="gap-0 justify-between">
        {reports.map(({ title, value, percentage }, index) => (
          <Grid item key={index} sm={3}>
            <QuickInsightCard title={title} value={value} percentage={percentage} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default QuickReport;
