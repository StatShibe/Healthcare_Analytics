import './App.css'
import LoginForm from './components/LoginForm'
import cardiogramIcon from "./assets/images/electrocardiogram.svg" 

function App() {

  return (
    <div className="flex w-full h-screen bg-[url('./assets/images/loginbackground.png')] bg-auto">
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <LoginForm/>
      </div>
      <div className='hidden relative lg:flex h-full w-1/2 items-center justify-center'>
        <div className='w-60 h-60 bg-gradient-to-tr from-violet-950 to-red-600 rounded-full'>
          <img src={cardiogramIcon} alt='Some symbol' className='w-70 h-70 animate-pulse'/>
        </div>
      </div>
    </div>
  )
}

export default App
