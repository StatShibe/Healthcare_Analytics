import SideMenu from '../components/SideMenu'
import NavigationBar from '../components/NavigationBar'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Card, CardContent } from '@mui/material'
import { PlusCircleIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

const Appointments = () => {
  const listStyling = "m-6 h-[250px] w-fit"
  const [data,setData] = useState([]);

  useEffect(()=>{
    axios.get(import.meta.env.VITE_SERVER_URL+'/appointments/all',{withCredentials:true}).then((response)=>{
      setData(response.data);
      console.log(response.data);
    })
  },[])
  return (
    <div className="flex flex-row">
      <SideMenu/>
      <div className="h-screen w-screen bg-white font-poppins">
          <NavigationBar/>
          <Link to = "/createappointment"><div className="h-fit w-[300px] p-3 m-5 hover:bg-slate-500 hover:scale-110 hover:transition-all hover:text-white rounded-lg shadow-md flex flex-row"><PlusCircleIcon/> Add Appointment</div></Link>
          <div className='grid grid-cols-3 items-left'>
          
              {
                data?.map((row,index)=>{
                  return(
                  <Card className={listStyling}>
                    <CardContent>
                      <h1 className="font-bold">Appointment ID : {row?.appointment_id}</h1>
                      <p>Patient ID : {row?.patient_id}</p>
                      <p>Appointment Date : {new Date(row?.appointment_date).toLocaleDateString()}</p>
                      <p>Appointment Time : {(row?.appointment_time)?.split('+')[0]}</p>
                      <p>Appointment Reason : {row?.appointment_reason}</p>
                      <p>Doctor ID : {row?.doctor_id}</p>
                      <p>Test Measurements : {row?.test_msrmnt_dtl || '-'}</p>
                      <p>Prescription : {row?.prescription_dtl}</p>
                    </CardContent>
                  </Card>
                )})
              }
          </div>
      </div>
    </div>
  )
}

export default Appointments;