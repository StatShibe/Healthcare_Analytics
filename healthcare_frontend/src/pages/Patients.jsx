import NavigationBar from "../components/NavigationBar"
import SideMenu from "../components/SideMenu"
import CardComp from "../components/CardComp"

const Patients = () => {
  const patientStyling = "m-6 w-[300px] h-fit"
  const displayStyling = "m-6 w-[500px] h-fit"
  return (
    <div className="flex flex-row">
      <SideMenu/>
      <div className="h-screen w-screen bg-white font-poppins">
          <NavigationBar/>  
          <div className="flex flex-row justify-around">
              <CardComp text = {"Patients Search"} styling = {patientStyling}/>
              <CardComp text = {"Patients Display"} styling = {displayStyling}/>
          </div>
      </div>
    </div>
  )
}

export default Patients