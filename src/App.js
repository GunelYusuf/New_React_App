import './App.css';
import ClassTest,{TestClass} from './ClassTest';
import { Users } from './components/Users';
import { WeatherData } from './components/Weather';



function Avatar(props){
  return(
     <img 
     src={props.user.AvatarUrl} 
     alt={props.user.name} />
  )
}

function UserInfo(props){
  return(
      <div className='UserInfo'>
       <Avatar user={props.user}/>
        <div className='User-Info-name'>
          {props.user.name}
        </div>
     </div>
  )
}

function Comment(props) {
  return (
    <div className='Comment'>
      <UserInfo user={props.author} />
      <div className='Comment-text'>
        {props.text}
      </div>
      <div className='Comment-date'>
        {formatDate(props.date)}
      </div>
    </div>
  );
}

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
