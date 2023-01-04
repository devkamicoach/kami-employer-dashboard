import { Grid } from "@mui/material"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,

} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Engagements = () => {

  const options: any = {
    plugins: {
      legend: {
        display: false

      },
      title: {
        text: "User engagement",
        display: true,
        color: "#403F3F",
        font: {
          size: 18
        },
        align: "start",
      }
    },
    scales: {
      xAxis: {
        display: false
      },
      yAxis: {
        max: 1
      }
    },
  };

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
        barThickness: 10
      },
      {
        label: "B",
        borderRadius: 30,
        data: Array.from({ length: 12 }, () => Math.random()),
        backgroundColor: "#86D9D4",
        barThickness: 10
      }
    ]
  }
  return (
    <Grid className="gap-4" container>
      <Grid sm={6} item>
        <Bar options={options} data={data} />
      </Grid>
      <Grid sm={4} item></Grid>
    </Grid>
  )
}

export default Engagements