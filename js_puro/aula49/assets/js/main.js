const relogio = document.querySelector(".relogio");
const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const zerar = document.querySelector(".zerar");

let segundos = 0;

let date = new Date(10800000);
const mostraHora = () => {
  return date.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
};

iniciar.addEventListener("click", function (event) {
  relogio.style.color = "black";
  timer = setInterval(function () {
    segundos++;
    date.setSeconds(segundos);
    relogio.innerText = mostraHora();
    if (segundos === 60) {
      segundos = 0;
    }
  }, 1000);
});

pausar.addEventListener("click", function (event) {
  clearInterval(timer);
  relogio.style.color = "red";
});

zerar.addEventListener("click", function (event) {
  relogio.style.color = "black";
  clearInterval(timer);
  date.setTime(10800000);
  segundos = 0;
  relogio.innerText = mostraHora();
});
