import React, { useState } from "react";

const RegisterForm = () => {
    const [data, setData] = useState({})
  const [role, setRole] = useState("");
  const [additionalInputs, setAdditionalInputs] = useState([]);

  const handleRoleChange = (e) => {
    const selectedRole = e.target.value;
    setRole(selectedRole);

    // Define additional inputs based on the selected role
    let inputs = [];
    if (selectedRole === "doctor") {
      inputs = [
        "dob",
        "gender",
        "empind",
        "experience",
        "mobile_phone",
        "address",
        "onduty",
        "Specialization"
      ];
    }
    setAdditionalInputs(inputs);
  };
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
    <div>
      <h2>Register Form</h2>
      <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="role">Select Role:</label>
        <select name="role" value={role} onChange={handleRoleChange}>
          <option value="doctor">Doctor</option>
          <option value="patient">Patient</option>
        </select>
      </div>

      {/* Render additional inputs based on selected role */}
      {additionalInputs.map((input, index) => (
        <div key={index}>
          <label htmlFor={input}>{input}:</label>
          {input === "gender" ? (
            <select name={input.toLowerCase().replace(/\s/g, "")} onChange={handleChange}>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          ) : input === "dob" ? (
            <input
              type="date"
              name={input.toLowerCase().replace(/\s/g, "")}
              onChange = {handleChange}
            />
          ) : input === "empind" || input === "onduty" ? (
            <select name={input.toLowerCase().replace(/\s/g, "")} onChange={handleChange} defaultValue={"Y"}>
              <option value="Y">Yes</option>
              <option value="N">No</option>
            </select>)
        : (
            <input
              type="text"
              name={input.toLowerCase().replace(/\s/g, "")}
              onChange = {handleChange}
            />
          )}
        </div>
      ))}

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

      <input type = "submit"/>
      </form>
    </div>
  );
};

export default RegisterForm;
