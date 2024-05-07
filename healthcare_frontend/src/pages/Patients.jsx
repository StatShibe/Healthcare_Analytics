import NavigationBar from "../components/NavigationBar"


const Patients = () => {
  return (
    <div className="flex flex-row">
      <SideMenu/>
      <div className="h-screen w-screen bg-white font-poppins">
          <h1>Patients</h1>
      </div>
    </div>
  )
}

export default Patients