import React from 'react';



function Pessoa(props) {

  const { nome, idade, frase, foto } = props;

  return (
    <section>
      <p>Nome: {nome}</p>
      <p>Idade: {idade}</p>
      <p>Frase: {frase}</p>
      <div>Foto de perfil: 
        <img src={foto} width={200} alt="imagem da pessoa"/>
    </div>
    </section>
  )
}

export default Pessoa;