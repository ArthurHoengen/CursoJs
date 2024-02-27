import geraSenha from "./geradores";

const senhaGerada = document.querySelector(".senha-gerada");
const qtd = document.querySelector(".qtd");
const checkNumeros = document.querySelector(".chk-numeros");
const checkMaiusculas = document.querySelector(".chk-maiusculas");
const checkMinusculas = document.querySelector(".chk-minusculas");
const checksimbolos = document.querySelector(".chk-simbolos");
const botao = document.querySelector(".gerar-senha");

export default () => {
  botao.addEventListener("click", () => {
    senhaGerada.innerText = gera();
  });
};

function gera() {
  return (
    geraSenha(
      qtd.value,
      checkNumeros.checked,
      checkMaiusculas.checked,
      checkMinusculas.checked,
      checksimbolos.checked
    ) || "Nada selecionado"
  );
}
