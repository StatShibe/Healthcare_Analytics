import NavigationBar from "../components/NavigationBar"
import SideMenu from "../components/SideMenu"
import { Card, CardContent } from "@mui/material"
import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Patients = () => {
  const [data,setData] = useState([]);
  const navigate = useNavigate();
  const patientStyling = "m-6 w-[300px] h-fit"
  const displayStyling = "m-6 w-fit h-fit"

  const fetchData= async()=>{
    await axios.get(import.meta.env.VITE_SERVER_URL+'/inpatient/current').then((response)=>{
      setData(response.data);
      console.log(response.data);
    });
  }
  useEffect(()=>{
    fetchData();
  },[]);
  return (
    <div className="flex flex-row">
      <SideMenu/>
      <div className="h-screen w-screen bg-white font-poppins">
          <NavigationBar/>  
          <div className="grid grid-cols-4 justify-around">
              {
                data?.map((row,index)=>{
                  return(
                  <Card className={displayStyling}>
                    <CardContent>
                      <h1 className="font-bold">Admission ID : {row?.admission_id}</h1>
                      <p>Patient ID : {row?.patient_id}</p>
                      <p>Room ID : {row?.room_id}</p>
                      <p>Admission Date : {new Date(row?.admission_date)?.toLocaleDateString()}</p>
                      <p>Admission Reason : {row?.admission_reason}</p>
                      <p>Doctor ID : {row?.primary_doctor_id}</p>
                      <p>Discharge Date : {new Date(row?.discharge_date)?.toLocaleDateString()}</p>
                      <button onClick={()=> navigate('/addtreatment')} className="bg-sky-100 p-2 rounded-sm hover:bg-pink-200 hover:scale-110  hover:transition-all">Add Treatment</button>
                    </CardContent>
                  </Card>
                )})
              }


          </div>
      </div>
    </div>
  )
}

export default Patients