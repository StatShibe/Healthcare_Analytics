import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {Link} from "react-router-dom"
import { LayoutDashboardIcon, UserSquare2, HeartPulseIcon, Stethoscope, NotebookPen, Syringe } from 'lucide-react';
import HealthcareLogo from "../../assets/healthcare_logo.svg"

const menuItemStyling = "h-[60px] hover:scale-110 hover:text-white hover:font-bold  transition-all flex justify-center hover:bg-slate-600 w-full"
const menuItemStyling2 = "flex flex-col h-full justify-center w-full"
const menuItemStyling3 = "flex flex-row w-full"
const iconStyling = "ml-6"
const linkStyling = "ml-6"

const SideNav = () => {
    return(
        <>
             <nav className="h-screen fixed w-[220px] bg-white border-r-2 flex flex-col justify-start font-['Poppins'] text-slate-600">
                <div className="p-2 flex flex-row w-full justify-center h-[100px]">
                    <Avatar>
                        <AvatarImage src={HealthcareLogo}/>
                        <AvatarFallback>REACT</AvatarFallback>
                    </Avatar>
                </div>
                <div className={menuItemStyling}>
                    <div className={menuItemStyling2}>
                        <div className = {menuItemStyling3}>
                            <LayoutDashboardIcon className={iconStyling}/>
                            <Link to="/" className={linkStyling}>Dashboard</Link>
                        </div>
                    </div>
                </div>
                <div className={menuItemStyling}>
                    <div className={menuItemStyling2}>
                    <div className = {menuItemStyling3}>
                            <UserSquare2 className={iconStyling}/>
                            <Link to="/" className={linkStyling}>Allocation</Link>
                        </div>
                    </div>
                </div>
                <div className={menuItemStyling}>
                    <div className={menuItemStyling2}>
                    <div className = {menuItemStyling3}>
                            <HeartPulseIcon className={iconStyling}/>
                            <Link to="/patientdetails" className={linkStyling}>Patients</Link>
                        </div>
                    </div>
                </div>
                <div className={menuItemStyling}>
                    <div className={menuItemStyling2}>
                    <div className = {menuItemStyling3}>
                            <Stethoscope className={iconStyling}/>
                            <Link to="/doctordetails" className={linkStyling}>Doctors</Link>
                        </div>
                    </div>
                </div>
                <div className={menuItemStyling}>
                    <div className={menuItemStyling2}>
                    <div className = {menuItemStyling3}>
                            <NotebookPen className={iconStyling}/>
                            <Link to="/appointments" className={linkStyling}>Appointments</Link>
                        </div>
                    </div>
                </div>
                <div className={menuItemStyling}>
                    <div className={menuItemStyling2}>
                    <div className = {menuItemStyling3}>
                            <Syringe className={iconStyling}/>
                            <Link to="/treatments" className={linkStyling}>Treatment</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default SideNav;