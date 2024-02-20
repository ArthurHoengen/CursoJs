// Herança com classes

class DispositivoEletronico {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }

  ligar() {
    if (this.ligado) {
      console.log(`${this.nome} já está ligado`);
      return;
    }
    this.ligado = true;
  }

  desligar() {
    if (!this.ligado) {
      console.log(`${this.nome} já está desligado`);
      return;
    }
    this.ligado = false;
  }
}

class Smartphone extends DispositivoEletronico {
  constructor(nome, cor) {
    super(nome);
    this.cor = cor;
  }
}

class Tablet extends DispositivoEletronico {
  constructor(nome, temWifi) {
    super(nome);
    this.temWifi = temWifi;
  }

  ligar() {
    console.log("Olha, você alterou o método ligar");
  }

  falaOi() {
    console.log("Oi");
  }
}

const s1 = new Smartphone("Poco X3 Pro", "Azul");
console.log(s1);

const t1 = new Tablet("Ipad", true);
t1.ligar();
t1.falaOi();
