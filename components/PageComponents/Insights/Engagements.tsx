import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { FunctionComponent } from 'react';
import { Bar } from 'react-chartjs-2';
import initBarChart from 'utils/barChartOptions';

type EngagementsType = {
  teams: Array<any>;
};

const Engagements: FunctionComponent<EngagementsType> = ({ teams }) => {
  const options = initBarChart('');
  const data = {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    datasets: [
      {
        label: 'A',
        borderRadius: 30,
        data: Array.from({ length: 12 }, () => Math.random()),
        backgroundColor: '#40B3AC',
        barThickness: 15,
      },
      {
        label: 'B',
        borderRadius: 30,
        data: Array.from({ length: 12 }, () => Math.random()),
        backgroundColor: '#86D9D4',
        barThickness: 15,
      },
    ],
  };
  return (
    <>
      <Typography component="h2" className="font-heading text-2xl font-bold">
        Insights
      </Typography>
      <Grid className="flex justify-between" container>
        <Grid sm={9} item>
          <Bar options={options} data={data} />
        </Grid>
        <Grid sm={2.5} item>
          <Typography component="h2" className="font-body text-lg font-bold">
            User Engagement
          </Typography>
          {teams.map(({ name, impressions }: any, index) => {
            return (
              <Box className="flex gap-3 items-center my-5" key={index}>
                <Box>
                  <Typography component="p" className="text-kami-blue">
                    {name}
                  </Typography>
                  <Typography component="p">{impressions.toLocaleString('en-us')} active impressions</Typography>
                </Box>
              </Box>
            );
          })}
        </Grid>
      </Grid>
    </>
  );
};

export default Engagements;
