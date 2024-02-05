// For of = retorna o valor no indice

/**
 * For clásssico - Geralmente com iteráveis (array ou strings)
 * For in - Retorna o índice ou chave (string, array ou objetos)
 * For of - Retorna o valor em sí (iteráveis, arrays ou strings)
 */


const nomes = ['Arthur', 'Pedro', 'Caio', 'Jeff'];

// for (let i = 0; i < nome.length; i++) { // i = indice
//   console.log(nome[i]);
// }

// for (let i in nome) {   // i = indice
//   console.log(nome[i]);
// }

for(let i of nomes) { // i = valor do indice
    console.log(i);
}

console.log('########')

nomes.forEach(function(valor, indice, array) {
    console.log(valor, indice, array);
});