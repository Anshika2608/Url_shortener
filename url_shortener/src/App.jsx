import './App.css'
import InputComponent from './Components/InputCompo';
import ParticlesComponent from './Components/ParticlesBack';
// import ParticlesBackground from './Components/ParticlesBack';
function App() {
  return (
    <>
    <div className='App'>
      <ParticlesComponent id="particles"/>
      <div className='flex justify-center items-center w-full h-screen'>
        <InputComponent/>
      </div>
    </div>
     
    </>
  )
}

export default App
