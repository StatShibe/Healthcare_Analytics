import NavigationBar from "../components/NavigationBar"
import SideMenu from "../components/SideMenu" 
import Card  from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import axios from "axios";
import { useEffect, useState } from "react";

export const Doctors = () => {
  const cardStyles = "m-6 h-[120px] w-3/4 hover:scale-105 hover:transition-all hover:bg-gradient-to-r from-slate-600 to-slate-300 hover:text-white";
  const [doctors,setDoctors] = useState([]);

  const getData= async() =>{
    await axios.get(import.meta.env.VITE_SERVER_URL+'/doctor/all').then((response)=>{
      setDoctors(response.data);
      console.log(response.data);
    });
  }
  
  useEffect(()=> {
    getData();
  },[]);

  return (
    <div className="flex flex-row">
      <SideMenu/>
      <div className="h-screen w-screen bg-white font-poppins">
      <NavigationBar/>
      <div className="flex flex-col items-center">
        {
          doctors?.map((doctor,index)=>{
            return( 
					<Card key = {index} className={cardStyles}>
                    	<CardContent>
                  			<h1><strong>{doctor.name}</strong></h1>
                  			<p><strong>{doctor.specialization}</strong></p>
                        <p>Years of Experience : <strong>{doctor.years_expr} </strong></p>
                        <p>Email : {doctor.email}</p>
                		</CardContent>
              		</Card>
         	)})
        }
      </div>
      </div>
    </div>
  )
}

export default Doctors
