import { Box, Card, CardActions, CardContent, Checkbox, FormControlLabel, Typography } from '@mui/material';
import { FunctionComponent, ReactNode } from 'react';

type CheckboxCardTypes = {
  title: string;
  description: string;
  actions?: ReactNode | undefined;
  checked?: boolean;
};

const CheckboxCard: FunctionComponent<CheckboxCardTypes> = ({ title, description, actions, checked }) => {
  return (
    <Card className="bg-white " sx={{ boxShadow: 'none' }}>
      <CardContent>
        <Box className="flex items-center gap-2 pb-3">
          <FormControlLabel
            control={<Checkbox className="text-kami-blue pointer-events-none" />}
            label={
              <Typography component="h4" className="text-kami-blue text-xl transform-all font-bold font-heading">
                {title}
              </Typography>
            }
            checked={checked ?? false}
          />
        </Box>
        <Typography component="p" className="text-sm">
          {description}
        </Typography>
      </CardContent>
      {actions && <CardActions>{actions}</CardActions>}
    </Card>
  );
};

export default CheckboxCard;
