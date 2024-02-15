// Métodos úteis para objetos

/*
Object.values
Object.entries
Object.assign(destiny, any)
Object.getOwnPropertyDescriptor(o, 'prop')
... (spread)

// Já vimos
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/
const produto = { nome: "Caneca", preco: 1.8 };
// const outraCoisa = { ...produto, material: "Porcelana" };
// OU
const outraCoisa = Object.assign({}, produto, { material: "porcelana" });

outraCoisa.nome = "Outro nome";
outraCoisa.preco = 2.5;
console.log(Object.getOwnPropertyDescriptor(produto, "nome"));
console.log(Object.values(produto));
console.log(Object.entries(produto)); // Object.keys + Object.values

for (let [chave, valor] of Object.entries(outraCoisa)) {
  console.log(chave, valor);
}
