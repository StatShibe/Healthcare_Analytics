import './App.css';
import SideMenu from './components/SideMenu';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
import ErrorPage from './pages/ErrorPage'
import RoomAllocation from './pages/RoomAllocation'
import Patients from './pages/Patients'
import Doctors from './pages/Doctors'
import Appointments from './pages/Appointments'
import UserRegistration from './pages/UserRegistration'
import DoctorDataInsert from './pages/DoctorDataInsert'
import InPatientRegistration from './pages/InPatientRegistration'
import AppointmentRegistration from './pages/AppointmentRegistration'
import Treatments from './pages/Treatments'
import AddTreatment from './pages/AddTreatment'
import DoctorEdit from './pages/DoctorEdit'

function App() {
  return (
      	<div className='flex flex-row'>
          	<BrowserRouter>
				<Routes>
				
					<Route element = {<UserRegistration/>} path='/createuser' errorElement = {<ErrorPage/>}/>
					<Route element = {<LoginPage/>} path='/login' errorElement = {<ErrorPage/>}/>
					<Route element = {<DashboardPage/>} path='/dashboard' errorElement = {<ErrorPage/>}/>

					{/*Doctor related pages*/}
					<Route element = {<Doctors/>} path='/doctors' errorElement = {<ErrorPage/>}/>
					<Route element = {<DoctorDataInsert/>} path='/insertdoctor' errorElement = {<ErrorPage/>}/>
					<Route element = {<DoctorEdit/>} path='/updatedoctor/:id' errorElement = {<ErrorPage/>}/>
					
					{/* Patients related pages*/}
					<Route element = {<Patients/>} path='/patients' errorElement = {<ErrorPage/>}/>
					<Route element = {<InPatientRegistration/>} path = '/createinpatient/:room_id' errorElement = {<ErrorPage/>}/>
					<Route element = {<RoomAllocation/>} path='/allocation' errorElement = {<ErrorPage/>}/>

					{/* Appointment related pages*/}
					<Route element = {<Appointments/>} path='/appointments' errorElement = {<ErrorPage/>}/>
					<Route element = {<AppointmentRegistration/>} path = '/createappointment' errorElement = {<ErrorPage/>}/>

					{/* Treatment related pages */}
					<Route element = {<Treatments/>} path = '/treatments' errorElement = {<ErrorPage/>}/>
					<Route element = {<AddTreatment/>} path = '/addtreatment' errorElement = {<ErrorPage/>}/>

				</Routes>
		  	</BrowserRouter>
        </div>
  )
}

export default App
