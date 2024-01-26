// Conseguir a data
function criaData(date) {
  const nomeDia = getNomeDia(date.getDay());
  const diaDoMes = date.getDate();
  const nomeMes = getNomeMes(date.getMonth());
  const ano = date.getFullYear();

  // Conseguir a hora
  const hora = zeroAEsquerda(date.getHours());
  const minuto = zeroAEsquerda(date.getMinutes());

  // Resposta do exercício
  return `${nomeDia}, ${diaDoMes} de ${nomeMes} de ${ano} \n${hora}:${minuto}`;
}

// Colocar na tela
const h1 = document.querySelector(".container h1"); //*
h1.innerText = criaData(new Date());

//Formatar o dia da semana
function getNomeDia(dia) {
  const dias = [
    "domingo",
    "segunda-feira",
    "terça-feira",
    "quarta-feira",
    "quinta-feira",
    "sexta-feira",
    "sábado",
  ];
  return dias[dia];
}

//Formatar o mês
function getNomeMes(mes) {
  const meses = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ];
  return meses[mes];
}

function zeroAEsquerda(tempo) {
  return tempo >= 10 ? tempo : `0${tempo}`;
}
