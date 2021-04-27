// import logo from './logo.svg';
import './App.css';
import Button  from './componentes/Button/Button';
import ControlPanel from './componentes/ControlPanel/ControlPanel';
import Header from './componentes/Header/Header';
import TodoList from './componentes/ToDoList/Todolist';
import './styles/global.css';
import styles from './styles/app.module.css'

function Mensagem(props) {
  console.log(props);
  const conteudo = 'Brasil';
  return (
    <h2 className={styles.mensagem}>Bom dia, meu povo do {conteudo}!</h2>
  )
}

function App() {
  return (
    <div className="App">
      <Header />
      <TodoList />
      <Mensagem frase={'Olá, meu povo!'}/>
      <ControlPanel />
      <Button />
    </div>
  );
}

export default App;

// Duas formas de criar componente: função e classe 
// Classe usa o método render
// Props - forma de passar parâmetro pra função no React