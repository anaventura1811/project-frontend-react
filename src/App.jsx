// import logo from './logo.svg';
import './App.css';
import Button  from './componentes/Button/Button';
import ControlPanel from './componentes/ControlPanel/ControlPanel';
import Header from './componentes/Header/Header';
import TodoList from './componentes/ToDoList/Todolist';
import './styles/global.css';
// import styles from './styles/app.module.css'
import Mensagem from './componentes/Mensagem/Mensagem';
import Pessoa from './componentes/Pessoa/Pessoa';

function App() {
  return (
    <div className="App">
      <Header />
      <TodoList />
      <Mensagem conteudo={'Olá, meu povo!'}/>
      <Pessoa 
      nome={'Ana'}
      idade={30}
      frase={'Lugar de mulher é onde ela quiser'}
      foto={'https://www.einerd.com.br/wp-content/uploads/2019/08/Tio-Ben-poss%C3%ADvel-nova-morte-capa.jpg'}
      />
      <ControlPanel />
      <Button />
    </div>
  );
}

export default App;

// Duas formas de criar componente: função e classe 
// Classe usa o método render
// Props - forma de passar parâmetro pra função no React