let nome = 'João';

console.log(nome, 'nasceu em 1984');
console.log('Em 2000', nome, 'conheceu Maria.');
console.log(nome, 'casou-se com Maria em 2012.');
console.log('Maria teve 1 filho com', nome, 'em 2015.');
console.log('O filho de', nome, 'se chama Eduardo.');

let variavel; // Declarou a variável
variavel = 'Qualquer valor'; // Inicializando a variável
console.log(variavel);
variavel = 'Outro valor';
console.log(variavel);

//let variavel; NÃO SE CRIA VARIÁVEIS 2 VEZES

//Não podemos criar variáveis com palavras reservadas
//let if;

//Variáveis precisam ter nomes significativos

let n; // n não é significativo
let nomeCliente; // é significativo

// Não pode começar o nome de uma variável com um número
// let 1nome; ERRADO
// let nome; CERTO

// Não podem conter espaços ou traços
// let nome-Cliente; ou let nome Cliente; ERRADOS
// Nesses casos, use camelCase
let nomeCompletoDoCliente

// Todas as variáveis são Case-sensitive

let primeiraVariavel = 'Valor qualquer 1';
let primeiravariavel = 'Outro valor qualquer';

console.log(primeiraVariavel, primeiravariavel);

//NÃO UTILIZE VAR, UTILIZE LET