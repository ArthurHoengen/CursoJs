// Reduce - Reduzindo o array

// Some todos os números (Reduce)
// Retorne um array com os pares (Filter)
// Retorne um array com o dobro dos valores (Map)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce((acumulador, valor) => (acumulador += valor));
const pares = numeros.reduce((acumulador, valor) => {
  if (valor % 2 === 0) {
    acumulador.push(valor);
  }
  return acumulador;
}, []);

const dobro = numeros.reduce((acumulador, valor) => {
  acumulador.push(valor * 2);
  return acumulador;
}, []);

console.log(total);
console.log(pares); // Prefira usar Filter nesses casos
console.log(dobro); // Prefira usar Map nesses casos

//Retorne a pessoa mais velha
const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Letícia", idade: 10 },
  { nome: "Rosana", idade: 64 },
  { nome: "Wallace", idade: 67 },
];

const pessoaMaisVelha = pessoas.reduce((acumulador, pessoa) => {
  if (pessoa.idade > acumulador.idade) return pessoa;
  return acumulador;
});
console.log(pessoaMaisVelha);
