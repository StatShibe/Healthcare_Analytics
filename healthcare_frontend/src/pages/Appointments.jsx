import SideMenu from '../components/SideMenu'
import NavigationBar from '../components/NavigationBar'
import CardComp from '../components/CardComp'

const Appointments = () => {
  const calenderStyling = "m-6 h-[300px] w-[300px]"
  const listStyling = "m-6 h-screen w-[600px]"
  const recencyStyling = "m-6 h-[300px] w-[300px]"
  return (
    <div className="flex flex-row">
      <SideMenu/>
      <div className="h-screen w-screen bg-white font-poppins">
          <NavigationBar/>
          <div className='grid grid-cols-2 grid-rows-2 h-screen w-fit'>
            <div>
              <CardComp text = {"Calender"} styling ={calenderStyling}/>
            </div>
            <div className='col-row-2 w-[600px] h-fit'>
              <CardComp text = {"Appointment List"} styling = {listStyling}/>
            </div>
            <div>
              <CardComp text  = {"Recency List"} styling={recencyStyling}/>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Appointments;