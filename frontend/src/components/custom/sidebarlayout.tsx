import { Outlet } from 'react-router-dom';
import SideNav from './sidenav'; 

const SidebarLayout = () => {
  return (
    <div className="h-screen w-screen">
        <SideNav /> 
        <div className="ml-[220px]">
            <Outlet />
        </div>
    </div>  
  );
}

export default SidebarLayout;