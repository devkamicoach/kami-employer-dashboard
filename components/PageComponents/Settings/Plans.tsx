import { Grid, Box, Typography } from '@mui/material';
import { FunctionComponent } from 'react';
import ProductivityPlanCard from '../../Cards/ProductivityPlanCard';
type PlansType = {
  name: string;
  plan: string;
  title: string;
  line1: string;
  line2: string;
  line3: string;
};

const Plans: FunctionComponent<PlansType> = ({ name, plan, title, line1, line2, line3 }) => {
  return (
    <>
      <Typography component="h2" className="font-heading text-2xl font-bold">
        Organisation Settings
      </Typography>
      <Grid container>
        <Grid item className="flex flex-col w-[50%]">
          <Grid container className="flex-col">
            <Grid item>
              <Box className="py-3">
                <Typography component="h3" className="font-body font-bold">
                  Organisation Name
                </Typography>
                <Typography component="h3" className="font-body">
                  {name}
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box className="py-3">
                <Typography component="h3" className="font-body font-bold">
                  Current Plan
                </Typography>
                <Typography component="h3" className="font-body">
                  {plan}
                </Typography>
                <a className="font-body text-[#40B3AC] underline" href="#">
                  Upgrade your plan
                </a>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <ProductivityPlanCard title={title} line1={line1} line2={line2} line3={line3} />
        </Grid>
      </Grid>
    </>
  );
};

export default Plans;
