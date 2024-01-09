function meuEscopo(){
    const form = document.querySelector('#form');
    const resultado = document.querySelector('#resultado');

    function recebeEventoForm (evento) {
        evento.preventDefault();
        const peso = parseFloat(form.querySelector('#peso').value);
        if (Number.isNaN(peso) || peso < 40 || peso > 635){
            resultado.style.background = 'rgb(252,115,136)';
            resultado.innerHTML = '<p>Peso inválido</p>';
            return;
        }
        const altura = parseFloat(form.querySelector('#altura').value);
        if (Number.isNaN(altura) || altura < 0.65 || altura > 2.50){
            resultado.style.background = 'rgb(252,115,136)';
            resultado.innerHTML = '<p>Altura inválida</p>';
            return;
        }

        const imc = (peso / altura**2).toFixed(2);
        let resposta;
        if(imc < 18.5){
            resposta = 'Abaixo do peso'
        } else if (imc >= 18.5 && imc <= 24.99){
            resposta = 'Peso normal'
        } else if (imc >=25 && imc <=29.99){
            resposta = 'Sobrepeso'
        } else if (imc >= 30 && imc <=34.99){
            resposta = 'Obesidade grau 1'
        } else if (imc >= 35 && imc <= 39.99){
            resposta = 'Obesidade grau 2'
        } else if (imc >= 40){
            resposta = 'Obesidade grau 3'
        }
        
        resultado.style.background = 'rgb(1, 254, 195)';
        resultado.innerHTML = `<p>Seu IMC é ${imc} (${resposta})`
        return
    }

    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();
