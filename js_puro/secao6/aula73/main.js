// Object.defineProperty() e Object.defineProperties()

function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  Object.defineProperty(this, "estoque", {
    enumerable: true, // mostra a chave
    value: estoque, // valor
    writable: false, // valor pode ser alterado?
    configurable: false, // pode reconfigurar a chave?
  });

  Object.defineProperties(this, {
    nome: {
      enumerable: true, // mostra a chave
      value: nome, // valor
      writable: true, // valor pode ser alterado?
      configurable: false, // pode reconfigurar a chave?
    },
    preco: {
      enumerable: true, // mostra a chave
      value: preco, // valor
      writable: true, // valor pode ser alterado?
      configurable: false, // pode reconfigurar a chave?
    },
  });
}

const p1 = new Produto("Camiseta", 20, 30);
p1.estoque = 100;
delete p1.estoque;
console.log(Object.keys(p1));
