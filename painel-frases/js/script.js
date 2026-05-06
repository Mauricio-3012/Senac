// array de frases
const frases = [
    "Sonhos são caminhos construídos pelo coração.",
    "Impossível é uma palavra que serve só de enfeite no dicionário",
    "Você é beleza, luz e força.",
    "Dias nublados guardam o sol atrás deles.",
    "Permita que o seu corpo descanse",
    "Por trás de um dia difícil, há uma versão forte de você que sempre seguiu em frente."
];

// captura elementos do html
let gerarFrase = document.querySelector('button');
let frase = document.querySelector('#frase');

// funcao que mostra frase aleatoria da array
function mostrarFrase(){
    const novaFrase = Math.floor(Math.random() * frases.length);
    frase.innerText = frases[novaFrase];
};

// botao que executa a funcao de mostrarFrase
gerarFrase.addEventListener('click', mostrarFrase);