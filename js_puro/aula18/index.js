// Funções (Básico)

function soma(x = 1,y = 1){ // colocar um valor nos atributos faz com que eles ja sejam iniciados
    const resultado = x + y; // resultado está no escopo da função
    return resultado; // tudo que está abaixo de return não é executado
}

console.log(soma(123, 3));

// const raiz = function (n) {
//     return n ** 0.5
// };

// const raiz = n => n**0.5;

// console.log(raiz(9));

// function saudacao(nome) {
//     return `Bom dia ${nome}!`;
// }

// const variavel = saudacao('Arthur');
// console.log(variavel);