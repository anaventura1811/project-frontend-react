// import logo from './logo.svg';
import './App.css';

// Isso é um componente - iniciado com letra maiuscula
function Hello() {
  return (
    <div>
      <h1>Hello World no React</h1>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Hello /> 
      <h2>{'Turma 10 | Tribo A'}</h2>
    </div>
  );
}

export default App;
