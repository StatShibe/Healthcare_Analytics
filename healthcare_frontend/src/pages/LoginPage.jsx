import LoginForm from "../components/LoginForm";
import cardiogramIcon from "../assets/images/electrocardiogram.svg" 
//import cardiogramIcon2 from "./assets/images/electroheart.svg"

const LoginPage = () => {

   

    return(
        <div className="flex w-full h-screen bg-[url('./assets/images/loginbackground.png')] bg-auto">
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <LoginForm/>
      </div>
      <div className='hidden relative lg:flex h-full w-1/2 items-center justify-center'>
        <div className='w-60 h-60 bg-gradient-to-tr from-violet-950 to-blue-400 rounded-full'>
          <img src={cardiogramIcon} alt='Some symbol' className='w-70 h-70 animate-pulse'/>
        </div>
      </div>
    </div>
    )
}

export default LoginPage;