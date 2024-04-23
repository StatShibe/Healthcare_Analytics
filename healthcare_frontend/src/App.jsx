import './App.css';
import LoginPage from './pages/LoginPage';
import {Route, Routes} from 'react-router-dom';;
import DashboardPage from './pages/DashboardPage';
import Layout from './components/Layout';

function App() {

  return (
      <Routes>
        <Route path = "/" element = {<Layout/>}>

          <Route path = "login" element = { <LoginPage/>}/>
          <Route path = "dashboard" element = { <DashboardPage/>}/>

        </Route>
      </Routes>
  )
}

export default App
