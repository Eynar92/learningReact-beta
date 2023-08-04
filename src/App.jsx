import './App.css'
import Gretting from './components/Gretting'


function App() {
  // const age = 32;

  const usersList = ['Nombre 1', 'Nombre 2', 'Nombre 3']
  const add = (n1, n2) => n1 + n2;

  return (
    <div>

      <Gretting
        title="Hola"
        phoneNumber="12345678"
        isBigger={true}
        number={2}
        users={usersList}
        add={add}
      />

      <Gretting
        title="Hello friend"
        phoneNumber="10101010"
        isBigger={false}
        number={2}
        users={usersList}
        add={add}
      />

      <Gretting
        title="Cómo es?"
      />

      {/* {age > 20 ? <Saludo /> : ""} */}
      {/* <Saludo />
      <Saludo />
      <Saludo />
      <Saludo />
      <Saludo />
      <Saludo /> */}
    </div>
  )
}

export default App
