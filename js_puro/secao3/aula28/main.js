// Operação ternária 
//  ? :
// ? == true
// : == false


const pontuacaoUsuario = 999;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';

const corUsuario = 'Azul';
const corPadrao = corUsuario || 'Verde'

console.log(nivelUsuario, corPadrao);

// if (pontuacao >= 1000) {
//     console.log('Usuário VIP');
// } else {
//     console.log('Usuário normal');
// }

