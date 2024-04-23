import React from 'react'

export const NavigationBar = () => {

  const buttonStyling = 'bg-red-200 w-32 p-5 text-center hover:bg-pink-400 hover:text-white';

  return (
    <>
      <div>
        <div className='flex flex-row h-[60px] w-full bg-cyan-800 justify-center'>
          <div className={buttonStyling}>Home</div>
          <div className={buttonStyling}>DashBoard</div>
          <div className={buttonStyling}>Allocation</div>
          <div className={buttonStyling}>Patients</div>
          <div className={buttonStyling}>Doctors</div>
          <div className={buttonStyling}>Reservations</div>
        </div>
      </div>
    </>
  )
}
