// array dicas
const dicas = [
    "Estabeleça metas diárias — defina o que pretende aprender a cada dia para manter o foco.",
    "Organize seu ambiente de estudos — um local limpo e silencioso ajuda na concentração.",
    "Use a técnica Pomodoro — estude por 25 minutos e descanse por 5 para manter a produtividade.",
    "Faça revisões semanais — revisar o conteúdo aprendido fortalece a memória de longo prazo.",
    "Resolva exercícios práticos — aplicar o que aprendeu ajuda a entender melhor o conteúdo.",
    "Evite distrações — desligue o celular ou ative o modo 'não perturbe' durante o estudo.",
    "Explique o conteúdo para alguém — ensinar é uma das melhores formas de aprender.",
    "Intercale matérias diferentes — estudar temas variados evita a fadiga mental.",
    "Durma bem e se alimente de forma saudável — o corpo e o cérebro precisam estar descansados.",
    "Use resumos e mapas mentais — eles facilitam a visualização e a memorização dos conceitos principais."
]; 

// captura elementos do html
const novaDica = document.querySelector("#dica");
const botao = document.querySelector("#gerarDica");


// funcao que escolhe uma dica aleatoria da array e exibe no html
function gerarDica() {
    const dica = Math.floor(Math.random() * dicas.length);
    novaDica.innerText = `${dicas[dica]}`;
}

// botao que executa funcao de gerar dica ao ser clicado
botao.addEventListener("click", gerarDica);