import NavigationBar from "../components/NavigationBar"
import SideMenu from "../components/SideMenu" 

export const Doctors = () => {
  return (
    <div className="flex flex-row">
      <SideMenu/>
      <div className="h-screen w-screen bg-white font-poppins">
      <NavigationBar/>
          <h1>Doctors</h1>
      </div>
    </div>
  )
}

export default Doctors
