import SideMenu from "../components/SideMenu"
import NavigationBar from "../components/NavigationBar"

const RoomAllocation = () => {
  return (
    <div className="flex flex-row">
      <SideMenu/>
      <div className="h-screen w-screen bg-white font-poppins">
          <NavigationBar/>
          <h1>Room Allocation page</h1>
      </div>
    </div>
  )
}

export default RoomAllocation