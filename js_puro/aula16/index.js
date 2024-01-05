//Objeto Math

/**
 * Math.floor() -> arredonda para baixo
 * Math.ceil() -> arredonda para cima
 * Math.round() -> arredonda para o inteiro mais próximo
 * Math.max(num1,num2,num3) -> pega o maior número
 * Math.min(num1,num2,num3) -> pega o menor número
 * Math.random() -> pega número aleatório
 */

let num1 = 9.5457882;
let num2 = Math.round(num1);

console.log(num2);
console.log(Math.max(1, 214, 123123, -123213, 0, 1232133232));
console.log(Math.min(1, 214, 123123, -123213, 0, 1232133232));

const aleatorio = Math.round(Math.random() * 5 + 5)

console.log(aleatorio)

console.log(100/0); //o javascript permite, e da Infinity