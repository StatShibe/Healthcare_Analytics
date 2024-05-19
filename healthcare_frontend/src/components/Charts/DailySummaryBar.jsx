import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartDataLabels);

const DailySummaryBarGraph = () => {
  const [summary, setSummary] = useState([]);
  const chartRef = useRef(null);

  const fetchData = async () => {
    const response = await axios.get(import.meta.env.VITE_SERVER_URL + '/dailysummary/'+new Date());
    setSummary(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    fetchData();

    return () => {
      // Destroy the chart instance if it exists
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  const barChartData = {
    labels: [
        'Admissions',
        'Discharges',
        'Appointments',
        'InPatients',
        ],
    datasets: [
      {
        label: "Today's Summary",
        data: summary,
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.8)',
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
        datalabels: {
          display: true,
          color: 'black',
          anchor: 'end',
          align: 'start',
          formatter: (value) => value,
        },
    },
};

  return <Bar ref={chartRef} options={options} data={barChartData} />;
};

export default DailySummaryBarGraph;
