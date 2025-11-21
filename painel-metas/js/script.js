// captura elementos do formulario 
const form = document.querySelector('#form');
const addMeta = document.querySelector('#adicionar-meta');
const erro = document.querySelector('#erro');
const listaMetas = document.querySelector('#lista-metas');

// função para adicionar metas
function adicionarMeta(e) {
    e.preventDefault();
    erro.innerText = "";
    const titulo = document.querySelector('#titulo').value.trim();
    const descricao = document.querySelector('#descricao').value.trim();
    const prioridade = document.querySelector('#prioridade').value;
    const data = document.querySelector('#data').value;

    const hoje = new Date().toISOString().split(`T`)[0];

    // mensagem de erro
    if (!titulo || !descricao || !prioridade || !data || data < hoje) {
        erro.innerText = 'Preencha todos os campos corretamente!';
        return;
    }

    // formatação data
    const dataAtual = new Date();
    const dataFormatada = new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    }).format(dataAtual);

    // cria um elemento <li> para cada meta adicionada
    const item = document.createElement('li');
    item.classList.add(prioridade);
    item.innerHTML = `
    <div class="item-lista">
      <h3><b>${titulo}</b></h3>
      <p>${descricao}</p>
      <p><b>Prioridade:</b> ${prioridade}</p>
      <p><b>Data:</b> ${dataFormatada}</p>
    </div>`;

    // botao de concluir tarefa
    const concluirTarefa = document.createElement('button');
    concluirTarefa.innerText = '✔';
    concluirTarefa.classList.add('btn', 'btn-concluir');

    // interação com o botao de concluir tarefa
    concluirTarefa.addEventListener('click', function () {
        const jaConcluida = item.classList.contains('concluida');

        if (jaConcluida) {
            item.classList.remove('concluida');
            concluirTarefa.textContent = "✔";
        } else {
            item.classList.add('concluida');
            concluirTarefa.textContent = "⤶";
        }
    });

    // botao de remover meta
    const removerMeta = document.createElement('button');
    removerMeta.innerText = '✘';
    removerMeta.classList.add('btn-remover');

    // interação com o botao de remover meta
    removerMeta.addEventListener('click', function () {
        item.remove();
    });

    item.appendChild(concluirTarefa);
    item.appendChild(removerMeta);
    listaMetas.appendChild(item);
    form.reset();
}

// interação do botao de adicionar meta
addMeta.addEventListener('click', adicionarMeta);
