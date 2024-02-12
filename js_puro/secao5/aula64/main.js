// Revisão do básico de Arrays

const nomes = ["Arthur", "Maria", "Joana", "Wallace", "Rosana"];
// const nomes = new Array("Arthur", "Maria", "Joana"); // Array com construtor
// não é muito utilizado
nomes[2] = "João";

// delete nomes[2]; // delete serve para remover itens do array sem alterar os índices
console.log(nomes);

// valor por referência:
// const novo = nomes;
// valor copiado com spread operator:
//const novo = [...nomes];

// array.pop() remove no final
// array.shift() remove do começo
// array.push() adiciona no final
// array.unshift() adiciona no começo

const novo = nomes.slice(1, -2);
console.log(novo);

const nome = "Arthur Hoengen";
const nomeSeparado = nome.split(" ");
console.log(nomeSeparado);

const nomeCompleto = nomeSeparado.join(" ");
console.log(nomeCompleto);
