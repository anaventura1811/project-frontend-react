import React from 'react';
import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';
import styles from './header.module.css';

function Header() {
  const currentDate = format(new Date(), 'EEEEEE, d MMMM yyyy', {
    locale: ptBR,
  })
  return (
    <header className={styles.header}>
      <h1>Minha Lista de Tarefas</h1>
      <span>{currentDate}</span>
    </header>
  )
}

export default Header;