// Funções imediatas (IIFE)
// IIFE -> Immediately invoked function expression

// function qualquerCoisa() {
//   console.log(12312321321);
// }
// qualquerCoisa(); // Assim a função toca o escopo global

// IIFE:

(function (idade, peso, altura) {
  const nome = "Arthur";
  function criaNome(sobrenome) {
    return nome + " " + sobrenome;
  }

  function falaNome() {
    console.log(criaNome("Hoengen"));
  }

  falaNome();
})(20, 90, 1.84);
