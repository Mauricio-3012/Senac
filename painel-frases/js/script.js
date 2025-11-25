const frases = [
    "Sonhos são caminhos construídos pelo coração.",
    "Impossível é uma palavra que serve só de enfeite no dicionário",
    "Você é beleza, luz e força.",
    "Dias nublados guardam o sol atrás deles.",
    "Permita que o seu corpo descanse",
    "Por trás de um dia difícil, há uma versão forte de você que sempre seguiu em frente."
];

let gerarFrase = document.querySelector('button');
let frase = document.querySelector('#frase');

function mostrarFrase(){
    const novaFrase = Math.floor(Math.random() * frases.length);
    frase.innerText = frases[novaFrase];
};
gerarFrase.addEventListener('click', mostrarFrase);