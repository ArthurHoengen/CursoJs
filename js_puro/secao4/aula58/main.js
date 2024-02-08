// Funções fábrica (Factory functions)

function criaPessoa(nome, sobrenome, altura, peso) {
  return {
    nome, // Atributos
    sobrenome,
    // Getter
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },
    // Setter
    set nomeCompleto(valor) {
      valor = valor.split(" ");
      this.nome = valor.shift();
      this.sobrenome = valor.join(" ");
    },
    altura,
    peso,
    fala(assunto) {
      return `${this.nome} está falando sobre ${assunto}...`;
    },
    // Getter
    get imc() {
      const indice = this.peso / this.altura ** 2;
      return indice.toFixed(2);
    },
  };
}

const p1 = criaPessoa("Arthur", "Hoengen", 1.84, 90);
console.log(p1.fala("js"));
console.log(p1.imc);
console.log(p1.nomeCompleto);
p1.nomeCompleto = "Henrique Oliveira da Silva";
console.log(p1.nome);
