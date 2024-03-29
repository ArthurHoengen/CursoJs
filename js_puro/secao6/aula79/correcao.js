function ValidaCPF(cpfEnviado) {
  Object.defineProperty(this, "cpfLimpo", {
    get: () => cpfEnviado.replace(/\D+/g, ""),
  });
}

ValidaCPF.prototype.valida = function () {
  if (typeof this.cpfLimpo === undefined) return false;
  if (this.cpfLimpo.length !== 11) return false;
  if (this.isSequencia()) return false;

  let cpfParcial = this.cpfLimpo.slice(0, -2);
  const digito1 = this.criaDigito(cpfParcial);
  const digito2 = this.criaDigito(cpfParcial + digito1);

  const cpfValido = cpfParcial + digito1 + digito2;
  return cpfValido === this.cpfLimpo;
};

ValidaCPF.prototype.isSequencia = function () {
  return this.cpfLimpo[0].repeat(this.cpfLimpo.length) === this.cpfLimpo;
};

ValidaCPF.prototype.criaDigito = function (cpfParcial) {
  const cpfArray = Array.from(cpfParcial);
  let regressivo = cpfArray.length + 1;
  const total = cpfArray.reduce((ac, valor, i) => {
    ac += regressivo * Number(valor);
    regressivo--;
    return ac;
  }, 0);
  const digito = 11 - (total % 11);
  return digito > 9 ? "0" : String(digito);
};

const cpf = new ValidaCPF("066.019.119.92");

if (cpf.valida()) {
  console.log("Cpf válido");
} else {
  console.log("Cpf inválido");
}
