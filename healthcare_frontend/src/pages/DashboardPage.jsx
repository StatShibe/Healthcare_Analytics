import React from 'react'
import  NavigationBar from '../components/NavigationBar'
import LineGraph from '../components/Charts/Line'
import LineGraph2 from '../components/Charts/Line2'
import PieGraph from '../components/Charts/Pie'
import SideMenu from '../components/SideMenu'
import { useState, useEffect } from 'react'
import axios from 'axios'
import DailySummaryBarGraph from '../components/Charts/DailySummaryBar'
import DoctorsDoughnutChart from '../components/Charts/DoctorsDoughnutChart'


const DashboardPage = () => {
	
	const [allocation, setAllocation] = useState({});
	async function fetchData(){
		await axios.get(import.meta.env.VITE_SERVER_URL+'/rooms/summary').then((response)=>{
			setAllocation(response.data);
			console.log(response.data);
		});
	}

	useEffect(()=>{
		fetchData();
	},[]);
  	return (
    <>
		<div className='flex flex-row'>
			<div className='fixed'><SideMenu/></div>
			<div className="h-fit w-screen bg-white font-poppins">	
			  	<NavigationBar/>
				<div className='grid grid-cols-2 gap-4 justify-center ml-52'>
					<div className='p-5 h-[300px]'>
						<PieGraph values = {allocation}/>
	        		</div>
					<div className='flex flex-row items-center justify-evenly'>
						<div className='h-[120px] w-[250px] bg-slate-200 p-3 text-center rounded-md shadow-md'>
							<h2>Occupied Beds</h2>
							<br/>
							<p className='text-2xl'>{allocation.total - allocation.curr_avbl}</p>
						</div>
						<div className='h-[120px] w-[250px] bg-slate-200 p-3 text-center rounded-md shadow-md'>
							<h2>Vacant Beds</h2>
							<br/>
							<p className='text-2xl'>{allocation.curr_avbl}</p>
						</div>
					</div>
				
					<div className='h-[250px]'>
						<LineGraph/>
					</div>
					<div className='h-[250px]'>
						<LineGraph2/>
					</div>
				
					<div className='h-[500px] col-span-2 p-8'>
						<DailySummaryBarGraph />
					</div>
					<div className='h-[500px] p-8'>
						<DoctorsDoughnutChart/>	
					</div>
					
				</div>
	      	</div>
		</div>
    </>
  )
}

export default DashboardPage