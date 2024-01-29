//Atribuição via desestruturação (Objetos)

const pessoa = {
  nome: "Arthur",
  sobrenome: "Hoengen",
  idade: 20,
  endereco: {
    rua: "segredo",
    numero: 83,
  },
};

//Atribuição via desestruturação
//const { nome = "Não existe", sobrenome, endereco } = pessoa;
const {
  endereco: { rua, numero },
  endereco,
  ...resto
} = pessoa;
console.log(rua, numero, endereco, resto);

