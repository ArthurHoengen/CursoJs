import GeraCPF from "./modules/GeraCPF";

import "./assets/css/style.css";

(() => {
  const gera = new GeraCPF();
  const cpfGerado = document.querySelector(".resultado");
  cpfGerado.innerText = gera.geraNovoCpf();
})();
