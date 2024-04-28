import React from 'react';
import axios from 'axios';

export const DashBoard = () => {

  const handleLogout = async() => {
    try{
      const response = await axios.post("http://localhost:3500/auth/logout");
      console.log(response.data)
    }
    catch(err){
      console.log(err);
    }
   
  }

  return (
    <><div>
        <div className='flex flex-row h-[60px] w-full bg-cyan-800 justify-center'>
          <div className='bg-red-200 w-32 p-5 text-center hover:bg-pink-400 hover:text-white'>Home</div>
          <div className='bg-red-200 w-32 p-5 text-center'>DashBoard</div>
          <div className='bg-red-200 w-32 p-5 text-center'>Allocation</div>
          <div className='bg-red-200 w-32 p-5 text-center'>Patients</div>
          <div className='bg-red-200 w-32 p-5 text-center'>Doctors</div>
          <div className='bg-red-200 w-32 p-5 text-center'>Reservations</div>
          <div className='bg-red-200 w-32 p-5 text-center' onClick={handleLogout}>Log out</div>

        </div>
      </div>
    </>
  )
}