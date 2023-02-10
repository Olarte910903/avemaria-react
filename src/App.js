import logo from './logo.svg';
import './App.css';

function Calcular(num1, num2){
  const nombre ="es mayor";
  const nombre2 = "es menor"
  if (num1 > num2){
    return nombre;
  }else{
    return nombre2;
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>{Calcular(5,8)}</p>
      </header>
    </div>
  );
}

export default App;
