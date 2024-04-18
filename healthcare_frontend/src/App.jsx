import './App.css';
import LoginPage from './pages/LoginPage';
import {Route, Routes, useNavigate, BrowserRouter as Router} from 'react-router-dom';;
import { DashBoard } from './components/DashBoard';

function App() {

  return (
      <Router>
        <Routes>
          <Route path = "/" element = { <LoginPage navigate = {useNavigate}/>}/>
          <Route path = "/dashboard" element = { <DashBoard navigate = {useNavigate}/>}/>
        </Routes>
      </Router>
  )
}

export default App
