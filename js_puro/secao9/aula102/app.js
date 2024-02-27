// const { nome, sobrenome, falaNome } = require("./mod1");
// console.log(nome, sobrenome);
// falaNome();

const path = require("path");
const axios = require("axios");
const { Pessoa } = require("./mod1");

const p1 = new Pessoa("Arthur", "Hoengen");
console.log(p1);

// axios("https://www.otaviomiranda.com.br/files/json/pessoas.json")
//   .then((response) => console.log(response))
//   .catch((e) => console.log(e));
