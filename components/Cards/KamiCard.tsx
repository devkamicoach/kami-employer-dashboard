import { Box, Card, CardActions, CardContent, Checkbox, FormControlLabel, Typography } from '@mui/material';
import { FunctionComponent } from 'react';
import type { KamiCardTypes } from 'types/dashboard';

const KamiCard: FunctionComponent<KamiCardTypes> = ({ title, description, actions, checked, isCheckbox = false }) => {
  return (
    <Card className="bg-white " sx={{ boxShadow: 'none' }}>
      <CardContent>
        <Box className="flex items-center gap-2 pb-3">
          {isCheckbox ? (
            <FormControlLabel
              control={<Checkbox className="text-kami-blue pointer-events-none" />}
              label={
                <Typography component="h4" className="text-kami-blue text-xl transform-all font-bold font-heading">
                  {title}
                </Typography>
              }
              checked={checked ?? false}
            />
          ) : (
            <Typography component="h4" className="text-kami-blue text-xl transform-all font-bold font-heading">
              {title}
            </Typography>
          )}
        </Box>
        <Typography component="p" className="text-sm">
          {description}
        </Typography>
      </CardContent>
      {actions && <CardActions>{actions}</CardActions>}
    </Card>
  );
};

export default KamiCard;
