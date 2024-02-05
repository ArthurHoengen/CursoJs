//As várias maneiras de declarar funções em JavaScript

// Declaração de função com function (Function hoisting)
// hoisting = quando algo é elevado.

function falaOi() {
  console.log("Oi!");
}

falaOi();

// First-class objects (Objetos de primeira calsse)

//Function expression:
const souUmDado = function () {
  console.log("Sou um dado.");
};

function executaFuncao(funcao) {
  funcao();
}

executaFuncao(souUmDado);

// Arrow function

const arrowFunction = () => {
  console.log("Sou uma arrow function");
};
arrowFunction();

// Dentro de um objeto

const obj = {
  falar() {
    console.log("Estou falando...");
  },
};

obj.falar();
