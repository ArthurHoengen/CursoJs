export const nome = "Arthur";
export const sobrenome = "Hoengen";
export const idade = 20;

export default function soma(x, y) {
  return x + y;
}

export class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
}

// export {nome as default, sobrenome, idade, soma, Pessoa};
