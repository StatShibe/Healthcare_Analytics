import NavigationBar from "../components/NavigationBar"
import SideMenu from "../components/SideMenu" 
import CardComp from "../components/CardComp"
import axios from "axios";
import { useEffect, useState } from "react";

export const Doctors = () => {
  const cardStyles = "m-6 h-[160px] w-3/4 hover:scale-105 hover:transition-all hover:bg-gradient-to-r from-slate-600 to-slate-300 hover:text-white";
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
            return(<CardComp doctor={doctor} styling={cardStyles}/>);
          })
        }
        <CardComp name={"Dr. Doom"} styling={cardStyles}/>
        <CardComp name={"Dr. Strange"} styling={cardStyles}/>
        <CardComp name = {"Dr. Banner"} styling={cardStyles}/>
      </div>
      </div>
    </div>
  )
}

export default Doctors
