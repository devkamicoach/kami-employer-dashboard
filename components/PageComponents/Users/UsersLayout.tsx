import { Grid } from '@mui/material';
import { FunctionComponent, ReactNode } from 'react';

type UsersLayoutType = {
  search: ReactNode;
  groups: ReactNode;
  table: ReactNode;
};

const UsersLayout: FunctionComponent<UsersLayoutType> = ({ search, groups, table }) => {
  return (
    <Grid container>
      <Grid sm={12} item>
        {search}
      </Grid>
      <Grid sm={12} item>
        {groups}
      </Grid>
      <Grid sm={12} item>
        {table}
      </Grid>
    </Grid>
  );
};

export default UsersLayout;
