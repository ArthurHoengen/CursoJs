// Atribuição via desestruturação
/// ... rest, ... spread
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [um, , tres, , cinco, , sete, , nove] = numeros;
/// const [um, dois, ...resto] = numeros;
console.log(um, tres, cinco);

//                          0          1          2
//                       0, 1, 2    0, 1, 2    0, 1, 2
const listaComplexa = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
//const [, [, , seis]] = listaComplexa; meio estranho
const [lista1, lista2, lista3] = listaComplexa;
console.log(lista3);
