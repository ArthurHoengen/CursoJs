// Objeto Map()
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Map

const pessoas = [
  { id: 3, nome: "Arthur" },
  { id: 2, nome: "Maria" },
  { id: 1, nome: "Helena" },
];

// AQUI A ORDEM DE INSERÇÃO É PERDIDA
// E OS ID SÃO CONVERTIDOS PARA STRING
// const novasPessoas = {};
// for (const pessoa of pessoas) {
//   const { id } = pessoa;
//   novasPessoas[id] = { ...pessoa };
// }

// Aqui a ordem de inserção é mantida
// E os IDS são mantidos como number
const novasPessoas = new Map();
for (const pessoa of pessoas) {
  const { id } = pessoa;
  novasPessoas.set(id, { ...pessoa });
}

for (const /*[identifier, { id, nome }]*/ pessoas of novasPessoas) {
  //console.log(identifier, id, nome);
  console.log(pessoas);
}

novasPessoas.delete(2);
console.log(novasPessoas);
