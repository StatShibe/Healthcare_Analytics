import { Card, CardContent, FormGroup} from "@mui/material";

const UserRegistration = () => {

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    return(
        <div className="flex justify-center items-center h-screen w-screen">
            <form>
                <div>
                    <label>Email ID</label>
                    <input/>  
                </div>  
                <br/>
                <div>
                    <label>Password</label>
                    <input/>  
                </div>  
                <br/>
                <div>
                    <label>Confirm Password</label>
                    <input/>  
                </div>  
                <br/>
                <div>
                    <label>Name</label>
                    <input/>  
                </div>
                <br/>
                <div>
                    <label>Role</label>
                    <select defaultValue={"Hospital Staff"}>
                        <option>
                            Doctor
                        </option>
                        <option>
                           Admin
                        </option>
                        <option>
                            Hospital Staff
                        </option>
                    </select>  
                </div>    
            </form>
        </div>
    )
}

export default UserRegistration;