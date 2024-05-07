import SideNavBar, { SideBarItem } from '../components/SideNavBar';

function SideMenu() {

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
        </div>
      </>
  )
}

export default SideMenu
