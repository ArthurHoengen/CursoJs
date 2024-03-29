// Filter + Map + Reduce

//Retorne a soma do dobro de todos os pares
// -> Filtrar pares
// -> Dobrar os valores
// -> Reduzir (somar tudo)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosPares = numeros.filter((valor) => valor % 2 === 0);
const dobro = numerosPares.map((valor) => valor * 2);
const soma = dobro.reduce((acumulador, valor) => (acumulador += valor));
console.log(soma);

// OU

const somaDoDobroDosPares = numeros
  .filter((valor) => valor % 2 === 0)
  .map((valor) => valor * 2)
  .reduce((acumulador, valor) => (acumulador += valor));
console.log(somaDoDobroDosPares);
