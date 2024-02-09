// Contructor functions -> Objetos
// Função fábrica -> objetos
// Construtora -> new Pessoa (exemplo)

function Pessoa(nome, sobrenome) {
  const ID = 123456; // atributo privado

  const metodoInterno = () => {}; // método privado

  this.nome = nome; //atributo público
  this.sobrenome = sobrenome;

  this.metodo = () => {
    // método público
    console.log(`${this.nome}: sou um método`);
  };
}

const p1 = new Pessoa("Arthur", "Hoengen");
const p2 = new Pessoa("Evandro", "Hoengen");
