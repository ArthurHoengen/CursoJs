(function () {
  function Calculadora() {
    const display = document.querySelector(".display");

    this.inicia = () => {
      cliqueBotoes();
      pressionaEnter();
    };

    const pressionaEnter = () => {
      display.addEventListener("keyup", (e) => {
        if (e.keyCode === 13) {
          realizaConta();
        }
      });
    };

    const clearDisplay = () => {
      display.value = "";
    };

    const apaga = () => {
      display.value = display.value.slice(0, -1);
    };

    const realizaConta = () => {
      let conta = display.value;
      try {
        conta = eval(conta);

        if (!conta) {
          alert("conta inválida");
          clearDisplay();
          return;
        }
        display.value = String(conta);
      } catch (e) {
        alert("conta inválida");
        clearDisplay();
      }
    };

    const cliqueBotoes = () => {
      document.addEventListener("click", (e) => {
        const el = e.target;
        if (el.classList.contains("btn-num")) {
          btnParaDisplay(el.innerText);
        }

        if (el.classList.contains("btn-clear")) {
          clearDisplay();
        }

        if (el.classList.contains("btn-del")) {
          apaga();
        }

        if (el.classList.contains("btn-equal")) {
          realizaConta();
        }
      });
    };

    const btnParaDisplay = (valor) => {
      display.value += valor;
    };
  }

  const calculadora = new Calculadora();
  calculadora.inicia();
})();

// NÃO USAR EVAL SEM VALIDAÇÕES
