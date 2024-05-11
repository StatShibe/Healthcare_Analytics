import SideMenu from "../components/SideMenu"
import NavigationBar from "../components/NavigationBar"
import CardComp from "../components/CardComp"

const RoomAllocation = () => {
  const cardStyling1 = "m-6 h-[120px] w-[180px] text-center"
  const cardStyling2 = "m-6 h-[120px] w-[180px] text-center"
  return (
    <div className="flex flex-row">
      <SideMenu/>
      <div className="h-screen w-screen bg-white font-poppins">
          <NavigationBar/>
          <div className="flex flex-row justify-left">
            <CardComp text={"Vacant"} styling={cardStyling1}/>
            <CardComp text={"Occupied"} styling={cardStyling2}/>
          </div>
          <div className="flex flex-row justify-around">
            <CardComp text = {"Room check"} styling = {""}/>
            <CardComp text = {"Room details"} styling = {""}/>
          </div>
      </div>
    </div>
  ) 
}

export default RoomAllocation