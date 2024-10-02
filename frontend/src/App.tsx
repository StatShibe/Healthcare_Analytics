import './App.css'
import SidebarLayout from './components/custom/sidebarlayout';
import Dashboard from './pages/Dashboard';

import LoginPage from './pages/LoginPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import DoctorList from './pages/Doctors/DoctorList';
import AddDoctors from './pages/Doctors/AddDoctors';

import PatientList from './pages/Patients/PatientList';
import AddPatients from './pages/Patients/AddPatients';

import AppointmentsDisplay from './pages/Appointments/AppointmentsDisplay';
import TreatmentDisplay from './pages/Treatments/TreatmentsDisplay';

function App() {

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route element={<SidebarLayout />}>
                    <Route path="/" element={<Dashboard />} />

                    <Route path="/doctordetails" element={<DoctorList/>}/>
                    <Route path = "/insertdoctor" element = {<AddDoctors/>}/>

                    <Route path = "/patientdetails" element={<PatientList/>}/>
                    <Route path = "/insertpatient" element={<AddPatients/>}/>

                    <Route path = "/appointments" element={<AppointmentsDisplay/>}/>
                    <Route path = "/treatments" element = {<TreatmentDisplay/>}/>

                </Route>
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
