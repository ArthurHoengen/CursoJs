// Conseguir a data
const date = new Date();

const diaDaSemana = diaEmString(date.getDay());
const diaDoMes = date.getDate();
const mes = mesEmString(date.getMonth());
const ano = date.getFullYear();

// Conseguir a hora
const hora = zeroAEsquerda(date.getHours());
const minuto = zeroAEsquerda(date.getMinutes());

// Resposta do exercício
const dataCompleta = `${diaDaSemana}, ${diaDoMes} de ${mes} de ${ano}\n${hora}:${minuto}`;

// Colocar na tela
const h1 = document.querySelector("h1");
h1.innerText = dataCompleta;

//Formatar o dia da semana
function diaEmString(dia) {
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
function mesEmString(mes) {
  let stringMes;
  switch (mes) {
    case 0:
      stringMes = "janeiro";
      return stringMes;
    case 1:
      stringMes = "fevereiro";
      return stringMes;
    case 2:
      stringMes = "março";
      return stringMes;
    case 3:
      stringMes = "abril";
      return stringMes;
    case 4:
      stringMes = "maio";
      return stringMes;
    case 5:
      stringMes = "junho";
      return stringMes;
    case 6:
      stringMes = "julho";
      return stringMes;
    case 7:
      stringMes = "agosto";
      return stringMes;
    case 8:
      stringMes = "setembro";
      return stringMes;
    case 9:
      stringMes = "outubro";
      return stringMes;
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
