// Factory Functions + Prototypes

const falar = {
  falar() {
    console.log(`${this.nome} está falando`);
  },
};

const comer = {
  comer() {
    console.log(`${this.nome} está falando`);
  },
};

const beber = {
  beber() {
    console.log(`${this.nome} está falando`);
  },
};

const pessoaPrototype = { ...falar, ...comer, ...beber };

function criaPessoa(nome, sobrenome) {
  return Object.create(pessoaPrototype, {
    nome: {
      enumerable: true,
      writable: true,
      value: nome,
      configurable: false,
    },
    sobrenome: {
      enumerable: true,
      writable: true,
      value: sobrenome,
      configurable: false,
    },
  });
}

criaPessoa.prototype.falar = function () {
  console.log(`${this.nome} está falando`);
};

const p1 = criaPessoa("Arthur", "Hoengen");
