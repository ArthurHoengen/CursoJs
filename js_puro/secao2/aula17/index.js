// Arrays (Básico)

const alunos = ['Arthur', 'Maria', 'João']; // Arrays e objects são mutaveis
// Pode colocar qualquer coisa no mesmo array, mas é melhor colocar sempre o mesmo tipo de item
// Arrays são indexados por item

console.log(typeof alunos);
console.log(alunos instanceof Array);

//delete alunos[1]; // remove o elemento deixando o índice vazio
// slice funciona também, do mesmo jeito que nas strings
// const removido = alunos.shift(); // Remove o primeiro
// alunos.pop(); // Remove o ultimo
// alunos.unshift('Luiza');  // Adiciona no começo
// alunos.unshift('Fabio');
// alunos.push('Luiza');  //Adiciona no fim
// alunos.push('Fabio');

// alunos[alunos.length] = 'Luiza';
// alunos[alunos.length] = 'Fabio';
// alunos[alunos.length] = 'Luana';
// alunos[0] = 'Eduardo';      
// alunos[3] = 'Luiza';  

// console.log(alunos[0]);
// console.log(alunos[1]);