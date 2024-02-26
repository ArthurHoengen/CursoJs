// ES6 Modules - imports / exports
// import { nome, sobrenome, idade, soma, Pessoa } from "./modulo1";
import * as meuModulo from "./modulo1";
import padrao from "./modulo1";

const p1 = new meuModulo.Pessoa(meuModulo.nome, meuModulo.sobrenome);
console.log(p1);
console.log(meuModulo);
console.log(padrao(5, 5));
