/**
 * Você pode usar \ para escapar caracteres
 * para usar barra invertida, use \\
 * String são indexadas
 * .charAt() serve da mesma maneira de colocar o index
 * .concat() concatena strings
 * .indexOf() para achar palavras especificas, se passado um segundo argumento, é por qual index ele irá começar
 * .lastIndexOf() mesma coisa, mas começa de tras para frente
 * .match() para achar expressões regulares
 * .search() para achar o index, similar ao indexOf, mas aceita expressões regulares
 * .replace() troca uma palavra por outra, aceita expressões regulares
 * .lenght diz o tamanho da string
 * .slice(começo, fim) corta uma string. Se usar -, é a mesma coisa que pegar .lengh - começo
 * .substring é muito semelhante a slice
 * .split(caracter para divisão) divide a string em um array de strings
 * .toUpperCase() e .toLowerCase() deixar todo o texto em maiusculo e minusculo
 */

let umaString = 'O rato roue a roupa do rei de roma';

console.log(umaString.indexOf('texto'));
console.log(umaString.match(/[a-z]/g));
console.log(umaString.replace(/r/g, '#'));
console.log(umaString.split(' '));
