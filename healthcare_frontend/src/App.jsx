import './App.css';
import LoginPage from './pages/LoginPage';
import {Route, Routes} from 'react-router-dom';;
import { DashBoard } from './components/DashBoard';
import RequireAuth from './components/RequireAuth';
import Layout from './components/Layout';

function App() {

  return (
      <Routes>
        <Route path = "/" element = {<Layout/>}>

          <Route path = "login" element = { <LoginPage/>}/>

          <Route element = {<RequireAuth />}>
            <Route path = "dashboard" element = { <DashBoard/>}/>
          </Route>

        </Route>
      </Routes>
  )
}

export default App
