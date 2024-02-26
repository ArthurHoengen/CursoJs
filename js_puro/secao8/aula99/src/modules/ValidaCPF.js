export default class ValidaCPF {
  constructor(cpfEnviado) {
    Object.defineProperty(this, "cpfLimpo", {
      writable: false,
      enurable: true,
      configurable: false,
      value: cpfEnviado.replace(/\D+/g, ""),
    });
  }

  valida() {
    if (typeof this.cpfLimpo !== "string") return false;
    if (this.cpfLimpo.length !== 11) return false;
    if (this.isSequencia()) return false;

    let cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = ValidaCPF.criaDigito(cpfParcial);
    const digito2 = ValidaCPF.criaDigito(cpfParcial + digito1);

    const cpfValido = cpfParcial + digito1 + digito2;
    return cpfValido === this.cpfLimpo;
  }

  isSequencia() {
    return this.cpfLimpo[0].repeat(11) === this.cpfLimpo;
  }

  static criaDigito(cpfParcial) {
    const cpfArray = Array.from(cpfParcial);
    let regressivo = cpfArray.length + 1;
    const total = cpfArray.reduce((ac, valor, i) => {
      ac += regressivo * Number(valor);
      regressivo--;
      return ac;
    }, 0);
    const digito = 11 - (total % 11);
    return digito > 9 ? "0" : String(digito);
  }
}
