// Revisando Objetos

// const pessoa = {
//   nome: "Arthur",
//   sobrenome: "Hoengen",
// };

// const chave = "nome";
// console.log(pessoa[chave]);
// console.log(pessoa.sobrenome);

const pessoa1 = new Object();
pessoa1.nome = "Arthur";
pessoa1.sobrenome = "Hoengen";
pessoa1.idade = 20;
pessoa1.falarNome = function () {
  return `${this.nome} está falando seu nome.`;
};
pessoa1.getDataNascimento = function () {
  const dataAtual = new Date();
  return dataAtual.getFullYear() - this.idade;
};

//console.log(pessoa1.getDataNascimento());
// delete pessoa1.nome;

// for (let chave in pessoa1) {
//   console.log(pessoa1[chave]);
// }

// Factory functions / Constructor functions / Classes

function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },
  };
}

// p1 = (ENDEREÇOMEMORIA) -> 'Valor'
// p1 n pode virar outro endereço
// p1.chave = {nome: outraCoisa}
const p1 = criaPessoa("Arthur", "Hoengen");
console.log(p1.nomeCompleto);

function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;

  Object.freeze(this); // Não pode mais alterar nenhum objeto Pessoa
}

// A palavria new cira umm objeto vazio e atrela a palavra this ao objeto e retorna o this
const p2 = new Pessoa("Arthur", "Hoengen");
Object.freeze(p2); // Impede o Objeto de ser alterado
console.log(p2);
