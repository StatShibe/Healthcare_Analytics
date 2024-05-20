import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'
import axios from 'axios'
import { useEffect, useState } from 'react'

ChartJS.register(
  CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend
)

const LineGraph = () => {

	const [summary, setSummary] = useState([]);

	async function fetchData(){
		await axios.get(import.meta.env.VITE_SERVER_URL+'/inpatient/dischargesummary/6').then((response)=>{
			setSummary(response.data);
			console.log(response.data);
		});
	};

	useEffect(()=>{
		fetchData();
	},[]);

	const lineChartData = {
		labels : summary?.map(key => new Date(key.discharge_date)?.toDateString()),
		datasets : [
			{
				label : "Discharges",
				data: summary?.map(key => key.count),
				borderColor: "rgb(75, 192, 192)",
			},
		],
		
	};

	const options = {
		maintainAspectRatio : false,
		responsive : true,
		scales: {
			x: {
				grid: {
					display:false
				}
			},
			y: {
				grid: {
					display:true
				}   
			}
		}
	}

	return(
			<Line options={options} data = {lineChartData}/>
	)
}

export default LineGraph