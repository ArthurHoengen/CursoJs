//For - clássico
// i é de index
for (let i = 0; i <= 5; i++) {
  console.log(`Linha ${i}`);
} // não tem ponto e virgula no final do for

// for (let i = 0; i <= 10; i++) {
//   const par = i % 2 === 0 ? "par" : "ímpar";
//   console.log(i, par);
// }

const frutas = ["Maçã", "Pêra", "Uva", "Morango", "Abacaxi"];

for (let i = 0; i < frutas.length; i++) {
  console.log(`Índice ${i}`, frutas[i]);
}
