// Criando classes

class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  falar() {
    // Classes não precisam de prototypes
    console.log(`${this.nome} está falando`);
  }
}

// Função construtora para comparação
function Pessoa2(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function () {
  console.log(`${this.nome} está falando`);
};

const p1 = new Pessoa("Arthur", "Hoengen");
const p2 = new Pessoa2("Maria", "Hoengen");
const p3 = new Pessoa("Joana", "Hoengen");
const p4 = new Pessoa2("João", "Hoengen");
