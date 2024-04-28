import React from 'react'
import {Link} from "react-router-dom"

export const NavigationBar = () => {

  const buttonStyling = 'bg-red-200 w-32 p-5 text-center hover:bg-pink-400 hover:text-white';

  return (
    <>
      <div>
        <div className='flex flex-row h-[60px] w-full bg-cyan-800 justify-center text-'>
          <div className={buttonStyling}><Link to = "/">Home</Link></div>
          <div className={buttonStyling}><Link to = "/dashboard">DashBoard</Link></div>
          <div className={buttonStyling}><Link to = "#allocation">Allocation</Link></div>
          <div className={buttonStyling}><Link to = "#patients">Patients</Link></div>
          <div className={buttonStyling}><Link to = "#doctors">Doctors</Link></div>
          <div className={buttonStyling}><Link to = "#reservations">Reservations</Link></div>
        </div>
      </div>
    </>
  )
}
