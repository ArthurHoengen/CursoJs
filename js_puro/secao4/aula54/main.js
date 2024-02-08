// Escopo léxico

/* A função conhece o local aonde ela foi declarada,
 * tudo o que está declarado dentro dela e os vizinhos dela
 */

const nome = "Arthur";

function falaNome() {
  const nome = "Caio";
  console.log(nome);
}

function usaFalaNome() {
  falaNome();
}

usaFalaNome();
