import logo from './logo.svg';
import './App.css';
import ClassTest,{TestClass} from './ClassTest';

const Text = () => {
  return <p>Gunel is Software Developer</p>
}
function App() {
  const name='Gunel';
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {name}
        <Text/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
