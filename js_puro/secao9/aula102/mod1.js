const nome = "Arthur";
const sobrenome = "Hoengen";

const falaNome = () => {
  console.log(`${nome} ${sobrenome}`);
};

// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.falaNome = falaNome;

exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;

this.qualquerCoisa = "Qualquer coisa";

class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
}

exports.Pessoa = Pessoa;
