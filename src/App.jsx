import './App.css'
import Saludo from './components/Saludo'


function App() {
  const age = 32;

  return (
    <>
      {age > 20 ? <Saludo /> : ""}
      {/* <Saludo />
      <Saludo />
      <Saludo />
      <Saludo />
      <Saludo />
      <Saludo /> */}
    </>
  )
}

export default App
