// Validando um cpf

/*
705.484.450-52

7x 0x 5x 4x 8x 4x 4x 5x 0
10 9  8  7  6  5  4  3  2
70 0  40 28 48 20 16 15 0 = 237

11 - (237 % 11) = 5 (primeiro dígito)
Se o resto da divisão for maior que 9, consideramos 0.

7x 0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10 9  8  7  6  5  4  3  2
77 0  45 32 56 24 20 20 0  10

11 - (284 % 11) = 2 (Primeiro dígito)

compare o cpf gerado com o cpf recebido
se os dois forem iguais = válido
*/

let cpf = "066.019.119-92";
let cpfLimpo = cpf.replace(/\D+/g, "");

const validador = (cpf) => {
  cpf.replace(/\D+/g, "");
  let cpfArray = Array.from(cpfLimpo);
  const ultimoDigito = cpfArray.pop();
  const penultimoDigito = cpfArray.pop();
  let contador1 = cpfArray.reduce(
    (ac, valor, i) => ac + Number(valor) * (10 - i),
    0
  );
  contador1 %= 11;
  if (contador1 >= 10) contador1 = 0;
  const check1 = 11 - contador1;
  if (check1 !== Number(penultimoDigito)) return false;
  cpfArray.push(check1);
  let contador2 = cpfArray.reduce(
    (ac, valor, i) => ac + Number(valor) * (11 - i),
    0
  );
  contador2 %= 11;
  if (contador2 >= 10) contador2 = 0;
  const check2 = 11 - contador2;
  if (check2 !== Number(ultimoDigito)) return false;
  return true;
};

console.log(validador(cpf));
