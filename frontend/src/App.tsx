import './App.css'
import SidebarLayout from './components/custom/sidebarlayout';
import Dashboard from './pages/Dashboard';
import DoctorDetails from './pages/Doctors/DoctorDetails';
import LoginPage from './pages/LoginPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PatientDetails from './pages/Patients/PatientDetails';

function App() {

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route element={<SidebarLayout />}>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/doctordetails" element={<DoctorDetails/>}/>
                    <Route path = "/patientdetails" element={<PatientDetails/>}/>
                </Route>
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
