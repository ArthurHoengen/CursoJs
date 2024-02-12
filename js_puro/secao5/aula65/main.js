// Método splice

const nomes = ["Maria", "João", "Eduardo", "Gabriel", "Júlia"];

//nomes.splice(indice, delete, adiciona1, adiciona2)

const removidos = nomes.splice(3, 2); // retorna um array com os elementos removidos
console.log(nomes, removidos);

nomes.splice(2, 0, "Arthur");
console.log(nomes);

// Pop:
nomes.splice(-1, 1);
console.log(nomes);
// Shift:
nomes.splice(0, 1);
console.log(nomes);
// Push:
nomes.splice(nomes.length, 0, "Caio");
console.log(nomes);
// Unshift:
nomes.splice(0, 0, "Fábio");
console.log(nomes);
