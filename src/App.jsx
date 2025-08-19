import logo from '/logo.svg'
import './App.css'
import CalcForm from './components/Calc-form'


const App = ()=>{

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={logo} className="logo" alt="Vite logo" />
        </a>
        <CalcForm/>

      </div>
    </>
  )
}

export default App
