// Tratando e lançando erros (try, catch, throw)

// Nunca mostre o erro inteiro pro usuário final

function soma(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new TypeError("x e y precisam ser números");
  }
  return x + y;
}

try {
  console.log(soma(1, 67));
  console.log(soma(1, "a"));
} catch (e) {
  //console.log(e);
  console.log("Alguma coisa mais amigável pro usuário.");
}
