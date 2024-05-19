import React from 'react'
import  NavigationBar from '../components/NavigationBar'
import LineGraph from '../components/Charts/Line'
import LineGraph2 from '../components/Charts/Line2'
import PieGraph from '../components/Charts/Pie'
import SideMenu from '../components/SideMenu'
import { useState, useEffect } from 'react'
import axios from 'axios'


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
			<SideMenu/>
			<div className="h-fit w-screen bg-white font-poppins">	
			  	<NavigationBar/>
				<div className='grid grid-cols-3 grid-rows-1 gap-4 justify-center'>
					<div className='p-5'>
						<PieGraph values = {allocation}/>
	        		</div>
					<div className='flex flex-col items-center justify-evenly'>
						<div className='h-[150px] w-[300px] bg-slate-200 p-5 text-center rounded-md shadow-md'>
							<h2>Occupied Beds</h2>
							<br/>
							<p className='text-4xl'>{allocation.total - allocation.curr_avbl}</p>
						</div>
						<div className='h-[150px] w-[300px] bg-slate-200 p-5 text-center rounded-md shadow-md'>
							<h2>Vacant Beds</h2>
							<br/>
							<p className='text-4xl'>{allocation.curr_avbl}</p>
						</div>
					</div>
					<div className='flex flex-col items-center justify-between'>
						<div className='h-[200px]'>
							<LineGraph/>
						</div>
						<div className='h-[200px]'>
							<LineGraph2/>
						</div>
					</div>
				</div>
	      	</div>
		</div>
    </>
  )
}

export default DashboardPage