// import logo from './logo.svg';
import './App.css';
import Button  from './componentes/Button/Button';
import ControlPanel from './componentes/ControlPanel/ControlPanel';
import Header from './componentes/Header/Header';
import TodoList from './componentes/ToDoList/Todolist';
import './styles/global.css';

function App() {
  return (
    <div className="App">
      <Header />
      <TodoList />
      <ControlPanel />
      <Button />
    </div>
  );
}

export default App;

// Duas formas de criar componente: função e classe 