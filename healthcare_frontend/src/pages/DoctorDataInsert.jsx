import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const DoctorDataInsert = () => {

  const navigate = useNavigate();

    const [data, setData] = useState({})
      const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setData(values => ({...values, [name]: value}))
    }

    const handleSubmit = async(event) => {
      event.preventDefault();
	  console.log(data)
        await axios.post(import.meta.env.VITE_SERVER_URL+'/doctor/register',data,{
          headers: {'content-type': 'application/x-www-form-urlencoded'},
                withCredentials: true,
                credentials: 'include'
        }).then((response)=>{
          console.log(response.data)
          console.log("Inserted successfully");
          navigate('/doctors');
        });
  }

  const inputStyling = "w-[300px] h-[30px] rounded-md focus:scale-110 transition-all p-2"
  const labelStyling = "text-lg" 

  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="h-fit w-5/8 bg-sky-400 p-6 rounded shadow-md font-poppins">
        <h1 className="text-3xl">Doctor Registration Form</h1>
        <br/>
        <form onSubmit={handleSubmit}>
  
        {/* Common inputs */}
        <div className="flex flex-row justify-between p-4">
          <label htmlFor="doctorname" className={labelStyling}>Doctor Name:</label>
          <input type="text" name="doctorname" className = {inputStyling} onChange={handleChange}/>
        </div>
        <div className="flex flex-row justify-between p-4">
          <label htmlFor="email" className={labelStyling}>Email:</label>
          <input type="email" name="email" className = {inputStyling} onChange={handleChange}/>
        </div>
        <div className="flex flex-row justify-between p-4">
          <label htmlFor="specialization" className={labelStyling}>Specialization</label>
          <select name = "specialization" onChange={handleChange} className = "w-[300px] h-[30px] rounded-md focus:scale-110 transition-all" required>
		  		<option value={"General Consultant"}>General Consultant</option>
				<option value={"Orthologist"}>Orthologist</option>
				<option value = {"Neurologist"}>Neurologist</option>
				<option value = {"Pediatrician"}>Pediatrician</option>
				<option value = {"Dermatologist"}>Dermatologist</option>
				<option value = {"Oncologist"}>Oncologist</option>
				<option value={"Gynaecologist"}>Gynaecologist</option>
		  </select>
        </div>
        <div className="flex flex-row justify-between p-4">
          <label htmlFor="dob" className={labelStyling}>Date Of Birth:</label>
          <input type="date" name="dob" className = {inputStyling} onChange={handleChange}/>
        </div>
        <div className="flex flex-row justify-between p-4">
          <label htmlFor="gender" className={labelStyling}>Gender</label>
          <div className="flex flex-row w-[300px] justify-around">
            Male <input type = "radio" value = "M" name = "gender" className="hover:scale-150" onChange={handleChange} required/>
            Female <input type = "radio" value = "F" name = "gender" className="hover:scale-150" onChange={handleChange}/>
          </div>
        </div>
        <div className="flex flex-row justify-between p-4">
          <label htmlFor="years_expr" className={labelStyling}>Years Of Experience:</label>
          <input type="text" name="years_expr" className = {inputStyling} onChange={handleChange}/>
        </div>
        <div className="flex flex-row justify-between p-4">
          <label htmlFor="address" className={labelStyling}>Address:</label>
          <textarea name="address" className = {inputStyling} onChange={handleChange}/>
        </div>
		<div className="flex flex-row justify-between p-4">
          <label htmlFor="on_duty" className={labelStyling}>On Duty</label>
         <div className="flex flex-row w-[300px] justify-around">
            Yes <input type = "radio" value = "Y" name = "on_duty" className="hover:scale-150" onChange={handleChange} required/>
            No <input type = "radio" value = "N" name = "on_duty" className="hover:scale-150" onChange={handleChange}/>
         </div>
        </div>
        <div className="flex flex-row justify-between p-4">
        <label htmlFor="emp_ind" className={labelStyling}>Employment Indicator</label>
         <div className="flex flex-row w-[300px] justify-around">
            Yes <input type = "radio" value = "Y" name = "emp_ind" className="hover:scale-150" onChange={handleChange} required/>
            No <input type = "radio" value = "N" name = "emp_ind" className="hover:scale-150" onChange={handleChange}/>
         </div>
        </div>
        
        <br/>
        <input type = "submit" className="text-blue-950 border-solid h-fit w-fit bg-white p-2 rounded hover:bg-gradient-to-r from-sky-300 to-white hover:transition-all hover:scale-110 hover:border-solid hover:border-black border-2"/>
        </form>
      </div>
    </div>
  );
};

export default DoctorDataInsert;
