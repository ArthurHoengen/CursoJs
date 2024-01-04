//Tipos de dados primitivos

const nome = 'Arthur'; // String
const nome1 = "Arthur"; // String
const nome2 = `Arthur`; // String
const num1 = 10; // Number
const num2 = 10.52; // Number
let nomeAluno; // undefined -> não aponta para local nenhum na memória
const sobrenomeAluno = null; // Nulo -> não aponta para local nenhum na memória

// null é utilizado explicitamente, o programador precisa que usa ele.
// undefined é quando a engine inicia uma variavel vazia

const boolean = true; // Boolean -> Só pode ser true ou false (lógico)

console.log(typeof nome, nome);
console.log(typeof num1, num1);
console.log(typeof nomeAluno, nomeAluno);
console.log(typeof sobrenomeAluno, sobrenomeAluno)
console.log(typeof boolean, boolean)
