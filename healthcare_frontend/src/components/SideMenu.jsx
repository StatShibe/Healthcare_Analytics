import { useEffect, useState } from 'react';
import SideNavBar, { SideBarItem } from '../components/SideNavBar';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import Cookie from 'js-cookie';

function SideMenu() {
	const [auth, setAuth] = useState(Cookie.get('jwt'));
	const [authButton, setAuthButton] = useState(auth? 'Log Out': 'Log In');
	const navigate = useNavigate();
	const handleAuth = async(e) =>{
		e.preventDefault();
		if(auth){
			await axios.post(import.meta.env.VITE_SERVER_URL+'/auth/logout',{},{withCredentials:true}).then((response)=>{
				console.log(response.data);
			});
			setAuth(Cookie.get('jwt'));
			setAuthButton(auth? 'Log Out': 'Log In');
			navigate('/');
		}else{
			navigate('/login');
		}
	}


  return (
      <>
        <div>
        	<SideNavBar>
        	  <SideBarItem text = "Dashboard"/>
        	  <SideBarItem text = "Allocation"/>
        	  <SideBarItem text = "Patients"/>
        	  <SideBarItem text = "Doctors"/>
        	  <SideBarItem text = "Appointments"/>
			  <div onClick={handleAuth}>
			  	<SideBarItem text = {authButton}/>
			  </div>
        	</SideNavBar>
        </div>
      </>
  )
}

export default SideMenu
