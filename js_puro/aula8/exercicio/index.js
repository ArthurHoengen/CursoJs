/*
Luiz Otávio Miranda tem 30 anos, pesa 84 kg
tem 1.8 de altura e seu IMC é de 25.92...
Luiz Otávio nasceu em 1980
*/

const nome = 'Arthur';
const sobrenome = 'Hoengen';
const idade = 20;
const peso = 90;
const alturaEmM = 1.84;
let indiceMassaCorporal;
let anoNascimento;

indiceMassaCorporal = peso / alturaEmM**2;
anoNascimento = 2023 - idade;

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg');
console.log('tem', alturaEmM, 'de altura e seu IMC é de', indiceMassaCorporal);
console.log(nome, 'nasceu em', anoNascimento + '.');

console.log()// ou, de uma forma mais prática com template string:

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);