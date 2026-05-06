// captura elementos do html
const form = document.querySelector('#form');
const pratoSelect = document.querySelector('#pratos');
const bebidaSelect = document.querySelector('#bebidas');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const erroDiv = document.querySelector('#erro');
const resultadoSec = document.querySelector('#resultado');
const btnCalcular = document.querySelector('#calcular-total');


// tabela de precos
const precos = {
  prato: { carne: 30, lasanha: 28.5, frango: 23 },
  bebida: { guarana: 8, fanta: 9, monster: 10 },
  adicionais: { sobremesa: 15, molho: 5.5, embalagem: 10 }
};

// funcao do botao de calcular pedido
function calcular(e) {
  e.preventDefault();

  // limpa mensagens de erro
  erroDiv.textContent = '';
  erroDiv.classList.add('d-none');

  const prato = pratoSelect.value;
  const bebida = bebidaSelect.value;

  // validacoes
  if (!prato && !bebida) return mostrarErro('Selecione o prato e a bebida');
  if (!prato) return mostrarErro('Selecione um prato');
  if (!bebida) return mostrarErro('Selecione uma bebida');

  // soma inicial (prato + bebida)
  let total = precos.prato[prato] + precos.bebida[bebida];
  const adicionais = [];

  // soma os adicionais marcados
  checkboxes.forEach(cb => {
    if (cb.checked) {
      adicionais.push(cb.value);
      total += precos.adicionais[cb.value];
    }
  });

  // resumo do pedido
  const divResumo = document.createElement('div');
  divResumo.classList.add('painel-resultado');
  divResumo.innerHTML = `
    <h2>Resumo do Pedido</h2>
    <p><b>Prato:</b> ${pratoSelect.options[pratoSelect.selectedIndex].text}</p>
    <p><b>Bebida:</b> ${bebidaSelect.options[bebidaSelect.selectedIndex].text}</p>
    <p><b>Adicionais:</b> ${adicionais.length > 0 ? adicionais.join(', ') : 'Nenhum adicional selecionado'}</p>
    <p><b>Total:</b> R$ ${total.toFixed(2).replace('.', ',')}</p>
    <button id="novo-pedido">Novo Pedido</button>
  `;

  resultadoSec.innerHTML = '';
  resultadoSec.appendChild(divResumo);

  form.classList.add('d-none');
  resultadoSec.classList.remove('d-none');

  document.querySelector('#novo-pedido').addEventListener('click', resetar);
}

// mostra mensagem de erro na tela (caso haja algum)
function mostrarErro(msg) {
  erroDiv.textContent = msg;
  erroDiv.classList.remove('d-none');
}

// limpa tudo e volta para o formulario inicial
function resetar() {
  pratoSelect.value = '';
  bebidaSelect.value = '';
  checkboxes.forEach(cb => cb.checked = false);
  resultadoSec.classList.add('d-none');
  form.classList.remove('d-none');
  erroDiv.textContent = '';
  erroDiv.classList.add('d-none');
}

// executa a funcao calcular ao clicar no botao
btnCalcular.addEventListener('click', calcular);