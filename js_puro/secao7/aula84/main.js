// Getters e Setters

// Symbol
const _velocidade = Symbol("velocidade");
class Carro {
  constructor(nome) {
    this.nome = nome;
    this[_velocidade] = 0;
  }

  set velocidade(valor) {
    if (typeof valor !== "number") return;
    if (valor > 100 || valor < 0) return;
    this[_velocidade] = valor;
  }

  get velocidade() {
    return this[_velocidade];
  }

  acelerar() {
    if (this[_velocidade] >= 100) return;
    this[_velocidade]++;
  }

  freiar() {
    if (this[_velocidade] <= 0) return;
    this[_velocidade]--;
  }
}

const c1 = new Carro("Fusca");

for (let i = 0; i <= 200; i++) {
  c1.acelerar();
}

console.log(c1.velocidade);

class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  get nomeCompleto() {
    return `${this.nome} ${this.sobrenome}`;
  }

  set nomeCompleto(nomeCompleto) {
    nomeCompleto = nomeCompleto.split(" ");
    this.nome = nomeCompleto.shift();
    this.sobrenome = nomeCompleto.join(" ");
  }
}

const p1 = new Pessoa("Arthur", "Hoengen");
p1.nomeCompleto = "Arthur Hoengen da silva";
console.log(p1.nome);
console.log(p1.sobrenome);
