import NavigationBar from "../components/NavigationBar"
import SideMenu from "../components/SideMenu" 
import CardComp from "../components/CardComp"

export const Doctors = () => {
  return (
    <div className="flex flex-row">
      <SideMenu/>
      <div className="h-screen w-screen bg-white font-poppins">
      <NavigationBar/>
      <CardComp text={"Dr. Doom"}/>
      <CardComp text={"Dr. Strange"}/>
      </div>
    </div>
  )
}

export default Doctors
