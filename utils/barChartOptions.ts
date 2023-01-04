import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

const initBarChart = (title: string, customOptions?: any | null) => {
  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
  const options = {
    plugins: {
      legend: {
        display: false,
      },
      title: {
        text: title,
        display: true,
        color: '#403F3F',
        font: {
          size: 18,
        },
        align: 'start',
      },
    },
    scales: {
      xAxis: {
        display: false,
      },
      yAxis: {
        max: 1,
      },
    },
    ...customOptions,
  };

  return options;
};

export default initBarChart;
