// Fetch API (GET)

document.addEventListener("click", (e) => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();
  if (tag === "a") {
    e.preventDefault();
    carregaPagina(el);
  }
});

async function carregaPagina(el) {
  try {
    const href = el.getAttribute("href");
    const response = await fetch(href);
    if (response.status < 200 || response.status >= 300)
      throw new Error("Erro 404!");
    const html = await response.text();
    loadElement(html);
  } catch (e) {
    console.log(e);
  }
}

function loadElement(response) {
  const resultado = document.querySelector(".resultado");
  resultado.innerHTML = response;
}

// fetch("pagina1.html")
//   .then((resposta) => {
//     if (resposta.status !== 200) throw new Error("Erro 404");
//     return resposta.text();
//   })
//   .then((html) => console.log(html))
//   .catch((e) => console.log(e));
