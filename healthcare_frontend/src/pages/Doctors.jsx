import NavigationBar from "../components/NavigationBar"
import SideMenu from "../components/SideMenu" 
import CardComp from "../components/CardComp"

export const Doctors = () => {
  const cardStyles = "m-6 h-[300px] w-[300px] hover:scale-125 hover:transition-all hover:bg-gradient-to-r from-slate-600 to-slate-300 hover:text-white";
  return (
    <div className="flex flex-row">
      <SideMenu/>
      <div className="h-screen w-screen bg-white font-poppins">
      <NavigationBar/>
      <div className="flex flex-row justify-center items-center">
        <CardComp text={"Dr. Doom"} styling={cardStyles}/>
        <CardComp text={"Dr. Strange"} styling={cardStyles}/>
        <CardComp text = {"Dr. Banner"} styling={cardStyles}/>
      </div>
      </div>
    </div>
  )
}

export default Doctors
