import styles from '../../styles/app.module.css'

function Mensagem(props) {
  console.log(props.conteudo);
  // const conteudo = 'Brasil';
  return (
    <h2 className={styles.mensagem}>{props.conteudo}</h2>
  )
}

export default Mensagem;