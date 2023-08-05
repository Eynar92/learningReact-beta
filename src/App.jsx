import './App.css'
import Button from './components/Button';
import Gretting from './components/Gretting'
import TitlePropsDefault from './components/TitlePropsDefault';
import Users from './components/Users';
import USERS_DATA from './data/users.json'

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

      <Gretting title="I've Children Props">
        <hr />
        <p><strong>I'm a children tag</strong></p>
        <Button buttonTitle={`I'm a comoponent inside another component`} />
      </Gretting>

      <Users usersData={USERS_DATA} />

      <TitlePropsDefault />
      <TitlePropsDefault titlePropsDefault='We are working with Default Props' />

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
