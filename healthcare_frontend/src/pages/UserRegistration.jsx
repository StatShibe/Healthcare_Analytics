import React, { useState } from "react";

const RegisterForm = () => {

    const [data, setData] = useState({})
      const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setData(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
      event.preventDefault();
      if(data.password != data.confirmPassword){
          console.log("not valid")
      }
      else{
          console.log(data);
      }
  }


  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="h-fit w-fit">
        <h1 className="text-xl">Register Form</h1>
        <br/>
        <form onSubmit={handleSubmit}>
  
        {/* Common inputs */}
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input type="password" name="confirmPassword" onChange={handleChange}/>
        </div>
  
        <div>
          <label htmlFor="role">Select Role:</label>
          Doctor<input type = "radio" value = "doctor" name = "role" onChange={handleChange} required/>
          Staff<input type = "radio" value = "staff" name = "role" onChange={handleChange}/>
        </div>
  
        <input type = "submit"/>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
