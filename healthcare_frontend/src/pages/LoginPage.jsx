import LoginForm from "../components/LoginForm";
import cardiogramIcon from "../assets/images/electrocardiogram.svg" 

const LoginPage = () => {

   const handleLogin = async() =>{
		console.log("Logged in")
   }

    return(
      <>
        <div className="h-screen w-screen bg-[url('./assets/images/login-blue.jpg')] bg-cover flex flex-row justify-center items-center">
				<div className="flex flex-col w-3/12 h-1/3 bg-white p-4 justify-center rounded-lg">
					<form onSubmit={handleLogin}>
						<div className="flex justify-around">
							<label for = "emailid">Email ID</label>
							<input id = "emailid" type = "email" required/>
						</div>
						<br/>
						<div className="flex justify-around">
							<label for = "password">Password</label>
							<input id = "password" type = "password" required/>
						</div>
						<br/>
						<div className="ml-6">
							<input className = "bg-slate-500 rounded-full w-20 h-8 text-center" type = "submit"/>
						</div>
						
					</form>
				</div>
		</div>
      </>
    )
}

export default LoginPage;