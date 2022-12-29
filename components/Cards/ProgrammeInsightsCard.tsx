import { Card, CardContent, Typography, Box } from '@mui/material';
import Chip from 'components/Chip/Chip';
import CircularProgressWithLabel from 'components/CircularProgressWithLabel/CircularProgressWithLabel';
import { FunctionComponent } from 'react';
import type { ProgrammeInsightCardTypes } from 'types/dashboard';

const ProgrammeInsightsCard: FunctionComponent<ProgrammeInsightCardTypes> = ({ title, topics, rate }) => {
  return (
    <Card className="max-w-[450px]">
      <CardContent>
        <Box className="flex items-center gap-4">
          <Box>
            <Typography component="h3" className="font-body font-bold text-xl">
              {title}
            </Typography>
            <Box className="flex gap-4 mt-5">
              {topics.map((topic, index) => (
                <Chip key={index} title={topic} />
              ))}
            </Box>
          </Box>
          <Box>
            <CircularProgressWithLabel value={rate} />
            <Typography className="text-xs">Completion Rate</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProgrammeInsightsCard;
