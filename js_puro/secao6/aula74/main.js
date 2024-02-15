// Getters e Setters
function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  Object.defineProperty(this, "estoque", {
    enumerable: true, // mostra a chave
    configurable: false, // pode reconfigurar a chave?
    get: () => estoque,
    set: (valor) => {
      if (typeof valor !== "number") {
        throw new TypeError("valor isn`t correct defined");
      }
      estoque = valor;
    },
  });
}

function criaProduto(nome) {
  return {
    get nome() {
      return nome;
    },
    set nome(valor) {
      valor = valor.replace(" coisa", "");
      nome = valor;
    },
  };
}

const p1 = new Produto("Camiseta", 20, 3);
console.log(p1);
console.log(p1.estoque);

const p2 = criaProduto("Todas as coisas");
console.log(p2.nome);
p2.nome = "Qualquer coisa";
console.log(p2.nome);
