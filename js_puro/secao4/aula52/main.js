// Parâmetros da função

function funcao() {
  let total = 0;
  for (let argument of arguments) {
    total += argument;
  }
  console.log(total);
  console.log(arguments); // e todos os valores passados vem para "arguments"
}
funcao(1, 2, 3, 4, 5, 6, 7); //não da erro

//ARGUMENTS SÓ FUNCIONA USANDO A PALAVRA FUNCTION

function funcao2(a, b, c, d, e, f) {
  console.log(a, b, c, d, e, f);
}

funcao2(1, 2, 3, 4);

function funcao3(a, b = 4, c = 0) {
  console.log(a + b + c);
}
funcao3(4, undefined, 3); // undefined é o único jeito de fazer uma variável assumir o valor padrão
// mas não é muito adequado fazer isso

// Atribuição via desestruturação em funções:

function funcao4({ nome, sobrenome, idade }) {
  console.log(nome, sobrenome, idade);
}
// funcao4({nome:'Arthur', sobrenome:"Hoengen", idade: 20}) OU
const obj = { nome: "Arthur", sobrenome: "Hoengen", idade: 20 };
funcao4(obj);

function funcao5([valor1, valor2, valor3]) {
  console.log(valor1, valor2, valor3);
}
funcao5([1, 2, 3]); // ou poderia fazer um array dentro de uma variável e passar

const conta = function (operador, ...numeros) {
  let acumulador = 0;
  for (let numero of numeros) {
    if (operador === "+" || numero === numeros[0]) acumulador += numero;
    if (operador === "-") acumulador -= numero;
    if (operador === "/") acumulador /= numero;
    if (operador === "*") acumulador *= numero;
  }
  console.log(acumulador);
};

conta("-", 20, 30, 40, 50);

const arrowFunction = (num1, num2, num3) => {
  // console.log(arguments); arguments na arrow function é diferente
};
arrowFunction(1, 2, 3, 4, 5);
