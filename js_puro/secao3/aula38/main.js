// For in -> lê os índices ou chaves do objeto
const frutas = ['Pera', 'Maçã', 'Uva'];

for(let i in frutas) {
    console.log(frutas[i]);
}

const pessoa = {
    nome: 'Arthur',
    sobrenome: 'Hoengen',
    idade: '20'
};

for(let key in pessoa){
    console.log(pessoa[key])
}
