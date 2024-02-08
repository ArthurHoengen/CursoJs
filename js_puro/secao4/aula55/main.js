// Closures
// É a habilidade da função de acessar seu escopo léxico

function retornaFuncao(nome) {
  return function () {
    return nome;
  };
}

const funcao = retornaFuncao("Arthur");
const funcao2 = retornaFuncao("João");

console.dir(funcao); // olhe no navegador
console.dir(funcao2);

console.log(funcao(), funcao2());
