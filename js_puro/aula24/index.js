/* Avaliação de curto-circuito
&& -> false && true -> false "o valor mesmo"
|| -> true || false -> vai retornar "o valor verdadeiro"
Se passar por todas, retorna o último


FALSY
*false
0
'' "" ``
null / undefined
NaN
*/

// &&:

console.log('Luiz' && NaN && 'Maria');

function falaOi (){
    return 'Oi';
}

const vaiExecutar = false;

console.log(vaiExecutar && falaOi());

// ||:

console.log(0 || false || null || 'Arthur Hoengen' || true);

const corUsuario = 'vermelho';
const corPadrao = corUsuario || 'preto';

console.log(corPadrao);
