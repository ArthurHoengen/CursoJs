// if, else if e else (2)

// O bloco if checa as condições até achar uma verdadeira, finalizando após isso

const numero = 10;

if (1===1) {
    console.log('LITERAL');
}

if (numero <= 0 && numero <= 5) {
    console.log('O número está entre 0 e 5.');
} else if(numero >=6 && numero <=8){
    console.log('O número está entre 6 e 8.');
} else if(numero >=9 && numero <=11){
    console.log('O número está entre 9 e 11.');
} else{
    console.log('O número NÃO está entre 0 e 11.');
}

console.log('...Aqui vai o resto do código');
