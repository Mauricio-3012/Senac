const botao = document.querySelector(`#calcular`); // seleciona o botao pelo e guarda numa variavel
const resultado = document.querySelector(`#resultado`); // seleciona a div resultado e guarda numa variável
resultado.classList.add(`display`); // esconde o resultado no inicio

function calcularValorFinal() { // define funcao
    const preco = document.querySelector(`#valor`).value; // pega valor do input de preco
    const pagamento = document.querySelector(`#pagamento`).value; // pega a opcao de pagamento do select
    let valorTotal; // declara variavel que ira guardar o valor total
    

    if (pagamento === `avista`){ // se pagamento = a vista, 10% de desconto
        valorTotal = preco * 0.9;
        resultado.innerHTML = `Total: R$${valorTotal.toFixed(2)}`; // insere valor formatado na div resultado
        resultado.classList.add(`desconto`); // adiciona classe a div resultado
        resultado.classList.remove(`display`); // remove classe display e mostra resultado
    } else if (pagamento === `cartao`){ // se não, se pagamento = cartao, aplica 5% de acrescimo
        valorTotal = preco * 1.05;
        resultado.innerHTML = `Total: R$${valorTotal.toFixed(2)}`;
        resultado.classList.add(`acrescimo`);
        resultado.classList.remove(`display`);
    } else if (pagamento === `parcelado2x`){ // se não, se pagamento = parcelado em 2x, preco sem desconto /2
        valorTotal = (preco * 1) / 2;
        resultado.classList.add(`sem-desconto`);
        resultado.innerHTML = `Total: 2 parcelas de R$${valorTotal.toFixed(2)}`;
        resultado.classList.remove(`display`);
    } else if (pagamento === `parcelado3x`){ // se não, se pagamento = parcelado em 3x, preco com 10% de juros /3
        valorTotal = (preco * 1.10) / 3;
        resultado.classList.add(`acrescimo`);
        resultado.innerHTML = `Total: 3 parcelas de R$${valorTotal.toFixed(2)}`;
        resultado.classList.remove(`display`);
    }
}

botao.addEventListener("click", calcularValorFinal); // executa funcao toda vez que o botao for clicado