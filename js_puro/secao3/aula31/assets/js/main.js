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
  let diaSemanaTexto;
  switch (dia) {
    case 0:
      diaSemanaTexto = "domingo";
      return diaSemanaTexto;
    case 1:
      diaSemanaTexto = "segunda-feira";
      return diaSemanaTexto;
    case 2:
      diaSemanaTexto = "terça-feira";
      return diaSemanaTexto;
    case 3:
      diaSemanaTexto = "quarta-feira";
      return diaSemanaTexto;
    case 4:
      diaSemanaTexto = "quinta-feira";
      return diaSemanaTexto;
    case 5:
      diaSemanaTexto = "sexta-feira";
      return diaSemanaTexto;
    case 6:
      diaSemanaTexto = "sábado";
      return diaSemanaTexto;
    default:
      diaSemanaTexto = "";
      return diaSemanaTexto;
  }
}

//Formatar o mês
function getNomeMes(mes) {
  let nomeMes;
  switch (mes) {
    case 0:
      nomeMes = "janeiro";
      return nomeMes;
    case 1:
      nomeMes = "fevereiro";
      return nomeMes;
    case 2:
      nomeMes = "março";
      return nomeMes;
    case 3:
      nomeMes = "abril";
      return nomeMes;
    case 4:
      nomeMes = "maio";
      return nomeMes;
    case 5:
      nomeMes = "junho";
      return nomeMes;
    case 6:
      nomeMes = "julho";
      return nomeMes;
    case 7:
      nomeMes = "agosto";
      return nomeMes;
    case 8:
      nomeMes = "setembro";
      return nomeMes;
    case 9:
      nomeMes = "outubro";
      return nomeMes;
    case 10:
      mes = "novembro";
      return mes;
    case 11:
      mes = "dezembro";
      return mes;
    default:
      return "";
  }
}

function zeroAEsquerda(tempo) {
  return tempo >= 10 ? tempo : `0${tempo}`;
}
