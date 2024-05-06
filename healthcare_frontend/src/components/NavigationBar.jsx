import {Link} from "react-router-dom"
import profileIcon from "../assets/images/profileIcon.svg"
import axios from "axios";

const NavigationBar = () => {

  const buttonStyling = 'bg-white h-[60px] w-36 p-5 text-center hover:bg-slate-400 hover:text-white';
  const handleLogout = async(e) =>{
	e.preventDefault();
	await axios.get(import.meta.env.VITE_SERVER_URL+'/auth/logout',{withCredentials:true}).then((res)=>{
		console.log(res.data);
	})
  }
  return (
    <>
		<div>
			<div className='flex flex-row h-[60px] w-full bg-white justify-center items-center text-center border-b-2'>
				<div className={buttonStyling}><Link to = "/">Home</Link></div>
				<div className={buttonStyling}><Link to = "/dashboard">DashBoard</Link>	</div>
				<div className={buttonStyling}><Link to = "/allocation">Allocation</Link></div>
				<div className={buttonStyling}><Link to = "/patients">Patients</Link></div>
				<div className={buttonStyling}><Link to = "/doctors">Doctors</Link></div>
				<div className={buttonStyling}><Link to = "/appointments">Appointments</Link></div>
				<div className="absolute right-0 pr-12">
					<Link to = "/login"><img src={profileIcon} className="h-[35px] w-[35px]" /></Link>
				</div>
				<div className={buttonStyling} onClick={handleLogout}>Logout</div>
			</div>
		</div>
    </>
  )
}

export default NavigationBar;
