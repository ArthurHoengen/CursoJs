// Métodos úteis para Promises

function rand(min, max) {
  max *= 1000;
  min *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function espera(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") {
      reject("BAD VALUE");
      return;
    }
    setTimeout(() => {
      resolve(msg.toUpperCase() + "- Passei na promise");
    }, tempo);
  });
}

// Promise.all Promise.race Promise.resolve Promise.reject

const promises = [
  espera("Promise 1", rand(1, 5)),
  espera("Promise 2", rand(1, 5)),
  espera("Promise 3", rand(1, 5)),
  //espera(2, 0.5),
];

Promise.all(promises) // Resolve todas as promises
  .then((valor) => console.log(valor))
  .catch((e) => console.log(e));

Promise.race(promises) // Retorna a Promise mais rapida
  .then((valor) => console.log(valor))
  .catch((e) => console.log(e));

function baixaPagina() {
  const emCache = true;

  if (emCache) {
    return Promise.resolve("Página em cache"); // Entrega uma promessa resolvida
    // return Promise.reject("Página em cache"); // Entrega uma prommessa rejeitada
  }
  return espera("Baixei a página", 3000);
}

baixaPagina()
  .then((dadosPagina) => console.log(dadosPagina))
  .catch((e) => console.log("Erro", e));
