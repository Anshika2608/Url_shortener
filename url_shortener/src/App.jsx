import './App.css'
import InputComponent from './Components/InputCompo';
import ParticlesComponent from './Components/ParticlesBack';
import { ToastContainer, toast } from 'react-toastify';

import logo from "./assets/logo.png"
function App() {
  return (
    <>
    <div className='App'>
      <ParticlesComponent id="particles" />
      <div >
      <img src={logo} className='h-28 w-56 z-10 '/>

        <div className='flex justify-center items-center  h-screen -mt-36'>
        <InputComponent/>
        </div>
      </div>
       <ToastContainer className="z-100"/>

    </div>
    </>
  )
}

export default App
