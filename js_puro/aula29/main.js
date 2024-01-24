//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date
// const tresHoras = 60 * 60 * 3 *1000;
// const umDia = 1000 *60 *60 *24
// const data = new Date(0 + umDia + tresHoras); // 01/01/1970 Timestamp unix ou época unix

//                      ano  mes dia h   m   s   ms
//const data = new Date(2019, 3, 20, 15, 14, 27, 500); // meses vão de zero a 12
// const data = new Date('2024-01-24 15:00:00');
// console.log('Dia', data.getDate());
// console.log('Mês', data.getMonth());
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('Min', data.getMinutes());
// console.log('Seg', data.getSeconds());
// console.log('Ms', data.getMilliseconds());
// console.log('Dia da semana', data.getDay());
// console.log(Date.now()) // contagem da timestamp unix até agora

// console.log(data.toString());

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = zeroAEsquerda (data.getDate());
    const mes = zeroAEsquerda (data.getMonth() + 1);
    const ano = zeroAEsquerda (data.getFullYear());
    const hora = zeroAEsquerda (data.getHours());
    const min = zeroAEsquerda (data.getMinutes());
    const seg = zeroAEsquerda (data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);