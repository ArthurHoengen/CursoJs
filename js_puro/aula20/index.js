// Valores primitivos e valores por referência

/*
Primitivos (imutáveis) - string, numver, boolean, undefined, 
null (bigint, symbol) - Valores copiados

Referência (mutável) - array, object, function - Passados por referência 
*/

let a = [1, 2, 3];
// let b = a; // Passado por referência
let b = [...a]; // Copiado
console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);

// let a = 'A';
// let b = a; // Cópia
// console.log(a,b);

// a = 'Outra coisa';
// console.log(a,b);

// imutável
// let nome = 'Luiz';
// nome[0] = 'R';
// console.log(nome[0], nome);