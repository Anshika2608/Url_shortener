import './App.css'
import InputComponent from './Components/InputCompo';
import ParticlesComponent from './Components/ParticlesBack';
import logo from "./assets/logo.png"
function App() {
  return (
    <>
    <div className='App'>
      <ParticlesComponent id="particles"/>
      {/* <img src={logo} className='h-28 w-56 z-10'/> */}
      <div >
      <img src={logo} className='h-28 w-56 z-10 '/>

        <div className='flex justify-center items-center w-full h-screen -mt-44'>
        <InputComponent/>

        </div>
      </div>
    </div>
    </>
  )
}

export default App
