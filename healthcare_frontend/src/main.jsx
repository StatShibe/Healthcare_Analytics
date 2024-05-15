import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
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

const router = createBrowserRouter([
	{
		path : "/",
		element : <App/>,
		errorElement : <ErrorPage/>
	},
	{
		path : "login",
		element : <LoginPage/>,
		errorElement : <ErrorPage/>
	},
	{
		path : "dashboard",
		element : <DashboardPage/>,
		errorElement : <ErrorPage/>
	},
	{
		path : "allocation",
		element : <RoomAllocation/>,
		errorElement : <ErrorPage/>
	},
	{
		path : "patients",
		element : <Patients/>,
		errorElement : <ErrorPage/>
	},
	{
		path : "doctors",
		element : <Doctors/>,
		errorElement : <ErrorPage/> 
	},
	{
		path : "appointments",
		element : <Appointments/>,
		errorElement : <ErrorPage/>
	},{
		path : "createuser",
		element : <UserRegistration/>,
		errorElement : <ErrorPage/>
	},{
		path : "insertdoctor",
		element : <DoctorDataInsert/>,
		errorElement : <ErrorPage/>
	},{
		path : "createinpatient",
		element : <InPatientRegistration/>,
		errorElement : <ErrorPage/>
	}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router = {router}/>
	</React.StrictMode>
)
