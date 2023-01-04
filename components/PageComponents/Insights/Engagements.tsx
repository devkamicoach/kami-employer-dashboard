import { Grid, Typography } from "@mui/material"
import { Box } from "@mui/system";
import { FunctionComponent } from "react";
import { Bar } from 'react-chartjs-2';
import initBarChart from "utils/barChartOptions";

type EngagementsType = {
  teams: Array<any>
}

const Engagements: FunctionComponent<EngagementsType> = ({ teams }) => {
  const options = initBarChart("USER ENGAGEMENT");
  const data = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "A",
        borderRadius: 30,
        data: Array.from({ length: 12 }, () => Math.random()),
        backgroundColor: "#40B3AC",
        barThickness: 15
      },
      {
        label: "B",
        borderRadius: 30,
        data: Array.from({ length: 12 }, () => Math.random()),
        backgroundColor: "#86D9D4",
        barThickness: 15
      }
    ]
  }
  return (
    <Grid className="gap-9" container>
      <Grid sm={7} item>
        <Bar options={options} data={data} />
      </Grid>
      <Grid sm={4} item>
        <Typography component="h2" className="font-body text-lg font-bold">USER ENGAGEMENT</Typography>
        {teams.map(({ name, impressions }: any, index) => {
          const profileName = name.split(" ")[0][0] + name.split(" ").at(-1)[0];
          return (<Box className="flex gap-3 items-center my-5" key={index}>
            <Box className="rounded-full bg-gray-100 flex items-center justify-center" width={40} height={40}>
              {profileName}
            </Box>
            <Box>
              <Typography component="p" className="text-kami-blue">{name}</Typography>
              <Typography component="p">{impressions.toLocaleString("en-us")} active impressions</Typography>
            </Box>
          </Box>)
        })}
      </Grid>
    </Grid>
  )
}

export default Engagements