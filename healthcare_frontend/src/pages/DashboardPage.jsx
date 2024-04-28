import React from 'react'
import { NavigationBar } from '../components/NavigationBar'
import LineGraph from '../components/Charts/Line'
import PieGraph from '../components/Charts/Pie'


const DashboardPage = () => {
  return (
    <>
		<div className="h-screen w-screen bg-white font-poppins">
		  	<NavigationBar/>
			<div className='grid grid-cols-3 gap-4 justify-center'>
				<div className='p-5'>
					<LineGraph/>
        		</div>
				<div className='flex items-center justify-center'>
					<div className='h-[150px] w-[300px] bg-slate-200 p-5 text-center rounded-md shadow-md'>
						<h2>Occupied Beds</h2>
						<br/>
						<p className='text-4xl'>104</p>
					</div>
				</div>
				<div className='flex items-center justify-center'>
					<div className='h-[150px] w-[300px] bg-slate-200 p-5 text-center rounded-md shadow-md'>
						<h2>Vacant Beds</h2>
						<br/>
						<p className='text-4xl'>56</p>
					</div>
				</div>
				<div>
					<PieGraph/>
				</div>
			</div>
      	</div>
    </>
  )
}

export default DashboardPage