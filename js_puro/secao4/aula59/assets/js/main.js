(function () {
  function criaCalculadora() {
    return {
      display: document.querySelector(".display"),

      inicia() {
        // this aqui é a calculadora
        this.cliqueBotoes();
        this.pressionaEnter();
      },

      pressionaEnter() {
        this.display.addEventListener("keyup", (e) => {
          if (e.keyCode === 13) {
            this.realizaConta();
          }
        });
      },

      clearDisplay() {
        this.display.value = "";
      },

      apaga() {
        this.display.value = this.display.value.slice(0, -1);
      },

      realizaConta() {
        let conta = this.display.value;
        try {
          conta = eval(conta);

          if (!conta) {
            alert("Conta inválida");
            return;
          }
          this.display.value = String(conta);
        } catch (e) {
          alert("Conta inválida");
        }
      },

      cliqueBotoes() {
        document.addEventListener(
          "click",
          function (e) {
            // this aqui seria o document
            // Se eu usasse arrow function, o this continuaria sendo calculadora
            const el = e.target;

            if (el.classList.contains("btn-num")) {
              this.btnParaDisplay(el.innerText);
            }

            if (el.classList.contains("btn-clear")) {
              this.clearDisplay();
            }

            if (el.classList.contains("btn-del")) {
              this.apaga();
            }

            if (el.classList.contains("btn-equal")) {
              this.realizaConta();
            }
          }.bind(this)
        );
      },

      btnParaDisplay(valor) {
        this.display.value += valor;
      },
    };
  }

  const calculadora = criaCalculadora();
  calculadora.inicia();
})();

// NÃO USAR EVAL SEM VALIDAÇÕES
