// COMPLIQUEI D+, era bem mais simples
// Cuidado com o Overthinking Arthur

function meuEscopo() {
  const elementos = [
    { tag: "p", texto: "Frase 1" },
    { tag: "div", texto: "Frase 2" },
    { tag: "footer", texto: "Frase 3" },
    { tag: "section", texto: "Frase 4" },
  ];

  const container = document.querySelector(".container");
  const div = criaElemento("div");
  container.appendChild(div);
  
  function setDiv() {
    div.innerHTML = "";

    for (let i = 0; i < elementos.length; i++) {
      const { tag, texto } = elementos[i];
      const elemento = criaElemento(tag, texto);
      div.appendChild(elemento);
    }
  }
  setDiv();

  function criaElemento(tag, texto = "") {
    const elemento = document.createElement(tag);
    elemento.innerHTML = texto; // e innerText seria melhor
    return elemento;
  }
}
meuEscopo();
