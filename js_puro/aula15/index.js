// Mais sobre numbers

// IEEE 754-2008
let num1 = 0.7;
let num2 = 0.1;

num1 += num2; //0.8
num1 += num2; //0.9
num1 += num2; //1.0


num1 = parseFloat(num1.toFixed(2));

// Outra opção é não trabalhar com numeros com ponto flutuante
// multiplicando por cem e depois dividindo por 100

console.log(num1);
console.log(Number.isInteger(num1));
// console.log(num1.toString() + num2);
// num1 = nu1.toString();
// console.log(num1.toString(2)); MOSTRA O BINÁRIO DO NÚMERO
// console.log(num1.toFixed(2)); FORMATA O NÚMERO
// console.log(Number.isInteger(num1)); MOSTRA SE O NÚMERO É INTEIRO
// console.log(Number.isNaN(temp)); VERIFICA SE O NÚMERO É UM NaN
 
