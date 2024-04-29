import {Link} from "react-router-dom"
import profileIcon from "../assets/images/profileIcon.svg"

const NavigationBar = () => {

  const buttonStyling = 'bg-white h-[60px] w-36 p-5 text-center hover:bg-slate-400 hover:text-white';

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
			</div>
		</div>
    </>
  )
}

export default NavigationBar;
