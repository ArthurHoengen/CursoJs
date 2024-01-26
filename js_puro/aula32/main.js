// mais diferenças entre var e let/const
// Let tem escopo de bloco {... bloco}
// Var só tem escopo de função

// let nome = 'Luiz'; // criando
// var nome2 = 'Luiz'; // criando

// if(true) {
//     let nome = 'Otavio'; // criando
//     var nome2 = 'Rogério'; // Redeclarando

//     if(true) {
//         let nome = 'Arthur'; // criando
//         var nome2 = 'José' // Redeclarando
//     }
// }

// console.log(nome, nome2)

// function falaOi() {
//   var sobrenome = "Hoengen";  

//   if (true) {
//     var nome = "Arthur";  // var não respeita blocos, apenas funções
//     console.log(nome, sobrenome);
//   }
//   console.log(nome, sobrenome);

// }
// // Aqui eu ja não teria acesso a nenhuma var da função falaOi

// falaOi();

// HOISTING: eleva funções e var para o topo do escopo

console.log(sobrenome);

var sobrenome = 'Miranda'; 
