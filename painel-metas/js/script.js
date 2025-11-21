const form = document.querySelector('#form');
const addMeta = document.querySelector('#adicionar-meta');
const erro = document.querySelector('#erro');
const listaMetas = document.querySelector('#lista-metas');

function adicionarMeta(e) {
    e.preventDefault();
    erro.innerText = "";
    const titulo = document.querySelector('#titulo').value.trim();
    const descricao = document.querySelector('#descricao').value.trim();
    const prioridade = document.querySelector('#prioridade').value;
    const data = document.querySelector('#data').value;

    const hoje = new Date().toISOString().split(`T`)[0];

    if (!titulo || !descricao || !prioridade || !data || data < hoje) {
        erro.innerText = 'Preencha todos os campos corretamente!';
        return;
    }

    const dataAtual = new Date();
    const dataFormatada = new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    }).format(dataAtual);

    const item = document.createElement('li');
    item.classList.add(prioridade);
    item.innerHTML = `
    <div class="item-lista">
      <h3><b>${titulo}</b></h3>
      <p>${descricao}</p>
      <p><b>Prioridade:</b> ${prioridade}</p>
      <p><b>Data:</b> ${dataFormatada}</p>
    </div>`;

    const concluirTarefa = document.createElement('button');
    concluirTarefa.innerText = '✔';
    concluirTarefa.classList.add('btn', 'btn-concluir');

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

    const removerMeta = document.createElement('button');
    removerMeta.innerText = '✘';
    removerMeta.classList.add('btn-remover');

    removerMeta.addEventListener('click', function () {
        item.remove();
    });

    item.appendChild(concluirTarefa);
    item.appendChild(removerMeta);
    listaMetas.appendChild(item);
    form.reset();
}

addMeta.addEventListener('click', adicionarMeta);