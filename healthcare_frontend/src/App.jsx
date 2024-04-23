import './App.css';
import LoginPage from './pages/LoginPage';
import {Route, Routes} from 'react-router-dom';;
import { NavigationBar } from './components/NavigationBar';
import RequireAuth from './components/RequireAuth';
import Layout from './components/Layout';

function App() {

  return (
      <Routes>
        <Route path = "/" element = {<Layout/>}>

          <Route path = "login" element = { <LoginPage/>}/>
          <Route path = "dashboard" element = { <NavigationBar/>}/>

        </Route>
      </Routes>
  )
}

export default App
