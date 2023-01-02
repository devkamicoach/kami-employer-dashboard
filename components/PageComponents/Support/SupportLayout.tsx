import { Grid } from '@mui/material';
import { FunctionComponent, ReactNode } from 'react';

type SupportLayoutTypes = {
  articles: ReactNode;
};

const SupportLayout: FunctionComponent<SupportLayoutTypes> = ({ articles }) => {
  return (
    <Grid container>
      <Grid sm={12} item>
        {articles}
      </Grid>
    </Grid>
  );
};

export default SupportLayout;
