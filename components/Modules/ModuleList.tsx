import { Box, Grid, Typography } from '@mui/material';
import ModuleCard from 'components/Cards/ModuleCard';
import type { ModuleCardTypes } from 'types/modules';
import { FunctionComponent } from 'react';

type ModuleListTypes = {
  heading: string;
  subheading?: string;
  modules: Array<ModuleCardTypes>;
};

const ModuleList: FunctionComponent<ModuleListTypes> = ({ heading, subheading, modules }) => {
  return (
    <Box>
      <Typography component="h2" className="text-2xl">
        {heading}
      </Typography>
      <Typography>{subheading}</Typography>
      <Grid container className="gap-x-3 gap-y-7 items-stretch my-5">
        {modules.map(({ title, icon, isTop }, index) => (
          <Grid item key={index} md={3} xl={2} className="min-h-[200px]">
            <ModuleCard title={title} icon={icon} isTop={isTop} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ModuleList;
