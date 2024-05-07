import './App.css';
import  NavigationBar from './components/NavigationBar';
import SideNavBar, { SideBarItem } from './components/SideNavBar';

function App() {

  return (
      <>
        <div>
        <SideNavBar>
          <SideBarItem text = "Dashboard"/>
          <SideBarItem text = "Allocation"/>
          <SideBarItem text = "Patients"/>
          <SideBarItem text = "Doctors"/>
          <SideBarItem text = "Appointments"/>
        </SideNavBar>
          <h1>Landing Page</h1>
        </div>
      </>
  )
}

export default App
