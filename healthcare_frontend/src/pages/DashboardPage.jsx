import React from 'react'
import { NavigationBar } from '../components/NavigationBar'

const DashboardPage = () => {
  return (
    <>
		  <div className="h-screen w-screen bg-[url('./assets/images/login-blue.jpg')] bg-cover font-poppins">
		  	<NavigationBar/>
      </div>
    </>
  )
}

export default DashboardPage