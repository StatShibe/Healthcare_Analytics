import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartDataLabels);

const DoctorsDoughnutChart = () => {
  const [summary, setSummary] = useState([]);
  const chartRef = useRef(null);

  const fetchData = async () => {
    const response = await axios.get(import.meta.env.VITE_SERVER_URL + '/doctor/summary');
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

  const doughnutChartData = {
    labels: [
        'On-Duty',
		'Off-Duty'
        ],
    datasets: [
      {
        label: "Doctors Availability",
        data: [summary.on_duty, summary.not_duty],
        borderColor: 'rgb(75, 192, 192)',
		backgroundColor:[
		"rgba(0, 255, 0)",
		"rgba(255, 0, 0)"
		
	],
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
};

  return <Doughnut ref={chartRef} options={options} data={doughnutChartData} />;
};

export default DoctorsDoughnutChart;
