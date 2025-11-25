const botao = document.querySelector(`#calcular`);
const resultado = document.querySelector(`#resultado`);
resultado.classList.add(`display`);

function calcularValorFinal() {
    const preco = document.querySelector(`#valor`).value;
    const pagamento = document.querySelector(`#pagamento`).value;
    let valorTotal;
    

    if (pagamento === `avista`){
        valorTotal = preco * 0.9;
        resultado.innerHTML = `Total: R$${valorTotal.toFixed(2)}`;
        resultado.classList.add(`desconto`);
        resultado.classList.remove(`display`);
    } else if (pagamento === `cartao`){
        valorTotal = preco * 1.05;
        resultado.innerHTML = `Total: R$${valorTotal.toFixed(2)}`;
        resultado.classList.add(`acrescimo`);
        resultado.classList.remove(`display`);
    } else if (pagamento === `parcelado2x`){
        valorTotal = (preco * 1) / 2;
        resultado.classList.add(`sem-desconto`);
        resultado.innerHTML = `Total: 2 parcelas de R$${valorTotal.toFixed(2)}`;
        resultado.classList.remove(`display`);
    } else if (pagamento === `parcelado3x`){
        valorTotal = (preco * 1.10) / 3;
        resultado.classList.add(`acrescimo`);
        resultado.innerHTML = `Total: 3 parcelas de R$${valorTotal.toFixed(2)}`;
        resultado.classList.remove(`display`);
    }
}

botao.addEventListener("click", calcularValorFinal);