'use stric';
//json para guiar a criação de todas as letras
const sons ={
    'A': 'boom.wav',
    'S': 'clap.wav',
    'D': 'hihat.wav',
    'F': 'kick.wav',
    'G': 'openhat.wav',
    'H': 'ride.wav',
    'J': 'snare.wav',
    'K': 'tink.wav',
    'L': 'tom.wav'
}
//função para criar o div automaticamente
const criarDiv = (texto) => {
    const div = document.createElement('div');
    div.classList.add('key');
    div.textContent = texto;
    div.id = texto;
    document.getElementById('container').appendChild(div);
}
//função para exibir os sons
const exibir = (sons) => Object.keys(sons).forEach(criarDiv);

//função para tocar o som
const tocarSom = (letra) =>{
    const audio = new Audio(`./sounds/${sons[letra]}`);
    audio.play();
}
//colocando um efeito na letra
const adicionarEfeito = (letra) => document.getElementById(letra).classList.add('active');

//removendo efeito na letra
const removerEfeito = (letra) => {
    const div = document.getElementById(letra);
    const removeActive = () => div.classList.remove('active');

    div.addEventListener('transitionend', removeActive);
}



//função para receber o click e aonde foi clicado
const ativarDiv = (evento) =>{

    //fazendo uma verificação para ver se tem a letra, caso não tenha nao executa nada (validação!!)
    const letra = evento.type == 'click' ? evento.target.id : evento.key.toUpperCase();
    const letraPermitida = sons.hasOwnProperty(letra); 
    if(letraPermitida ){
        adicionarEfeito(letra);
    tocarSom(letra);
    removerEfeito(letra);
    }
}
// para tocar o som
exibir(sons);
//caso o usuario clique ou aperte a letra no teclado, uma ação será executada
document.getElementById('container').addEventListener('click',ativarDiv);
//pegando a ação do teclado agora, caso clique na letra aparece o som
window.addEventListener('keydown',ativarDiv);

