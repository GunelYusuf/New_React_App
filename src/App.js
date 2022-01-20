import './App.css';
import ClassTest,{TestClass} from './ClassTest';
import { Users } from './components/Users';
import { WeatherData } from './components/Weather';
import { Counter } from './Counter';



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
  return (
    <div className="App">
      <header className="App-header">
      
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
         <Counter/>
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
