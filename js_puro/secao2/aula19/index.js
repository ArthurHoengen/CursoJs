//Objetos (Básico)

function criaPessoa(nome, sobrenome, idade) {
    return {
        nome, sobrenome, idade // javaScript entende que nome = nome:nome
    };
}

//const pessoa1 = criaPessoa('Arthur', 'Hoengen', 20);

const pessoa1 = {
    nome: 'Arthur',
    sobrenome: 'Hoengen',
    idade: 20,

    fala() {
        console.log(`A minha idade atual é ${this.idade}.`);
    },

    incrementaIdade() {
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
