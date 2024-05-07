import React from 'react'
import NavigationBar from '../components/NavigationBar'

export const Appointments = () => {
  return (
    <div className="flex flex-row">
      <SideMenu/>
      <div className="h-screen w-screen bg-white font-poppins">
          <h1>Appointments</h1>
      </div>
    </div>
  )
}
