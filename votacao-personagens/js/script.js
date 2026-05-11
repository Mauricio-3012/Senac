// captura elementos do html
const form = document.querySelector('#formulario');
const erro = document.querySelector('#erro');
const personagens = document.querySelector('#personagens');
const ranking = document.querySelector('#ranking');
const botao = document.querySelector(`#votar`);

// objeto de votos
const votos = {
    "Sonic": 0,
    "Dr. Robotnik": 0,
    "Super Mario": 0,
    "Bowser": 0
}

// funcao votar
function votar(e) {
    e.preventDefault(); // previne comportamento padrao

    erro.innerText = ``; // limpa mensagem de erro
    const votado = personagens.value; // captura personagem selecionado

    // validacao em caso de não votar
    if (votado === `Selecione`) {
        erro.innerText = 'Escolha um personagem valido!';
        return;
    }

    votos[votado]++;  // incrementa +1 no voto do personagem escolhido

    atualizarRanking(); // atualiza a exibição do ranking
}

// funcao que atualiza o ranking
function atualizarRanking(){ 
    ranking.innerHTML = ""; // limpa o ranking atual

    // transforma o objeto em array e ordena do maior para o menor voto
    const rankingOrdenado = Object.entries(votos).sort((a, b) => b[1] - a[1]);

    // pega a maior quantidade de votos
    const maiorVoto = rankingOrdenado[0][1]

    rankingOrdenado.forEach(personagem => {
    const li = document.createElement(`li`);
    li.textContent = `${personagem[0]} - ${personagem[1]} votos(s)`;

    if (personagem[1] === maiorVoto && maiorVoto !== 0){
        li.classList.add('lider'); // destaca o primeiro colocado
    }

    ranking.appendChild(li); // adiciona o item na lista da pagina
    });
};

// botao que executa a funcao votar ao clicar
botao.addEventListener("click", votar);