// POR ISSO É SEMPRE IMPORTANTE LER A DOCUMENTAÇÃO SENHOR ARTHUR!!!

const h1 = document.querySelector(".container h1");
const data = new Date();
h1.innerHTML = data.toLocaleDateString("pt-BR", {
  dateStyle: "full",
  timeStyle: "short", // por algum motivo isso está dando erro, mas deveria funcionar
});
