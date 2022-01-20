import logo from './logo.svg';
import './App.css';
import ClassTest,{TestClass} from './ClassTest';

const Text = () => {
  return <p>Gunel is Software Developer</p>
}
function App() {
  const user={
      name: 'Gunel',
      lastName:'Yusubova',
      age:1
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      
        <Text/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ClassTest/>
        <p>The user is {user.name} {user.lastName} and is {user.age} {user.age > 1 ? 'years':'year'} old.</p>
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
