import { Card, CardContent, Typography, Box } from '@mui/material';
import { FunctionComponent } from 'react';
import type { QuickInsightCardTypes } from 'types/dashboard';

const QuickInsightCard: FunctionComponent<QuickInsightCardTypes> = ({ title, value, percentage }) => {
  return (
    <Card className="max-w-[230px]">
      <CardContent>
        <Box className="flex flex-col items-center gap-4">
          <Typography component="h3" className="font-body font-bold text-xl">
            {title}
          </Typography>
          <Typography component="h3" className="font-body font-bold text-kami-blue text-5xl">
            {value}
          </Typography>
          <Typography component="h3" className="font-body text-[#7BD673] font-bold">
            {percentage}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default QuickInsightCard;
