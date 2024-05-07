import NavigationBar from "../components/NavigationBar"
import SideMenu from "../components/SideMenu"

const Patients = () => {
  return (
    <div className="flex flex-row">
      <SideMenu/>
      <div className="h-screen w-screen bg-white font-poppins">
          <NavigationBar/>  
          <h1>Patients</h1>
      </div>
    </div>
  )
}

export default Patients