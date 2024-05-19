import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'
import { lineChartData } from '../../mockdata/FakeData'
import axios from 'axios'
import { useState } from 'react'

ChartJS.register(
  CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend
)

const LineGraph = () => {

	const [summary, setSummary] = useState([]);

	async function fetchData(){
		await axios.get(import.meta.env.VITE_SERVER_URL+'/inpatients/all').then((response)=>{
			setSummary(response.data);
			console.log(response.data);
		});
	}

	const options = {
		maintainAspectRatio : false,
		responsive : true
	}

	return(
			<Line options={options} data = {lineChartData}/>
	)
}

export default LineGraph