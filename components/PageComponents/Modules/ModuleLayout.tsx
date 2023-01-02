import { Grid } from '@mui/material';
import { FunctionComponent, ReactNode } from 'react';

type ModuleLayoutTypes = {
  currentModules: ReactNode;
  recommendedModules: ReactNode;
};

const ModuleLayout: FunctionComponent<ModuleLayoutTypes> = ({ currentModules, recommendedModules }) => {
  return (
    <Grid container>
      <Grid item sm={12}>
        {currentModules}
      </Grid>
      <Grid item sm={12}>
        {recommendedModules}
      </Grid>
    </Grid>
  );
};

export default ModuleLayout;
