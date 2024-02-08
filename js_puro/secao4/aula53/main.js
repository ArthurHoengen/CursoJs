// Retorno da função - return
// Retorna um valor e termina a função

function soma(a, b) {
  return a + b;
}

function soma2(a, b) {
  console.log(a + b);
}

soma2(2, 5);

// document.addEventListener("click", function () {
//   document.body.style.backgroundColor = "red";
// });

function CriaPessoa(nome, sobrenome) {
  return { nome, sobrenome };
}

const p1 = CriaPessoa("Arthur", "Hoengen");
const p2 = { nome: "João", sobrenome: "Silva" };

console.log(typeof p1);
console.log(typeof p2);

function falaFrase(comeco) {
  function falaResto(resto) {
    return comeco + " " + resto;
  }
  return falaResto;
}

const fala = falaFrase("Olá");
const resto = fala("mundo!");

console.log(resto);

// Função closure:

function criaMultiplicador(multiplicador) {
  // multiplicador
  return function (n) {
    return n * multiplicador;
  };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(quadriplica(16));
console.log(triplica(16));
console.log(duplica(16));
