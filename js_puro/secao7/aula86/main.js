// Métodos de instância e estáticos

class ControleRemoto {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
  }

  // Método de instância
  aumentarVolume() {
    if (this.volume >= 100) return;
    this.volume += 2;
  }

  diminuirVolume() {
    if (this.volume <= 0) return;
    this.volume -= 2;
  }

  // Método estático
  static trocaPilha() {
    console.log("Pilhas de todos os controles trocadas");
  }
}

const controle1 = new ControleRemoto("LG");
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
console.log(controle1);

ControleRemoto.trocaPilha();
