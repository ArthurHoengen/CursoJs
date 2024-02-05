// Escreva uma função que recebe 2 números e retorne o maior deles

function max(num1, num2) {
  return num1 > num2 ? num1 : num2; // Meu jeito
}

const max2 = (x, y) => (x > y ? x : y); // Com arrow function

console.log(max(5, 12));
