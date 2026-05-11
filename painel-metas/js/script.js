// captura elementos do html
const form = document.querySelector('#form');
const addMeta = document.querySelector('#adicionar-meta');
const erro = document.querySelector('#erro');
const listaMetas = document.querySelector('#lista-metas');

// funcao adicionar meta
function adicionarMeta(e) { 
    e.preventDefault(); // previne comportamento padrao
    erro.innerText = "";
    const titulo = document.querySelector('#titulo').value.trim();
    const descricao = document.querySelector('#descricao').value.trim();
    const prioridade = document.querySelector('#prioridade').value;
    const data = document.querySelector('#data').value;

    const hoje = new Date().toISOString().split(`T`)[0];

    // validacao dos campos
    if (!titulo || !descricao || !prioridade || !data || data < hoje) {
        erro.innerText = 'Preencha todos os campos corretamente!';
        return;
    }

    // formatacao de data
    const dataAtual = new Date();
    const dataFormatada = new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    }).format(dataAtual);

    // cria elemento da lista que contem uma tarefa
    const item = document.createElement('li');
    item.classList.add(prioridade);
    item.innerHTML = `
    <div class="item-lista">
      <h3><b>${titulo}</b></h3>
      <p>${descricao}</p>
      <p>Prioridade: <${prioridade}</p>
      <p>Data: <b>${dataFormatada}</b></p>
    </div>`;

    // cria botao de concluir tarefa
    const concluirTarefa = document.createElement('button');
    concluirTarefa.innerText = 'Concluir tarefa';
    concluirTarefa.classList.add('btn', 'btn-concluir');

    // executa funcao ao clicar no botao de concluir tarefa
    concluirTarefa.addEventListener('click', function () {
        const jaConcluida = item.classList.contains('concluida');

        if (jaConcluida) {
            item.classList.remove('concluida');
            concluirTarefa.textContent = "Marcar como concluida";
        } else {
            item.classList.add('concluida');
            concluirTarefa.textContent = "Desmarcar como concluída";
        }
    });

    // cria botao de remover meta
    const removerMeta = document.createElement('button');
    removerMeta.innerText = 'Remover Meta';
    removerMeta.classList.add('btn-remover');

    // adiciona funcao ao clicar no botao de remover meta
    removerMeta.addEventListener('click', function () {
        item.remove();
    });

    item.appendChild(concluirTarefa);
    item.appendChild(removerMeta);
    listaMetas.appendChild(item);
    form.reset();
}

addMeta.addEventListener('click', adicionarMeta);