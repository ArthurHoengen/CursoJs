// If, else if e else (1)

/*
Entre 0 - 11 - Bom dia
Entre 12 - 17 - Boa tarde
Entre 18 - 23 - Boa noite
*/

// if pode ser usado sozinho
// else precisa de um if antes
// pode ter varios else ifs
// só pode haver um else

const hora = 50;

if(hora >= 0 && hora <= 11) {
    console.log('Bom dia!');
} else if(hora >= 12 && hora <= 17){
    console.log('Boa tarde');
} else if (hora >= 11 && hora <= 23){
    console.log('Boa noite');
} else {
    console.log('Olá')
}
