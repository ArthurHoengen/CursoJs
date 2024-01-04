// Operadores aritméticos,  de atribuição e incremento

/**
 * Aritméticos:
 * + Adição / Concatenação
 * ** Potenciação
 * % Resto da divisão
 * 
 * Ordem de precedência:
 * ()
 * **
 * * / %
 * + -
 */


// Operadosres de incremento e decremento:
// Tendo o pré incremento e o pós incremento.
let contador = 1;
contador++; // 2  Quando o ++ é colocado antes, primeiro ele faz a conta e depois retorna o valor
contador++; // 3
++contador; // 4  No caso do ++ ser colocado depois, ele mostra o valor depois faz o ingremento
++contador; // 5
console.log(++contador);
--contador;
contador--;

// Operadores de atribuição:

contador += 10;
contador -= 10;
contador *= 3;
contador /= 3;
contador **= 2;
contador %= 5;

console.log(contador)

// NaN - Not a Number
// métodos de resolver:
// parseInt (inteiro), parseFloat(decimais), Number 
const num1 = 10;
let num2 = 'sla';
console.log(num1 * num2);
// javascript sendo estranho:
num2 = '5';
console.log(num1 * num2);
num2 = Number('5');
console.log(num1 + num2);
