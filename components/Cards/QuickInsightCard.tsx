import { Card, CardContent, Typography, Box } from '@mui/material';
import { FunctionComponent } from 'react';
import type { QuickInsightCardTypes } from 'types/dashboard';

const QuickInsightCard: FunctionComponent<QuickInsightCardTypes> = ({ title, value, percentage }) => {
  const color = percentage.includes('+') ? '#40AD79' : '#C84F4F';

  return (
    <Card className="max-w-[230px]">
      <CardContent>
        <Box className="flex flex-col items-center gap-4">
          <Typography component="h3" className="font-body font-bold text-xl text-center">
            {title}
          </Typography>
          <Typography component="h3" className="font-body font-bold text-kami-blue text-4xl xl:text-5xl">
            {value}
          </Typography>
          <Typography
            component="h3"
            className="font-body font-bold"
            style={{
              color: color,
            }}
          >
            {percentage}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default QuickInsightCard;
