// Tratando e lançando erros (try, catch, finally)
// try {
//   console.log(a);
//   console.log("Abri um arquivo");
//   console.log("Manipulei o arquivo");
//   console.log("Fechei o arquivo");
//   // É executado quando não há erros
// } catch (e) {
//   console.log("Tratando o erro");
//   // É executado quando há erros
// } finally {
//   console.log("FINALLY: Eu sempre sou executado");
//   // Sempre
// }

function retornaHora(data) {
  if (data && !(data instanceof Date)) {
    throw new TypeError("Esperando instância de Date.");
  }

  if (!data) {
    data = new Date();
  }

  return data.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
}
try {
  const data = new Date("01-01-2024 12:58:12");
  const hora = retornaHora(data);
  console.log(hora);
} catch (e) {
  console.log("Algo inesperado ocorreu =C");
} finally {
  console.log("Tenha um bom dia!");
}