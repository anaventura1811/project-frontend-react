


export function helloWorld (name, lastName) {
  let nome = name;
  let sobrenome = lastName;
  nome = 'Ana';
  sobrenome = 'Ventura';
  return (<h1>Hello, {`${nome} ${sobrenome}`}</h1>);
}