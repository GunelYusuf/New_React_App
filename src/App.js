import React from 'react';
import './App.css';
import ClassTest,{TestClass} from './ClassTest';
import { Users } from './components/Users';
import { UsersList } from './components/UsersList';
import { WeatherData } from './components/Weather';
import { Counter } from './Counter';

const userInitialValue = [
{
     name: 'Gunel',
     surname: 'Yusubova',
     age: 26,
     email: 'gunelfy@code.edu.az'
   },
   {
     name: 'Sabina',
     surname: 'Quliyeva',
     age: 26,
     email: 'bduqafqaz@mail.ru'
   },
   {
     name: 'Arslan',
     surname: 'Aliyev',
     age: 18,
     email: 'arslana@gmail.com'
   },
    {
     name: 'Emil',
     surname: 'Khalilov',
     age: 27,
     email: 'emilkh@gmail.com'
   }
]

function App() {
  const user={
    name: 'Gunel',
    lastName: 'Yusubova',
    age:26
  }
 const weather={
   city:'Baku',
   degree:1,
   unit:'Celcium'
 }

const [users,setUsers] = React.useState(userInitialValue)
const handleUserdeletion = (email) =>{
  setUsers(oldUsers => oldUsers.filter(oldUsers => oldUsers.email !== email));
}
  return (
    <div className="App">
      <header className="App-header">
      
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
         <Counter/>
         <UsersList onUserDelete={handleUserdeletion} users={users}/>
        <Users {...user}/>
        <WeatherData {...weather}>
          <p>some children</p>
        </WeatherData>
        <ClassTest/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
