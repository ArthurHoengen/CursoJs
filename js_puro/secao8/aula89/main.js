// Promises

function rand(min, max) {
  max *= 1000;
  min *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function espera(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") reject("BAD VALUE");
    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}

espera("Frase 1", rand(1, 3))
  .then((resposta) => {
    console.log(resposta);
    return espera(2, rand(1, 3));
  })
  .then((resposta) => {
    console.log(resposta);
    return espera("Frase 3", rand(1, 3));
  })
  .then((resposta) => {
    console.log(resposta);
  })
  .then(() => console.log("Eu serei o último"))
  .catch((e) => {
    console.log("Erro:", e);
  });

console.log("Isso será exibido antes de qualquer promisse");
